# 🎬 Cinevo — Movie Discovery Platform

Cinevo is a modern and responsive movie discovery platform designed to help users explore movies, discover different genres, view ratings, and find their next story worth watching.

🔗 **Live Demo:** https://cinevo-ten.vercel.app/

---

## ✨ Features

- 🎬 Modern cinematic user interface
- 🏠 Responsive Home page
- 🔎 Movie search functionality
- 🎭 Browse movies by genre
- ⭐ Movie ratings
- 📅 Movie release information
- 🕒 Movie duration
- 📖 Detailed movie information modal
- 📱 Fully responsive design
- 🎞️ Featured movies section
- 🔥 Trending movies section
- 📚 Explore Movies page
- 📩 Contact Us page
- ℹ️ About Cinevo page
- 🧭 React Router based navigation
- 🎨 Dark cinematic design system
- ⚡ Smooth and interactive UI

---

## 🖥️ Pages

### Home

The homepage introduces Cinevo with a cinematic hero section, featured movies, genres, trending movies, platform highlights, and a final call-to-action.

### Explore Movies

A dedicated movie discovery page where users can:

- Search movies by title
- Filter movies by genre
- Sort movies by rating
- Sort movies by release year
- Sort movies alphabetically
- Open detailed movie information

### About Us

Explains the idea behind Cinevo, its mission, and the experience it aims to provide for movie lovers.

### Contact Us

Provides a clean contact interface where users can submit inquiries, feedback, feature suggestions, or issue reports.

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- JavaScript ES6+
- Tailwind CSS
- React Icons
- Framer Motion

### Development

- Vite
- Git
- GitHub

### Deployment

- Vercel

---

## 🎨 Design System

Cinevo uses a dark cinematic visual identity with a warm accent color palette.

| Color         | Hex       |
| ------------- | --------- |
| Pearl Lusta   | `#E7E0CB` |
| Temptress     | `#31010F` |
| Bright Sun    | `#FACC3B` |
| Pomegranate   | `#E6481B` |
| Fire Engine   | `#C71D1C` |
| Big Dip Oruby | `#9A1840` |

The interface focuses on:

- High contrast
- Cinematic imagery
- Minimal layouts
- Responsive components
- Smooth interactions
- Clear visual hierarchy

---

## 📂 Project Structure

```text
src/
├── assets/
│
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   └── SectionTitle.jsx
│   │
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   │
│   └── movie/
│       ├── MovieCard.jsx
│       ├── MovieGrid.jsx
│       ├── SearchBar.jsx
│       └── MovieDetailsModal.jsx
│
├── data/
│   └── homeMovies.js
│
├── layouts/
│   └── MainLayout.jsx
│
├── pages/
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── components/
│   │       ├── Hero.jsx
│   │       ├── FeaturedMovies.jsx
│   │       ├── BrowseGenres.jsx
│   │       ├── TrendingMovies.jsx
│   │       ├── WhyCinevo.jsx
│   │       └── MovieCTA.jsx
│   │
│   ├── ExploreMovies/
│   │   └── ExploreMovies.jsx
│   │
│   ├── About/
│   │   └── About.jsx
│   │
│   └── Contact/
│       └── Contact.jsx
│
├── routes/
│   └── Router.jsx
│
├── services/
│   └── movieApi.js
│
├── hooks/
│   └── useMovies.js
│
├── utils/
│   ├── formatDate.js
│   └── formatRating.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/cinevo.git
```

### 2. Navigate to the project

```bash
cd cinevo
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 📦 Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🔌 API Integration

Cinevo is designed to work with movie data from an external API.

The planned API integration uses the **TVMaze API**:

```text
GET /search/shows?q=:query
```

and:

```text
GET /shows
```

The current UI uses local movie data during development, allowing the interface and components to be built independently from the API layer.

This makes it easier to replace the local data with real API responses later.

---

## 🎯 Core Functionality

### Movie Search

Users can search for movies by title.

### Genre Filtering

Movies can be filtered based on their genre.

### Sorting

The Explore page supports sorting by:

- Rating — High to Low
- Rating — Low to High
- Release Year — Newest
- Release Year — Oldest
- Title — A to Z
- Title — Z to A

### Movie Details

Each movie card includes a **See Details** action that opens a modal containing:

- Movie poster
- Title
- Rating
- Release date
- Genre
- Duration
- Overview
- Director
- Language
- Status

---

## 📱 Responsive Design

Cinevo is designed to provide a consistent experience across:

- 📱 Mobile
- 📲 Tablet
- 💻 Laptop
- 🖥️ Desktop

The layout, navigation, movie cards, forms, and content sections adapt to different screen sizes.

---

## 🧩 Component-Based Architecture

Cinevo follows a reusable component-based architecture.

Examples include:

```text
MovieCard
MovieDetailsModal
Header
Footer
Hero
FeaturedMovies
BrowseGenres
TrendingMovies
WhyCinevo
MovieCTA
```

This keeps the project organized and makes individual UI sections easier to maintain and extend.

---

## 🔮 Future Improvements

Planned improvements include:

- [ ] Real movie API integration
- [ ] Dynamic movie search
- [ ] Real-time genre filtering
- [ ] Movie pagination
- [ ] Movie trailers
- [ ] Watchlist functionality
- [ ] User authentication
- [ ] Favorite movies
- [ ] Personalized recommendations
- [ ] Backend API
- [ ] MongoDB integration
- [ ] Loading skeletons
- [ ] Error handling
- [ ] Advanced movie filters

---

## 📸 Project Preview

### Home

> Add your Home page screenshot here.

```text
docs/
└── home.png
```

### Explore Movies

> Add your Explore page screenshot here.

```text
docs/
└── explore.png
```

### Movie Details

> Add your movie details modal screenshot here.

```text
docs/
└── movie-details.png
```

---

## 👨‍💻 Author

**Rafiul Bari Turjo**

Junior MERN Stack Developer focused on building modern, responsive and user-friendly web applications.

### Connect With Me

- 💼 LinkedIn: https://linkedin.com/in/rafiul-bari-turjo/
- 🐙 GitHub: https://github.com/TurjoyBari
- 🌐 Portfolio: https://rafiul-bari-dev.vercel.app/

---

## 📄 License

This project was created for learning, practice, and portfolio purposes.

---

<p align="center">
  Made with ❤️ and ☕ by Rafiul Bari Turjo
</p>
