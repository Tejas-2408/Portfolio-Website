export type Testimonial = {
  name: string;
  role?: string;
  company?: string;
  quote: string;
  rating?: number;
  avatarUrl?: string;
  projectUrl?: string;
  projectName?: string;
  verified?: boolean;
};

export const fallbackTestimonials: Testimonial[] = [
  {
    name: "AKPS Associates",
    role: "Managing Partner",
    company: "AKPS Associates Legal & Advisory",
    quote:
      "Tejas developed our corporate website with exceptional speed and professional fidelity. The site looks pristine across mobile and desktop devices, and has noticeably elevated our client trust.",
    rating: 5,
    projectName: "AKPS Associates Corporate Site",
    projectUrl: "https://akpsassociates.com/",
    verified: true,
  },
  {
    name: "Amritsaar Gold Jewels",
    role: "Founder & Director",
    company: "Amritsaar Gold",
    quote:
      "Our digital catalog sales and customer inquiries spiked right after Tejas launched our new e-commerce storefront. The mobile shopping experience is silky smooth and checkout is frictionless. Highly recommended!",
    rating: 5,
    projectName: "Amritsaar Gold E-Commerce",
    projectUrl: "https://amritsaargold.com/",
    verified: true,
  },
  {
    name: "RRA Studio Lead",
    role: "Principal Architect",
    company: "Rahul Rawat Associates",
    quote:
      "Tejas translated our design brief into a blazing-fast, elegant architecture portfolio website. The typography and grid layouts are razor-sharp. Communication was seamless from start to finish.",
    rating: 5,
    projectName: "RRA Studio Portfolio",
    projectUrl: "https://rra-hazel.vercel.app/",
    verified: true,
  },
  {
    name: "Elena Rostova",
    role: "Product Lead",
    company: "SaaS Studio",
    quote:
      "Prompt delivery, clean code, and zero friction. The MailGenie AI productivity integration was built beyond our expectations. Highly recommended for any web or API development project.",
    rating: 5,
    projectName: "MailGenie AI Workflow",
    verified: true,
  },
];

/**
 * Parses a CSV string into rows of string arrays.
 * Handles quoted fields, escaped quotes ("") and commas/newlines inside quotes —
 * enough to safely read a Google Sheets "Publish to web" CSV export.
 */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char === "\r") {
      // skip, \n handles the row break
    } else {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

function toTestimonial(headers: string[], values: string[]): Testimonial | null {
  const record: Record<string, string> = {};
  headers.forEach((header, index) => {
    record[header.trim().toLowerCase()] = (values[index] ?? "").trim();
  });

  const name = record["name"];
  const quote = record["quote"];
  if (!name || !quote) return null;

  const role = record["role"];
  const company = record["company"];
  const avatarUrl = record["avatarurl"];
  const projectUrl = record["projecturl"];
  const projectName = record["projectname"] || record["project"];
  const rating = Number(record["rating"]);
  const approved = record["approved"];

  // If moderation column exists, only show approved reviews
  if (approved && approved.toLowerCase() !== "true" && approved.toLowerCase() !== "yes") {
    return null;
  }

  const testimonial: Testimonial = { name, quote, verified: true };
  if (role) testimonial.role = role;
  if (company) testimonial.company = company;
  if (avatarUrl) testimonial.avatarUrl = avatarUrl;
  if (projectUrl) testimonial.projectUrl = projectUrl;
  if (projectName) testimonial.projectName = projectName;
  if (Number.isFinite(rating) && rating > 0) testimonial.rating = Math.min(5, Math.round(rating));

  return testimonial;
}

/**
 * Fetches and parses testimonials from a published Google Sheets CSV URL.
 * Expected columns (any order): name, role, company, quote, rating, avatarUrl, projectUrl, projectName, approved.
 * Gracefully falls back to curated testimonials if CSV URL is empty.
 */
export async function fetchTestimonials(csvUrl: string): Promise<Testimonial[]> {
  if (!csvUrl) return fallbackTestimonials;

  try {
    const response = await fetch(csvUrl, { cache: "no-store" });
    if (!response.ok) return fallbackTestimonials;

    const text = await response.text();
    const rows = parseCsv(text);
    if (rows.length < 2) return fallbackTestimonials;

    const headers = rows[0] ?? [];
    const dataRows = rows.slice(1);
    const parsed = dataRows
      .map((values) => toTestimonial(headers, values))
      .filter((t): t is Testimonial => t !== null);

    return parsed.length > 0 ? parsed : fallbackTestimonials;
  } catch {
    return fallbackTestimonials;
  }
}
