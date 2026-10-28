# 🚀 TJCR Portfolio Setup & Client Review Guide

This guide walks you through collecting and displaying **verified client reviews** for delivered projects (AKPS Associates, RRA, Amritsaar Gold), configuring forms/sheets, and strategic advice on gathering feedback for your personal open-source projects.

---

## 📑 Table of Contents
1. [How to Collect Reviews for Client Delivered Projects](#1-how-to-collect-reviews-for-client-delivered-projects)
   - [Option A: Google Form & Automated Google Sheet Sync (Recommended)](#option-a-google-form--google-sheets-csv-sync)
   - [Option B: Direct Code Insertion in portfolio.ts](#option-b-direct-code-insertion)
2. [Ready-to-Send Client Review Request Template](#2-ready-to-send-client-review-request-template)
3. [Should You Take Reviews on Personal Projects' GitHub Repos?](#3-should-you-take-reviews-on-personal-projects-github-repos)
4. [Master Configuration Checklist & File Locations](#4-master-configuration-checklist)

---

## 1. How to Collect Reviews for Client Delivered Projects

Your portfolio distinguishes between:
- **Client Work (Delivered)**: Private commercial deliveries for clients (e.g. AKPS Associates, Amritsaar Gold, RRA). These feature **verified site owner testimonials** only. Random visitors cannot leave spam comments.
- **My Builds & Tools**: Open-source utilities (MailGenie, Epoch Time Converter, Cron Expression Converter, ZipLink) where anyone can explore code on GitHub, contribute, or leave community feedback.

### Option A: Google Form + Google Sheets CSV Sync

This option lets you send a Google Form to your client. When they submit, the review appears in your Google Sheet. Once you mark `approved = TRUE`, it automatically renders live on your portfolio!

#### Step 1: Create a Google Form
1. Go to [Google Forms](https://forms.google.com/) and create a new form titled **"Client Testimonial — Tejas Creatives"**.
2. Add the following fields:
   - **Full Name** *(Short answer, Required)*
   - **Your Role & Company** *(Short answer, Required — e.g. "Managing Partner at AKPS Associates")*
   - **Project Name / Website** *(Short answer or Dropdown — e.g. "AKPS Associates", "Amritsaar Gold", "RRA Studio")*
   - **Rating** *(Linear Scale: 1 to 5, Required)*
   - **Your Testimonial / Experience** *(Paragraph, Required)*
   - **Website URL** *(Short answer, Optional)*
   - **Avatar / Profile Photo URL** *(Short answer, Optional)*
3. Copy your Form's **Shortened Share Link** (e.g. `https://forms.gle/xyz...`).
4. Paste it in `src/data/portfolio.ts` on line 42:
   ```ts
   reviewFormUrl: "https://forms.gle/YOUR_FORM_ID",
   ```

#### Step 2: Link Google Form to Google Sheets
1. Inside your Google Form, open the **Responses** tab at the top.
2. Click **Link to Sheets** (the green spreadsheet icon) ➔ **Create a new spreadsheet** (e.g., *"TJCR Client Testimonials"*).
3. The sheet will automatically create columns:
   `Timestamp | Full Name | Your Role & Company | Project Name | Rating | Your Testimonial | Website URL | Avatar URL`

#### Step 3: Add the Moderation Column (`approved`)
To prevent unverified or spam submissions from appearing on your live site:
1. In the first row of your Google Sheet, add a new column header at the end named:
   ```
   approved
   ```
2. When a real client submits a review and you want it displayed on your site, set that row's `approved` cell to:
   ```
   TRUE
   ```
3. If left blank or set to `FALSE`, the website automatically hides it.

#### Step 4: Publish Google Sheet as CSV
1. In Google Sheets, click **File** in the top menu.
2. Select **Share** ➔ **Publish to web**.
3. Under *Link*, change **Web page** to **Comma-separated values (.csv)**.
4. Click **Publish** and copy the generated link (it starts with `https://docs.google.com/spreadsheets/d/e/.../pub?output=csv`).
5. Open `src/data/portfolio.ts` (around line 340) and paste the link:
   ```ts
   export const testimonialsConfig = {
     testimonialsSheetCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?output=csv",
     reviewFormUrl: "https://forms.gle/YOUR_FORM_ID",
   };
   ```

---

### Option B: Direct Code Insertion

If you have 3 to 5 core client projects and prefer zero external API dependencies, you can edit the quotes directly in code.

Open `src/data/portfolio.ts` under `clientProjects`:
```ts
// File: src/data/portfolio.ts
{
  id: "akps-associates",
  name: "AKPS Associates",
  client: "akpsassociates.com",
  url: "https://akpsassociates.com/",
  ownerTestimonial: {
    author: "Client Contact Name",
    role: "Managing Partner",
    company: "AKPS Associates Legal & Advisory",
    quote: "Tejas developed our official website with great speed and polish...",
    rating: 5,
    avatarInitials: "AK",
  },
}
```

---

## 2. Ready-to-Send Client Review Request Template

Send this message to your client right after launching their website:

> **Subject:** Quick question regarding the launch of [Website Name] 🚀
>
> Hi [Client Name],
>
> It was a pleasure building and launching **[Website Name]**! I'm thrilled with how fast, responsive, and aesthetic the live site turned out.
>
> If you have 60 seconds, could you share a quick review of your experience working together? It helps me immensely as an independent freelance developer:
>
> 👉 **[Paste Your Google Form Link Here]**
>
> Alternatively, if you're happy with this draft, let me know if I have your permission to feature it on my portfolio:
>
> *"Tejas brought a fresh design perspective and delivered our website in record time. Communication was seamless and the site is blazing fast on mobile."*
>
> Thanks again for the opportunity, and I'm always here if you need any updates or new features!
>
> Best regards,  
> **Tejas Bansal**  
> Founder, Tejas Creatives (TJCR) • [tjcr.in](https://tjcr.in)

---

## 3. Should You Take Reviews on Personal Projects' GitHub Repos?

### 💡 The Short Answer:
**Do NOT ask for text reviews as "reviews" on GitHub.** Instead, route GitHub visitors to **Stars (⭐)** and **Discussions / Contributions**, while keeping formal testimonial reviews on your portfolio and Chrome Web Store.

### 🔍 Why? (How Developers & Clients View GitHub):

| Feedback Channel | Best For | Why It Works Best |
|---|---|---|
| **GitHub Stars (⭐)** | Personal Projects & Open-Source Tools | On GitHub, **Stars** are the universal currency of credibility. A repository with 50+ stars builds 10x more trust with technical clients than issue comments. |
| **GitHub Discussions** | Feature feedback & community discussions | Enabling GitHub Discussions gives users a natural forum to share ideas and ask questions without cluttering your bug tracker. |
| **Portfolio Reviews / Form** | Freelance & Client Inquiries | Prospective freelance clients don't browse GitHub issues; they look at the curated testimonials and case studies on your portfolio ([tjcr.in](https://tjcr.in)). |
| **Chrome Web Store Reviews** | MailGenie Extension | For browser extensions, 5-star ratings in the Chrome Web Store drive organic installs and algorithm placement. |

### 🎯 What We Implemented on Your Portfolio:
Instead of awkward phrasing like *"Rate my project"*, your personal builds (MailGenie & Epoch Converter) now feature:
1. **`Refer code or contribute on GitHub ⭐`**: Links directly to the repo. Technical visitors naturally star the repo or inspect the clean code.
2. **`Try Extension / Launch Web App`**: Direct link to experience the product immediately.
3. **`LinkedIn Launch Post`**: Routes to your post for social proof and comments.
4. **Interactive Community Feedback**: Visitors on your portfolio can leave feedback directly in the modal on [tjcr.in](https://tjcr.in).

---

## 4. Master Configuration Checklist

| # | Item | File Path | Line # | What to Update |
|---|---|---|---|---|
| 1 | **Fiverr Gig / Profile** | `src/data/portfolio.ts` | **Line 37** | Replace `"https://www.fiverr.com/"` with your actual seller or gig URL |
| 2 | **LinkedIn URL** | `src/data/portfolio.ts` | **Line 35** | `https://www.linkedin.com/in/tejas24bansal/` *(Already updated!)* |
| 3 | **Professional Email** | `src/data/portfolio.ts` | **Line 24 & 41** | `creative@tjcr.in` *(Already updated!)* |
| 4 | **Personal Email** | `src/data/portfolio.ts` | **Line 26 & 40** | `tejasbansal6065@gmail.com` *(Already updated!)* |
| 5 | **Google Form URL** | `src/data/portfolio.ts` | **Line 39 & 342** | Paste your public Google Form link |
| 6 | **Google Sheets CSV** | `src/data/portfolio.ts` | **Line 341** | Paste your published CSV link |
| 7 | **FormSubmit Activation** | Email Inbox | N/A | Submit one test message on [tjcr.in/#contact](https://tjcr.in/#contact) and click "Activate" in `creative@tjcr.in` |
