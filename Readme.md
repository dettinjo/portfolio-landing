<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://joeldettinger.de">
    <img src="public/favicon-home-dark.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Portfolio Hub / Landing Page</h3>

  <p align="center">
    The central hub for my personal portfolio, directing visitors to specialized software and photography sub-sites.
    <br />
    <a href="#about-the-project"><strong>Explore the Features »</strong></a>
    <br />
    <br />
    <a href="https://joeldettinger.de">View Demo</a>
    ·
    <a href="https://github.com/dettinjo/portfolio_frontend/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/dettinjo/portfolio_frontend/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://joeldettinger.de)

This repository contains the central landing page for my personal portfolio. It serves as a simple, elegant gateway, directing visitors to two specialized sub-sites: one for software development and another for photography.

This "hub-and-spoke" architecture provides a clean separation of concerns while maintaining a cohesive brand identity.

Key Features of this repository:
*   **Minimalist Gateway:** A clean, focused landing page with direct links to the main portfolio sections.
*   **Internationalization:** Full support for English and German (EN/DE) with locale detection.
*   **Dynamic Theming:** A light/dark mode that respects user system preferences.
*   **Utility Pages:** Includes standalone, statically generated pages for Imprint and Privacy Policy.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This project leverages a modern, fast, and developer-friendly stack.

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Tailwind][TailwindCSS]][Tailwind-url]
* [![Vercel][Vercel]][Vercel-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following software installed on your machine.
*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your-username/portfolio-landing.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Create an environment file. In the root directory, copy `.env.example` to `.env.local` and fill in the domain names for your other portfolios. This ensures the links on the landing page work correctly in your local environment.
    ```env
    # .env.local
    NEXT_PUBLIC_ROOT_DOMAIN="your-domain.com"
    NEXT_PUBLIC_SOFTWARE_DOMAIN="code.your-domain.com"
    NEXT_PUBLIC_PHOTOGRAPHY_DOMAIN="photos.your-domain.com"
    # ... (add other personal info for imprint/privacy)
    ```
4.  Start the Next.js development server.
    ```sh
    npm run dev
    ```
    Your site will be available at `http://localhost:3000`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See the `LICENSE` file for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Project Link: [https://github.com/your-username/portfolio-landing](https://github.com/your-username/portfolio-landing)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This project was made possible by these incredible tools and libraries.

*   [shadcn/ui](https://ui.shadcn.com/)
*   [next-intl](https://next-intl.dev/)
*   [Lucide React](https://lucide.dev/)
*   [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[issues-shield]: https://img.shields.io/github/issues/dettinjo/portfolio_frontend.svg?style=for-the-badge
[issues-url]: https://github.com/dettinjo/portfolio_frontend/issues
[license-shield]: https://img.shields.io/github/license/dettinjo/portfolio_frontend.svg?style=for-the-badge
[license-url]: https://github.com/dettinjo/portfolio_frontend/blob/main/LICENSE
[product-screenshot]: src/res/screenshots/portfolio_home.svg
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Strapi.io]: https://img.shields.io/badge/Strapi-2E7EEA?style=for-the-badge&logo=strapi&logoColor=white
[Strapi-url]: https://strapi.io/
[Vercel]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com/