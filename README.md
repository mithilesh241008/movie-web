# FRAME — Movie Discovery

*Cinema, curated.*

A small movie-discovery site built with plain HTML, CSS and JavaScript. It holds a
collection of twelve films you can search, filter by genre, sort by rating, open in a
details view, and save to a watchlist that survives a refresh.

## About

Built as part of the **Coding Ninjas 10X SRM Web Development Recruitment Task —
First Year Task 2: Movie Night**.

The brief asked for a movie collection with posters, ratings, genres, a search bar and a
genre filter. I went a little further with the bonus items (details modal, watchlist,
theme toggle, rating sort) because they are the parts that make it feel like something you
would actually use.

The collection is deliberately small and mixed: Hollywood, Korean, Japanese, Indian and
French films, rather than twelve variations on the same blockbuster.

## Features

- **Movie collection** — 12 films, each with a poster, title, year, rating, genres, short
  description, director, runtime, language and country
- **Search** — matches partial titles as you type, case-insensitive (`inter` finds
  *Interstellar*)
- **Genre filter** — the genre list is built from the data, not hard-coded, so films with
  several genres filter correctly
- **Rating sort** — default order, high to low, low to high
- Search, genre and sort all work at the same time
- **Details modal** — poster, backdrop, full metadata and a watchlist button; closes with
  the X, a click outside, or the Escape key
- **Watchlist** — add or remove from the card, the hero or the modal; saved to
  `localStorage` under `frame-watchlist` and shown as a count in the navigation
- **Theme toggle** — dark by default, light theme available, preference stored under
  `frame-theme`
- **Empty states** — one for "no films match your search" with a reset, one for an empty
  watchlist with a link back to Discover
- **Responsive** — tested from 1440px down to 375px
- Keyboard accessible, with visible focus states and `prefers-reduced-motion` support

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (no frameworks, no build step)
- `localStorage` for the watchlist and theme
- Google Fonts: Instrument Serif and Inter

## Project Structure

```
/
├── index.html      page structure and the modal markup
├── style.css       design tokens, layout, components, responsive rules
├── script.js       movie data, state, filtering/sorting, rendering, events
├── README.md
└── assets/
    └── favicon.svg
```

`script.js` is organised top to bottom in the order the app actually runs: data, state,
element lookups, helpers, storage, filtering, watchlist, rendering, modal, theme, events,
init.

## Posters and ratings

Posters and backdrops are loaded from TMDB's image CDN (`image.tmdb.org`), which is what
TMDB provides those images for. Nothing is downloaded into the repository, so the project
stays small and no copyrighted artwork is redistributed here. Each `<img>` has descriptive
alt text, and if an image fails to load the card falls back to a readable placeholder
showing the film's title rather than a broken image icon.

Ratings are TMDB user scores, converted to a score out of 10 (a TMDB score of 85% is shown
as 8.5). The modal labels them so it is clear where the number comes from. Runtimes,
directors, release years and genres also come from TMDB. The short descriptions are my own
writing, not copied from a database.

This project uses no API key — the image URLs are plain static links, so there is nothing
secret in the repo.

## Running Locally

There is no build step. Clone or download the folder and open `index.html` in a browser.

If you would rather serve it over HTTP (recommended, so the fonts and images behave exactly
as they would when deployed):

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## What I Practiced

- DOM manipulation with `createElement`, `textContent` and `replaceChildren` instead of
  string HTML, which keeps dynamic content safe by default
- Arrays and objects — an array of movie objects as the single source of truth
- `filter`, `sort`, `map` and `includes` for the search/genre/sort pipeline
- Event handling, including delegation for the mobile navigation and the modal backdrop
- `localStorage`, with `try/catch` and validation so corrupted saved data cannot break the
  page
- Responsive CSS with grid, `clamp()` and custom properties for theming
- The `<dialog>` element, ARIA attributes and focus management

## Deployment

Not deployed yet.

Live URL: _(to be added)_
