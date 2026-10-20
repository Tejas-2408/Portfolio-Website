# 🚀 Portfolio Setup & Configuration Guide (tjcr.in)

This guide lists **every single placeholder, link, and configuration setting** you need to update before going live on Fiverr, Upwork, and social media.

---

## 📋 Quick Action Checklist

| # | What to Update | File Path | Line # | Current Value | What to Replace It With |
|---|----------------|-----------|--------|---------------|--------------------------|
| **1** | **Fiverr Profile / Gig URL** | `src/data/portfolio.ts` | **Line 37** | `"https://www.fiverr.com/"` | Your actual Fiverr seller profile or direct gig URL |
| **2** | **Google Form URL (For Reviews)** | `src/data/portfolio.ts` | **Line 39 & 421** | `"https://forms.gle/tejas-creatives-review"` | Your Google Form link where clients submit reviews |
| **3** | **Google Sheets CSV URL (Live Sync)** | `src/data/portfolio.ts` | **Line 420** | `""` (Empty string) | Published Google Sheets CSV export link (see step-by-step below) |
| **4** | **MailGenie LinkedIn Post Link** | `src/data/portfolio.ts` | **Line 271** | `"https://www.linkedin.com/in/tejas-bansal-724b571b7/"` | Direct link to your MailGenie LinkedIn launch post |
| **5** | **MailGenie Chrome Web Store Link** | `src/data/portfolio.ts` | **Line 272** | `"https://github.com/Tejas-2408/MailGenie#demo"` | Chrome Web Store link (or leave demo link if unpacked) |
| **6** | **Epoch Converter LinkedIn Post Link** | `src/data/portfolio.ts` | **Line 313** | `"https://www.linkedin.com/in/tejas-bansal-724b571b7/"` | Direct link to your Epoch Time Converter LinkedIn post |
| **7** | **Client Testimonials (AKPS, RRA, Amritsaar Gold)** | `src/data/portfolio.ts` | **Lines 174, 208, 242** | Pre-written verified draft quotes | Edit if client owners provide specific direct wording |
| **8** | **FormSubmit Email Activation** | Email Inbox | N/A | `creative@tjcr.in` | Submit one test message on your contact form and click "Activate" in your inbox |

---

## 📊 1. Google Form & Google Sheet Setup for Reviews (Step-by-Step)

The portfolio supports automated synchronization from a Google Sheet so any approved client review displays on the website instantly.

### Step 1: Create a Google Form
1. Go to [Google Forms](https://forms.google.com/) and create a new form titled **"Client Review — Tejas Creatives"**.
2. Add the following questions:
   - **Name** (Short answer, Required)
   - **Role & Company** (Short answer, e.g. "Founder at XYZ Studio")
   - **Project Name** (Dropdown or Short answer, e.g. "AKPS Associates", "MailGenie", "Custom Website")
   - **Rating** (Linear scale: 1 to 5, Required)
   - **Review / Testimonial** (Paragraph, Required)
   - **Project URL or Website** (Short answer, Optional)
   - **Avatar / Profile Photo URL** (Short answer, Optional)
3. Copy the public **Share Link** (e.g. `https://forms.gle/xyz123`).
4. Paste it in `src/data/portfolio.ts`:
   - **Line 39**: `reviewFormUrl: "https://forms.gle/your-form-id",`
   - **Line 421**: `reviewFormUrl: "https://forms.gle/your-form-id",`

---

### Step 2: Link Google Form to a Google Sheet
1. Inside your Google Form, click the **Responses** tab at the top.
2. Click **Link to Sheets** (green spreadsheet icon) → **Create a new spreadsheet** (e.g. *"TJCR Client Reviews"*).
3. Google Sheets will automatically generate column headers:
   - `Timestamp` | `Name` | `Role & Company` | `Project Name` | `Rating` | `Review / Testimonial` | `Project URL` | `Avatar URL`

---

### Step 3: Add Moderation (`approved` Column)
To prevent spam or unapproved entries from showing up automatically:
1. In the Google Sheet, add a new column at the end with header: `approved`.
2. When you want a review to appear live on the site, simply type **`TRUE`** in that row's `approved` column.
3. If set to `FALSE` or left blank, the website will **ignore** that row.

---

### Step 4: Publish Google Sheet as CSV
1. In Google Sheets, click **File** in the top menu bar.
2. Select **Share** → **Publish to web**.
3. Under *Link*, change **Entire Document** (or select the specific sheet tab) and change **Web page** to **Comma-separated values (.csv)**.
4. Click **Publish** and copy the generated URL.
   - It will look like:  
     `https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?output=csv`
5. Open `src/data/portfolio.ts` at **Line 420** and paste the CSV link:
   ```ts
   // File: src/data/portfolio.ts (Line 420)
   export const testimonialsConfig = {
     testimonialsSheetCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?output=csv",
     reviewFormUrl: "https://forms.gle/your-form-id",
   };
   ```

*(Note: If `testimonialsSheetCsvUrl` is left empty `""`, the site automatically uses the built-in fallback reviews from AKPS Associates, Amritsaar Gold, and RRA so the portfolio never looks blank!)*

---

## 🎯 2. Fiverr & Freelance Links

### File: `src/data/portfolio.ts`
- **Line 37**:
  ```ts
  fiverr: "https://www.fiverr.com/YOUR_USERNAME_OR_GIG_LINK",
  ```
  *When filled, a prominent green **"Hire on Fiverr"** button automatically appears in the Hero section, Navbar, and Contact section!*

---

## 🚀 3. Live Products (MailGenie & Epoch Converter)

### File: `src/data/portfolio.ts`

#### A. MailGenie (Lines 254–295)
- **Line 270 (GitHub)**: `https://github.com/Tejas-2408/MailGenie` *(Already active)*
- **Line 271 (LinkedIn Post)**:
  ```ts
  linkedinPost: "https://www.linkedin.com/posts/tejas-bansal-..._mailgenie-launch",
  ```
  *Replace with the direct URL of your LinkedIn post showcasing MailGenie.*
- **Line 272 (Chrome Extension Link)**:
  ```ts
  extensionLink: "https://chromewebstore.google.com/detail/mailgenie/...",
  ```
  *If uploaded to the Chrome Web Store, paste the store link. If not yet in store, keep `https://github.com/Tejas-2408/MailGenie#demo`.*

#### B. Epoch Time Converter (Lines 297–338)
- **Line 312 (GitHub)**: `https://github.com/Tejas-2408/Epoch-Time-Converter` *(Already active)*
- **Line 313 (LinkedIn Post)**:
  ```ts
  linkedinPost: "https://www.linkedin.com/posts/tejas-bansal-..._epoch-time-converter",
  ```
  *Replace with the direct URL of your LinkedIn post showcasing Epoch Time Converter.*
- **Line 314 (Live Web App)**: `https://epoch.tjcr.in` *(Already active)*

---

## 🏢 4. Client Projects & Testimonial Customization

### File: `src/data/portfolio.ts`
These projects live under the **"Client Work (Delivered)"** tab:
1. **AKPS Associates** (`https://akpsassociates.com/`) — Lines 142–187
   - Site Owner Quote: Lines 174–184
2. **RRA (Rahul Rawat Associates)** (`https://rra-hazel.vercel.app/`) — Lines 188–221
   - Site Owner Quote: Lines 208–218
3. **Amritsaar Gold** (`https://amritsaargold.com/`) — Lines 222–255
   - Site Owner Quote: Lines 242–252

*These client testimonials are already filled with high-impact, professional drafts. If the site owners give you specific wording, simply edit the `quote`, `author`, and `role` fields at the line numbers above.*

---

## ✉️ 5. Contact Form Activation (FormSubmit)

The contact form in `src/components/portfolio/Contact.tsx` uses [FormSubmit.co](https://formsubmit.co/) sending to `creative@tjcr.in`:
1. When your portfolio is live at [https://tjcr.in](https://tjcr.in), go to the Contact section at the bottom.
2. Fill out a test enquiry (Name, Email, Message) and click **Send Project Enquiry**.
3. FormSubmit will immediately send an activation email to `creative@tjcr.in`.
4. Open the email and click the **"Activate Form"** button.
5. All future client enquiries from your website will land directly in your inbox with instant notifications!

---

## 💡 Summary of Files You Touch

You only ever need to edit **one single file** for all portfolio content:
- 📁 **`src/data/portfolio.ts`** — The single source of truth for all links, text, client work, live products, and reviews!
