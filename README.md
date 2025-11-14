# StoryBit — Streaming Dashboard Clone

A simplified streaming-dashboard clone built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.  
The app fetches movie data from **OMDb API**, renders a hero banner, movie rows, and dynamic detail pages.

---

## 🚀 Live Demo
https://first-skill-netflix-clone-1assignment-czaurmtd4.vercel.app/

---

## ⭐ Features
- ✔ Homepage with **Hero Banner**
- ✔ Multiple **horizontal movie rows**
- ✔ **Dynamic movie detail pages** (`/movie/[imdbID]`)
- ✔ **Server Components** for data fetching (Next.js 14)
- ✔ **TypeScript** interfaces (`Movie`, `MovieDetail`)
- ✔ **Error-safe image rendering** + fallbacks
- ✔ **Responsive UI** (Tailwind)
- ✔ Deployed on **Vercel** with environment variables

---

## 🛠 Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **OMDb API**
- **Vercel Deployment**

---

## 🖥 Local Setup

### 1. Clone the repo
```bash
git clone https://github.com/sridharreddy7780/first-skill-netflix-clone-1assignment.git
cd first-skill-netflix-clone-1assignment

2. Install dependencies
npm install

3. Create .env.local in project root
OMDB_API_KEY=e36633ec
NEXT_TELEMETRY_DISABLED=1

4. Run the development server
npm run dev


Now open:
➡ http://localhost:3000

📦 Production Build
npm run build
npm start

🌐 Deployment (Vercel)

Push the repo to GitHub.

Open Vercel → Import GitHub repo.

Add Environment Variable:

OMDB_API_KEY = e36633ec


Click Deploy.

📁 Project Structure
app/
  components/
  movie/[id]/page.tsx
  page.tsx

lib/
  omdb.ts
  image.ts

types/
  movie.ts

public/
  logo.png
  fallback.png
  fallback-poster.png

📘 AI Usage

See the AI_Report.md in the repo for details on how AI-assisted development was used.

---

## ✔ Completed Requirements (per assignment)

### **Phase 1 — Setup & API Integration**
- Initialized Next.js 14 project with TypeScript
- Added Tailwind CSS configuration
- Created Git repository and GitHub project
- Integrated OMDb API with environment variable security
- Added TypeScript interfaces for Movies

### **Phase 2 — Homepage Development**
- Implemented fixed Header / Navigation
- Added server-side data fetching via App Router
- Built a Hero Banner with Next/Image optimizations
- Added MovieRow component with horizontal scrolling
- Rendered multiple movie rows dynamically

### **Phase 3 — Dynamic Routing**
- Added `/movie/[id]` dynamic route
- Fetched detailed movie data via server component
- Implemented responsive movie detail page layout
- Added poster fallbacks and safe image handling

### **Phase 4 — Deployment & Documentation**
- Deployed final build on Vercel
- Configured environment variables in Vercel dashboard
- Added AI_Report.md and README.md
- Verified production build and tested navigation

---
