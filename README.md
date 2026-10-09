# PR Enterprises - Coming Soon Page

This repository contains the elegant, premium "Coming Soon" landing page for PR Enterprises. It is built with plain HTML, CSS, and JavaScript, designed to be lightweight, responsive, and visually striking without any dependencies.

## Local Development & Testing

Since this project uses no build systems or dependencies, you can simply open the `index.html` file in your browser to view the site.

For a slightly better experience (to avoid CORS issues if you add external assets later), serve the directory with a local web server:
- If you have Python installed: `python -m http.server 8000`
- If you have Node.js installed: `npx serve`

## GitHub Pages Deployment

This site is configured to be hosted on GitHub Pages for free.

1.  **Repository Setup:**
    Create a public repository named `prenterprises-coming-soon` (or your preferred name) on GitHub.
2.  **Pushing Code:**
    Push this code to the `main` branch.
3.  **Enabling Pages:**
    Go to the repository Settings > Pages.
    Select the `main` branch and `/ (root)` folder, and click Save.
4.  **Custom Domain:**
    In the Pages settings, you'll see a Custom Domain field. It should automatically pick up `prenterprises.co.in` from the `CNAME` file. Ensure "Enforce HTTPS" is checked once the certificate is generated (this can take up to 24 hours).

## GoDaddy DNS Configuration

To point your GoDaddy domain (`prenterprises.co.in`) to GitHub Pages, you need to configure your DNS settings in your GoDaddy account.

**Before making changes, check for and remove any existing conflicting A, AAAA, or CNAME records for `@` or `www`. Do not delete MX records if you use custom email!**

Add the following records:

### 1. A Records (Apex Domain)
Point the root domain (`@`) to GitHub's IPs. Create four separate A records:

*   **Type:** `A` | **Name/Host:** `@` | **Value:** `185.199.108.153`
*   **Type:** `A` | **Name/Host:** `@` | **Value:** `185.199.109.153`
*   **Type:** `A` | **Name/Host:** `@` | **Value:** `185.199.110.153`
*   **Type:** `A` | **Name/Host:** `@` | **Value:** `185.199.111.153`

### 2. CNAME Record (www Subdomain)
Point the `www` subdomain to your GitHub Pages URL.

*   **Type:** `CNAME` | **Name/Host:** `www` | **Value:** `<YOUR-GITHUB-USERNAME>.github.io.` (Replace with your actual GitHub username, keep the trailing dot if GoDaddy requires it)

## Troubleshooting

*   **Domain not working after DNS change:** DNS changes can take anywhere from a few minutes to 48 hours to propagate globally. You can use tools like `dnschecker.org` to check the status.
*   **HTTPS not working:** GitHub Pages automatically provisions a TLS certificate. This can take a while after you configure the custom domain. If it's still pending after 24 hours, try removing and re-adding the custom domain in GitHub settings.
*   **Fonts not loading:** The site is designed with fallback fonts (Georgia/Times New Roman) so it will still look acceptable if Google Fonts fails to load or is blocked.
*   **Animations not playing:** The particle background respects the user's OS-level "prefers-reduced-motion" setting. If you have this enabled, animations will be disabled for accessibility.
