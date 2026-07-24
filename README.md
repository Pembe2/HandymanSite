# Handyman Business Website Starter

This package contains a responsive two-page website:

- `index.html` — welcome page with service list, process, and calls to action
- `quote.html` — detailed quote request form
- `styles.css` — all visual styling
- `site.js` — mobile navigation and copyright year

## First changes to make

1. Replace `Reliable Handyman Co.` with your business name.
2. Replace the phone number, email address, and service area.
3. In `quote.js`, change:

   `const BUSINESS_EMAIL = "quotes@reliablehandymanco.com";`

4. Edit the service list so it matches the work you offer and local licensing rules.
5. Add your real logo, photos, insurance language, and customer reviews.

## How the quote form works

The quote page is prepared for a Jobber request-form embed.

In `quote.html`, find the `JOBBER SETUP` comment and replace the placeholder
with the complete embed code copied from your Jobber account.

Jobber navigation:

`Settings > Requests and Bookings > Share Links > Copy Code`

Once installed, customer submissions go directly into Jobber instead of
opening the customer's email application.


## Recommended production upgrade

For a more reliable customer experience, connect the form to one of these:

- Formspree
- Netlify Forms
- Web3Forms
- EmailJS
- A custom serverless function using Resend, Postmark, or SendGrid

A backend form service can send the email directly, show a success page, reduce
spam, save leads to a database, and support file uploads.

## Local preview

Open `index.html` directly in a browser, or run a local web server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Hosting options

This static site can be deployed to:

- GitHub Pages
- Netlify
- Cloudflare Pages
- Vercel
- Any standard web host
