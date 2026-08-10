export type Testimonial = {
  name: string;
  role?: string;
  company?: string;
  quote: string;
  rating?: number;
  avatarUrl?: string;
  projectUrl?: string;
};

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
  const rating = Number(record["rating"]);

  const testimonial: Testimonial = { name, quote };
  if (role) testimonial.role = role;
  if (company) testimonial.company = company;
  if (avatarUrl) testimonial.avatarUrl = avatarUrl;
  if (projectUrl) testimonial.projectUrl = projectUrl;
  if (Number.isFinite(rating) && rating > 0) testimonial.rating = Math.min(5, Math.round(rating));

  return testimonial;
}

/**
 * Fetches and parses testimonials from a published Google Sheets CSV URL.
 * Expected columns (any order): name, role, company, quote, rating, avatarUrl, projectUrl.
 */
export async function fetchTestimonials(csvUrl: string): Promise<Testimonial[]> {
  if (!csvUrl) return [];

  const response = await fetch(csvUrl, { cache: "no-store" });
  if (!response.ok) throw new Error(`Failed to fetch testimonials (${response.status})`);

  const text = await response.text();
  const rows = parseCsv(text);
  if (rows.length < 2) return [];

  const headers = rows[0] ?? [];
  const dataRows = rows.slice(1);
  return dataRows
    .map((values) => toTestimonial(headers, values))
    .filter((t): t is Testimonial => t !== null);
}
