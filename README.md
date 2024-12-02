[![Netlify Status](https://api.netlify.com/api/v1/badges/9fd1343e-fb58-4850-b494-6ae5f50e944d/deploy-status)](https://app.netlify.com/sites/hall3/deploys)

<div align="center">
  <a href="https://hall3.netlify.app">
    <img width="20%" src="https://hall3.netlify.app/images/h3_remastered_dp.png" alt="Hall 3 Logo">
  </a>
</div>

[![hugo](https://user-images.githubusercontent.com/43764894/223559747-e9d7f19d-91bf-46a9-a0cb-8d6a40d3cfa3.png)](https://ntl.fyi/3P9w1mr)

# NTU Hall 3 Official Website

This is the repository containing the source code for the official NTU Hall 3 website which can be found [here.](https://hall3.netlify.app) This project is powered by Hugo and Netlify. This project also marks the last official task that Zee Jay has done for Hall 3. Thanks for the 2 years of fond memories.

## Table of Contents:

- [Regular Setup](#regular-setup)
  - [Cloning + Install Packages](#cloning--install-packages)
  - [File Structure]()

## Regular Setup

### Cloning + Running Locally

- Clone this repo with one of these options:

  - Click the 'Use this template' button at the top of the page
  - Or via the command line `git clone https://github.com/netlify-templates/hugo-quickstart`

- Start the Hugo server & check it out:

  - `hugo server -D`
  - go to [http://localhost:1313/](http://localhost:1313/)

### File Structure
```
ntu-hall-3-official-website
├── archetypes/                # Default content types for Hugo to scaffold new pages.
│   └── default.md             # Default front matter template for new content.
├── assets/                    # Static assets like CSS, JS, and images used in the website.
│   ├── components/            # Reusable UI components.
│   │   ├── faq-accordion/     # Accordion component for FAQ sections.
│   │   │   ├── faq-accordion.css
│   │   │   └── faq-accordion.js
│   │   ├── vertical-accordion/ # Accordion component for vertical layout.
│   │   │   ├── vertical-accordion.css
│   │   │   └── vertical-accordion.js
│   ├── css/                   # Stylesheets organized by pages and sections.
│   │   ├── committees/        # Styles specific to committee pages.
│   │   │   └── hall-council.css
│   │   ├── 404.css            # Styling for the 404 error page.
│   │   ├── ...                # Additional CSS files for other sections/pages.
│   ├── images/                # Image assets categorized by usage.
│   │   ├── about_page/        # Images for the "About" page.
│   │   ├── committee/         # Images related to committees.
│   │   ├── ...                # Additional image folders for various sections/pages.
│   ├── js/                    # JavaScript files for specific functionalities.
│   │   ├── about/             # Scripts for the "About" page.
│   │   ├── events/            # Scripts for the "Events" page.
│   │   ├── ...                # Additional scripts for other sections/pages.
├── content/                   # Markdown files representing the website content.
│   ├── committees/            # Content for committees.
│   │   ├── _index.md          # Index file for the committees section.
│   │   ├── dinner-and-dance.md # Specific committee pages.
│   │   ├── ...                # Other committee-related content files.
│   ├── hall-olympiad/         # Content related to Hall Olympiad events.
│   │   ├── cultural/          # Cultural events.
│   │   ├── recreational/      # Recreational events.
│   │   ├── sports/            # Sports events.
│   │   └── _index.md          # Index file for the Hall Olympiad section.
│   ├── ...                    # Other content files for pages like "About," "FAQs," etc.
├── cypress/                   # End-to-end testing setup using Cypress.
│   ├── e2e/                   # Folder for end-to-end test scripts.
│   │   └── basic.cy.js        # Basic test script for Cypress.
├── images/                    # Additional image uploads for the site.
│   ├── uploads/               # Directory for image uploads.
├── static/                    # Static files served directly without processing.
│   ├── admin/                 # Configuration for DecapCMS (formerly Netlify CMS).
│   │   ├── config.yml         # DecapCMS configuration file.
│   │   └── index.html         # Admin portal entry point.
│   ├── robots.txt             # Instructions for web crawlers.
├── themes/                    # Custom theme for the website.
│   ├── hall-3/                # Custom theme named "Hall-3."
│   │   ├── layouts/           # HTML templates for various pages and sections.
│   │   │   ├── _default/      # Default layouts for different content types.
│   │   │   ├── partials/      # Reusable HTML components like headers and footers.
│   │   │   ├── shortcodes/    # Custom shortcodes for embedding reusable content.
│   │   │   └── ...            # Other layout files for specific sections/pages.
│   │   ├── static/            # Theme-specific static assets like icons and images.
├── .gitignore                 # Specifies intentionally untracked files to ignore in Git.
├── .hugo_build.lock           # Lock file for Hugo's build process.
├── .prettierrc                # Configuration for Prettier code formatting.
├── config.toml                # Hugo configuration file.
├── cypress.config.js          # Cypress configuration file.
├── netlify.toml               # Configuration file for Netlify deployment.
├── package-lock.json          # Dependency tree for the project.
├── package.json               # Metadata and dependencies for the project.
├── README.md                  # Project documentation (you are editing this file).
├── renovate.json              # Configuration file for Renovate, a dependency update tool.
```