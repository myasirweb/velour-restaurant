# Velour — Fine Dining Restaurant Website

A fully animated, multi-page restaurant website built with React, Vite, GSAP, and React Router DOM — featuring scroll-driven animations, a responsive layout, and 8 pages for a fine-dining establishment.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?style=flat-square&logo=greensock&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

🔗 **Live Demo:** *(deploy karke link update karo)*

---

## Overview

Velour is a frontend web application for a fictional fine-dining restaurant. Demonstrates advanced animation techniques using GSAP ScrollTrigger, multi-page client-side routing with React Router DOM v6, and a fully responsive UI built with Bootstrap 5 and custom Sass styling.

---

## Features

- 🎬 Scroll-driven animations — GSAP + ScrollTrigger entrance and parallax effects
- 📱 Fully responsive — mobile-first layout using Bootstrap 5
- 🧭 Multi-page SPA — 8 pages with React Router DOM v6 and dynamic routes
- 🎠 Hero slider — Swiper.js full-screen image carousel
- 🍽️ Menu page — categorized dish listings with images
- 👨‍🍳 Chef profiles — dynamic routing via `/meet-the-chef/:id`
- 📷 Gallery page — responsive image grid
- 📅 Reservations page — booking form UI
- 🎨 Modular SCSS architecture

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18 |
| **Build Tool** | Vite 5 |
| **Routing** | React Router DOM v6 |
| **Animations** | GSAP + ScrollTrigger |
| **Slider** | Swiper.js |
| **CSS Framework** | Bootstrap 5 |
| **Styling** | Sass (SCSS) |
| **Linting** | ESLint |

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero slider, featured sections, GSAP animations |
| About | `/about` | Restaurant story and values |
| Menu | `/menu` | Full menu with categories |
| Chef | `/chef` | Meet the team overview |
| Chef Details | `/meet-the-chef/:id` | Individual chef profile |
| Gallery | `/gallery` | Photo gallery grid |
| Reservations | `/reservations` | Booking form |
| Contact | `/contact` | Contact information |

---

## Getting Started

### Prerequisites
- Node.js >= 16
- npm >= 8

### Installation

```bash
git clone https://github.com/myasirweb/velour-restaurant-.git
cd velour-restaurant-
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
npm run build
npm run preview
```

---

## Project Structure

```
velour-restaurant/
├── public/            # Static assets
├── src/
│   ├── assets/        # Images and media
│   ├── components/    # Reusable UI components
│   ├── pages/         # Route-level page components
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Menu/
│   │   ├── Chef/
│   │   ├── Gallery/
│   │   ├── Reservations/
│   │   └── Contact/
│   ├── styles/        # Global Sass styles
│   ├── App.jsx        # Root component with routing
│   └── main.jsx       # Entry point
├── index.html
├── vite.config.js
└── package.json
```
## Author

**Muhammad Yasir** — Frontend Engineer
- 🌐 [yasir-portfolio-nextjs.vercel.app](https://yasir-portfolio-nextjs.vercel.app)
- 💼 [linkedin.com/in/yasirweb](https://linkedin.com/in/yasirweb)
- 📧 muhammad.yasir1368@gmail.com

---

## License

[MIT License](LICENSE)
