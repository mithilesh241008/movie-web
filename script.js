/* ==========================================================
   FRAME — Cinema, curated.

   Data  →  state  →  filter / sort  →  render  →  interaction
   ========================================================== */

/* ---------------------------------------------------------
   1. Movie data
   Posters, backdrops, runtimes and ratings come from TMDB.
   `rating` is the TMDB user score expressed out of 10.
   Descriptions are written for this project.
   --------------------------------------------------------- */
const movies = [
  {
    id: "inception",
    title: "Inception",
    year: 2010,
    rating: 8.4,
    genres: ["Action", "Sci-Fi", "Adventure"],
    description:
      "A thief who steals ideas out of dreams is hired to plant one instead. The job means going several layers down, where time stretches and nothing stays solid.",
    director: "Christopher Nolan",
    runtime: 148,
    language: "English",
    country: "United States / United Kingdom",
    poster: "/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    backdrop: "/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg"
  },
  {
    id: "interstellar",
    title: "Interstellar",
    year: 2014,
    rating: 8.5,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    description:
      "Earth is running out of harvests, so a former pilot leaves his children behind to look for somewhere else to live. The further he travels, the more time costs him.",
    director: "Christopher Nolan",
    runtime: 169,
    language: "English",
    country: "United States / United Kingdom",
    poster: "/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
    backdrop: "/8sNiAPPYU14PUepFNeSNGUTiHW.jpg"
  },
  {
    id: "the-dark-knight",
    title: "The Dark Knight",
    year: 2008,
    rating: 8.5,
    genres: ["Action", "Crime", "Thriller"],
    description:
      "Gotham starts to believe it can be saved, and then a man in face paint turns up with no plan beyond proving otherwise. Batman spends the night finding out what he is willing to become.",
    director: "Christopher Nolan",
    runtime: 152,
    language: "English",
    country: "United States / United Kingdom",
    poster: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "/9FE5eD92WfVCiivM9Pq9GVSrlWk.jpg"
  },
  {
    id: "the-prestige",
    title: "The Prestige",
    year: 2006,
    rating: 8.2,
    genres: ["Drama", "Mystery", "Sci-Fi"],
    description:
      "Two Victorian magicians turn a rivalry into an obsession, trading secrets and sabotage. Every new illusion asks one of them to give up a little more.",
    director: "Christopher Nolan",
    runtime: 130,
    language: "English",
    country: "United States / United Kingdom",
    poster: "/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg",
    backdrop: "/yaExZh6qE2cfyK3o4kAMEq0mkgy.jpg"
  },
  {
    id: "into-the-spider-verse",
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    rating: 8.4,
    genres: ["Animation", "Action", "Adventure", "Sci-Fi"],
    description:
      "Miles Morales gets bitten, gets powers, and then gets five other Spider-People dropped into his Brooklyn. A coming-of-age story drawn like a comic panel that refuses to sit still.",
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    runtime: 117,
    language: "English",
    country: "United States",
    poster: "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    backdrop: "/1ntePsIqeklfmrQJqZPncCydsqY.jpg"
  },
  {
    id: "whiplash",
    title: "Whiplash",
    year: 2014,
    rating: 8.4,
    genres: ["Drama", "Music", "Thriller"],
    description:
      "A young drummer wants to be great, and his teacher is happy to hurt him to find out whether he is. Under two hours of tempo, blood and terrible advice.",
    director: "Damien Chazelle",
    runtime: 107,
    language: "English",
    country: "United States",
    poster: "/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    backdrop: "/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg"
  },
  {
    id: "parasite",
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    genres: ["Comedy", "Drama", "Thriller"],
    description:
      "One family talks its way into another family's household, job by job. What begins as a small con turns into something nobody can keep in the basement.",
    director: "Bong Joon-ho",
    runtime: 133,
    language: "Korean",
    country: "South Korea",
    poster: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop: "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg"
  },
  {
    id: "train-to-busan",
    title: "Train to Busan",
    year: 2016,
    rating: 7.7,
    genres: ["Action", "Horror", "Thriller"],
    description:
      "An outbreak begins just as a father and daughter board the express to Busan. The carriages fill up fast, and the doors between them start to matter a great deal.",
    director: "Yeon Sang-ho",
    runtime: 118,
    language: "Korean",
    country: "South Korea",
    poster: "/vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg",
    backdrop: "/brnfCYyz8EMbBrHgmh8sCwBi5i1.jpg"
  },
  {
    id: "your-name",
    title: "Your Name.",
    year: 2016,
    rating: 8.5,
    genres: ["Animation", "Romance", "Drama"],
    description:
      "Two teenagers keep waking up in each other's lives without knowing why. When they try to meet, they find that the distance between them is not only a map problem.",
    director: "Makoto Shinkai",
    runtime: 106,
    language: "Japanese",
    country: "Japan",
    poster: "/vfJFJPepRKapMd5G2ro7klIRysq.jpg",
    backdrop: "/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg"
  },
  {
    id: "spirited-away",
    title: "Spirited Away",
    year: 2001,
    rating: 8.5,
    genres: ["Animation", "Family", "Fantasy"],
    description:
      "Chihiro's parents eat food that was never theirs, and a bathhouse for spirits takes her name in payment. To get home she has to work, and remember who she was.",
    director: "Hayao Miyazaki",
    runtime: 125,
    language: "Japanese",
    country: "Japan",
    poster: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    backdrop: "/6oaL4DP75yABrd5EbC4H2zq5ghc.jpg"
  },
  {
    id: "rrr",
    title: "RRR",
    year: 2022,
    rating: 7.7,
    genres: ["Action", "Drama", "History"],
    description:
      "Two revolutionaries meet as friends long before either learns who the other really is. Rajamouli stages the friendship, and the betrayal, at the scale of a myth.",
    director: "S. S. Rajamouli",
    runtime: 187,
    language: "Telugu",
    country: "India",
    poster: "/u0XUBNQWlOvrh0Gd97ARGpIkL0.jpg",
    backdrop: "/i0Y0wP8H6SRgjr6QmuwbtQbS24D.jpg"
  },
  {
    id: "the-intouchables",
    title: "The Intouchables",
    year: 2011,
    rating: 8.3,
    genres: ["Comedy", "Drama"],
    description:
      "A wealthy man paralysed from the neck down hires a carer who has no patience for pity. Their friendship works precisely because neither is careful with the other.",
    director: "Olivier Nakache, Eric Toledano",
    runtime: 113,
    language: "French",
    country: "France",
    poster: "/1QU7HKgsQbGpzsJbJK4pAVQV9F5.jpg",
    backdrop: "/q6OGlZ1KMEb14AC8KbPCxyNOal6.jpg"
  }
];

const FEATURED_ID = "interstellar";
const IMAGE_BASE = "https://image.tmdb.org/t/p/";
const STORAGE = {
  watchlist: "frame-watchlist",
  theme: "frame-theme"
};

/* ---------------------------------------------------------
   2. Application state
   --------------------------------------------------------- */
const state = {
  searchQuery: "",
  selectedGenre: "All",
  sortOption: "default",
  watchlist: [],
  theme: "dark"
};

let lastFocusedElement = null;
let discoverHasRendered = false;

/* ---------------------------------------------------------
   3. Element lookups
   --------------------------------------------------------- */
const $ = (id) => document.getElementById(id);

const ui = {
  header: document.querySelector(".site-header"),
  nav: $("site-nav"),
  navToggle: $("nav-toggle"),
  navCount: $("nav-count"),
  themeToggle: $("theme-toggle"),
  themeToggleLabel: $("theme-toggle-label"),

  heroBackdrop: $("hero-backdrop"),
  heroPoster: $("hero-poster"),
  heroPosterFrame: $("hero-poster-frame"),
  heroPosterFallback: $("hero-poster-fallback"),
  featuredTitle: $("featured-title"),
  featuredMeta: $("featured-meta"),
  featuredDescription: $("featured-description"),
  featuredDetails: $("featured-details"),
  featuredSave: $("featured-save"),

  searchInput: $("search-input"),
  sortSelect: $("sort-select"),
  genreChips: $("genre-chips"),
  resetFilters: $("reset-filters"),
  resultsLine: $("results-line"),
  movieGrid: $("movie-grid"),
  discoverEmpty: $("discover-empty"),
  emptyReset: $("empty-reset"),

  watchlistGrid: $("watchlist-grid"),
  watchlistEmpty: $("watchlist-empty"),
  watchlistNote: $("watchlist-note"),

  modal: $("movie-modal"),
  modalBanner: $("modal-banner"),
  modalClose: $("modal-close"),
  modalPoster: $("modal-poster"),
  modalPosterFrame: $("modal-poster-frame"),
  modalPosterFallback: $("modal-poster-fallback"),
  modalTitle: $("modal-title"),
  modalMeta: $("modal-meta"),
  modalGenres: $("modal-genres"),
  modalDescription: $("modal-description"),
  modalFacts: $("modal-facts"),
  modalSave: $("modal-save")
};

/* ---------------------------------------------------------
   4. Small helpers
   --------------------------------------------------------- */
function posterUrl(movie, size) {
  return IMAGE_BASE + size + movie.poster;
}

function backdropUrl(movie, size) {
  return IMAGE_BASE + size + movie.backdrop;
}

function formatRuntime(minutes) {
  const hours = Math.floor(minutes / 60);
  return hours + "h " + (minutes % 60) + "m";
}

function padCount(value) {
  return String(value).padStart(2, "0");
}

function findMovie(id) {
  return movies.find((movie) => movie.id === id);
}

function makeElement(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

/** Swap in a readable placeholder when a poster fails to load. */
function handleImageFailure(image, frame, fallback, title) {
  image.addEventListener("error", () => {
    frame.classList.add("image-failed");
    fallback.textContent = title;
  });
}

/* ---------------------------------------------------------
   5. localStorage (defensive — the data may be missing or broken)
   --------------------------------------------------------- */
function loadWatchlist() {
  try {
    const raw = window.localStorage.getItem(STORAGE.watchlist);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Drop anything that no longer matches a film in the collection.
    return parsed.filter((id) => typeof id === "string" && findMovie(id));
  } catch (error) {
    console.warn("FRAME: could not read the saved watchlist.", error);
    return [];
  }
}

function saveWatchlist() {
  try {
    window.localStorage.setItem(STORAGE.watchlist, JSON.stringify(state.watchlist));
  } catch (error) {
    console.warn("FRAME: could not save the watchlist.", error);
  }
}

function loadTheme() {
  try {
    const stored = window.localStorage.getItem(STORAGE.theme);
    return stored === "light" || stored === "dark" ? stored : "dark";
  } catch (error) {
    return "dark";
  }
}

function saveTheme() {
  try {
    window.localStorage.setItem(STORAGE.theme, state.theme);
  } catch (error) {
    console.warn("FRAME: could not save the theme preference.", error);
  }
}

/* ---------------------------------------------------------
   6. Filtering & sorting
   --------------------------------------------------------- */
function getAllGenres() {
  const found = [];
  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      if (!found.includes(genre)) found.push(genre);
    });
  });
  return ["All", ...found.sort()];
}

/** The single source of truth for what Discover shows. */
function getVisibleMovies() {
  const query = state.searchQuery.trim().toLowerCase();

  // filter() returns a new array, so the original `movies` list is never touched.
  const filtered = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(query);
    const matchesGenre =
      state.selectedGenre === "All" || movie.genres.includes(state.selectedGenre);
    return matchesTitle && matchesGenre;
  });

  if (state.sortOption === "rating-desc") return filtered.sort((a, b) => b.rating - a.rating);
  if (state.sortOption === "rating-asc") return filtered.sort((a, b) => a.rating - b.rating);
  return filtered;
}

function getWatchlistMovies() {
  return state.watchlist.map(findMovie).filter(Boolean);
}

function filtersAreActive() {
  return (
    state.searchQuery.trim() !== "" ||
    state.selectedGenre !== "All" ||
    state.sortOption !== "default"
  );
}

/* ---------------------------------------------------------
   7. Watchlist
   --------------------------------------------------------- */
function isSaved(id) {
  return state.watchlist.includes(id);
}

function toggleWatchlist(id) {
  if (!findMovie(id)) return;

  if (isSaved(id)) {
    state.watchlist = state.watchlist.filter((savedId) => savedId !== id);
  } else {
    state.watchlist = [...state.watchlist, id];
  }

  saveWatchlist();
  updateWatchlistCount();
  updateSaveButtons(id);
  renderWatchlist();
}

function updateWatchlistCount() {
  if (!ui.navCount) return;
  const count = state.watchlist.length;
  ui.navCount.hidden = count === 0;
  ui.navCount.textContent = padCount(count);
}

/** Keep every "save" control in sync after a toggle. */
function updateSaveButtons(id) {
  document.querySelectorAll('[data-save-for="' + id + '"]').forEach((button) => {
    applySaveButtonState(button, id);
  });
}

function applySaveButtonState(button, id) {
  const saved = isSaved(id);
  const movie = findMovie(id);
  button.setAttribute("aria-pressed", String(saved));

  if (button.dataset.style === "icon") {
    button.querySelector(".sr-only").textContent =
      (saved ? "Remove " : "Add ") + movie.title + (saved ? " from" : " to") + " your watchlist";
  } else {
    button.textContent = saved ? "Remove from Watchlist" : "Add to Watchlist";
  }
}

/* ---------------------------------------------------------
   8. Rendering
   --------------------------------------------------------- */
function createMovieCard(movie) {
  const card = makeElement("article", "movie-card");

  // Poster
  const media = makeElement("div", "card-media");
  const image = makeElement("img");
  image.src = posterUrl(movie, "w500");
  image.alt = "Poster for " + movie.title;
  image.loading = "lazy";
  image.decoding = "async";
  image.width = 500;
  image.height = 750;

  const fallback = makeElement("p", "poster-fallback");
  fallback.setAttribute("aria-hidden", "true");
  handleImageFailure(image, media, fallback, movie.title);

  const veil = makeElement("div", "card-veil");
  veil.setAttribute("aria-hidden", "true");
  veil.append(makeElement("span", null, "View details"));

  const saveButton = makeElement("button", "card-save");
  saveButton.type = "button";
  saveButton.dataset.saveFor = movie.id;
  saveButton.dataset.style = "icon";
  const bookmark = makeElement("span", "bookmark");
  bookmark.setAttribute("aria-hidden", "true");
  saveButton.append(bookmark, makeElement("span", "sr-only"));
  applySaveButtonState(saveButton, movie.id);
  saveButton.addEventListener("click", () => toggleWatchlist(movie.id));

  media.append(image, fallback, veil, saveButton);

  // Text
  const heading = makeElement("h3", "card-title");
  const openButton = makeElement("button", "card-open", movie.title);
  openButton.type = "button";
  openButton.setAttribute("aria-haspopup", "dialog");
  openButton.addEventListener("click", () => openMovieModal(movie.id));
  heading.append(openButton);

  const line = makeElement("div", "card-line");
  const rating = makeElement("span", "rating", movie.rating.toFixed(1));
  line.append(rating, makeElement("span", "dot", String(movie.year)));

  const genres = makeElement("p", "card-genres", movie.genres.join(" · "));

  card.append(media, heading, line, genres);
  return card;
}

function renderGrid(container, list, animate) {
  if (!container) return;
  const fragment = document.createDocumentFragment();

  list.forEach((movie) => {
    const card = createMovieCard(movie);
    if (animate) {
      card.classList.add("reveal");
      revealObserver.observe(card);
    }
    fragment.append(card);
  });

  container.replaceChildren(fragment);
}

function renderDiscover() {
  const visible = getVisibleMovies();

  renderGrid(ui.movieGrid, visible, !discoverHasRendered);
  discoverHasRendered = true;

  if (ui.discoverEmpty) ui.discoverEmpty.hidden = visible.length > 0;
  if (ui.resetFilters) ui.resetFilters.hidden = !filtersAreActive();

  if (ui.resultsLine) {
    if (visible.length === 0) {
      ui.resultsLine.textContent = "No films found";
    } else if (visible.length === movies.length) {
      ui.resultsLine.textContent = "Showing all " + movies.length + " films";
    } else {
      ui.resultsLine.textContent =
        "Showing " + visible.length + " of " + movies.length + " films";
    }
  }
}

function renderWatchlist() {
  const saved = getWatchlistMovies();

  renderGrid(ui.watchlistGrid, saved, false);

  if (ui.watchlistEmpty) ui.watchlistEmpty.hidden = saved.length > 0;
  if (ui.watchlistGrid) ui.watchlistGrid.hidden = saved.length === 0;

  if (ui.watchlistNote) {
    ui.watchlistNote.textContent =
      saved.length === 0
        ? "Films you save are kept in this browser."
        : saved.length + (saved.length === 1 ? " film saved" : " films saved");
  }
}

function renderGenreFilter() {
  if (!ui.genreChips) return;
  const fragment = document.createDocumentFragment();

  getAllGenres().forEach((genre) => {
    const chip = makeElement("button", "chip", genre);
    chip.type = "button";
    chip.dataset.genre = genre;
    chip.setAttribute("aria-pressed", String(genre === state.selectedGenre));
    chip.addEventListener("click", () => {
      state.selectedGenre = genre;
      updateGenreChips();
      renderDiscover();
    });
    fragment.append(chip);
  });

  ui.genreChips.replaceChildren(fragment);
}

function updateGenreChips() {
  if (!ui.genreChips) return;
  ui.genreChips.querySelectorAll(".chip").forEach((chip) => {
    chip.setAttribute("aria-pressed", String(chip.dataset.genre === state.selectedGenre));
  });
}

function renderHero() {
  const featured = findMovie(FEATURED_ID) || movies[0];
  if (!featured) return;

  if (ui.heroBackdrop) {
    ui.heroBackdrop.style.backgroundImage = 'url("' + backdropUrl(featured, "w1280") + '")';
  }

  if (ui.heroPoster) {
    ui.heroPoster.src = posterUrl(featured, "w500");
    ui.heroPoster.alt = "Poster for " + featured.title;
    handleImageFailure(ui.heroPoster, ui.heroPosterFrame, ui.heroPosterFallback, featured.title);
  }

  if (ui.featuredTitle) ui.featuredTitle.textContent = featured.title;

  if (ui.featuredMeta) {
    const rating = makeElement("span", "rating", featured.rating.toFixed(1));
    ui.featuredMeta.replaceChildren(
      rating,
      makeElement("span", "dot", String(featured.year)),
      makeElement("span", "dot", featured.genres.join(", ")),
      makeElement("span", "dot", formatRuntime(featured.runtime))
    );
  }

  if (ui.featuredDescription) ui.featuredDescription.textContent = featured.description;

  if (ui.featuredDetails) {
    ui.featuredDetails.setAttribute("aria-haspopup", "dialog");
    ui.featuredDetails.addEventListener("click", () => openMovieModal(featured.id));
  }

  if (ui.featuredSave) {
    ui.featuredSave.dataset.saveFor = featured.id;
    applySaveButtonState(ui.featuredSave, featured.id);
    ui.featuredSave.addEventListener("click", () => toggleWatchlist(featured.id));
  }
}

/* ---------------------------------------------------------
   9. Movie details modal
   --------------------------------------------------------- */
function openMovieModal(id) {
  const movie = findMovie(id);
  if (!movie || !ui.modal) return;

  lastFocusedElement = document.activeElement;

  ui.modalBanner.style.backgroundImage = 'url("' + backdropUrl(movie, "w1280") + '")';

  ui.modalPosterFrame.classList.remove("image-failed");
  ui.modalPoster.src = posterUrl(movie, "w500");
  ui.modalPoster.alt = "Poster for " + movie.title;

  ui.modalTitle.textContent = movie.title;

  const rating = makeElement("span", "rating", movie.rating.toFixed(1));
  ui.modalMeta.replaceChildren(
    rating,
    makeElement("span", "dot", String(movie.year)),
    makeElement("span", "dot", formatRuntime(movie.runtime))
  );

  const genreItems = movie.genres.map((genre) => makeElement("li", null, genre));
  ui.modalGenres.replaceChildren(...genreItems);

  ui.modalDescription.textContent = movie.description;

  const facts = [
    ["Director", movie.director],
    ["Runtime", formatRuntime(movie.runtime)],
    ["Language", movie.language],
    ["Country", movie.country],
    ["Rating", movie.rating.toFixed(1) + " / 10 · TMDB user score"]
  ];
  // Each label/value pair is wrapped so the grid keeps them together.
  const factNodes = facts.map(([label, value]) => {
    const group = makeElement("div", "fact");
    group.append(makeElement("dt", null, label), makeElement("dd", null, value));
    return group;
  });
  ui.modalFacts.replaceChildren(...factNodes);

  ui.modalSave.dataset.saveFor = movie.id;
  applySaveButtonState(ui.modalSave, movie.id);

  document.body.classList.add("is-locked");
  ui.modal.showModal();

  // Start each visit to the modal at the top.
  const panel = ui.modal.querySelector(".modal-panel");
  if (panel) panel.scrollTop = 0;
}

function closeMovieModal() {
  if (!ui.modal || !ui.modal.open) return;
  ui.modal.close();
}

/* ---------------------------------------------------------
   10. Theme
   --------------------------------------------------------- */
function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  if (ui.themeToggle) {
    ui.themeToggle.setAttribute("aria-pressed", String(state.theme === "light"));
  }
  if (ui.themeToggleLabel) {
    ui.themeToggleLabel.textContent =
      state.theme === "light" ? "Switch to dark theme" : "Switch to light theme";
  }
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  applyTheme();
  saveTheme();
}

/* ---------------------------------------------------------
   11. Scroll reveal (skipped when reduced motion is preferred)
   --------------------------------------------------------- */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { rootMargin: "0px 0px -40px 0px", threshold: 0.05 }
);

/* ---------------------------------------------------------
   12. Events
   --------------------------------------------------------- */
function bindEvents() {
  if (ui.searchInput) {
    ui.searchInput.addEventListener("input", (event) => {
      state.searchQuery = event.target.value;
      renderDiscover();
    });
  }

  if (ui.sortSelect) {
    ui.sortSelect.addEventListener("change", (event) => {
      state.sortOption = event.target.value;
      renderDiscover();
    });
  }

  const resetFilters = () => {
    state.searchQuery = "";
    state.selectedGenre = "All";
    state.sortOption = "default";
    if (ui.searchInput) ui.searchInput.value = "";
    if (ui.sortSelect) ui.sortSelect.value = "default";
    updateGenreChips();
    renderDiscover();
    if (ui.searchInput) ui.searchInput.focus();
  };

  if (ui.resetFilters) ui.resetFilters.addEventListener("click", resetFilters);
  if (ui.emptyReset) ui.emptyReset.addEventListener("click", resetFilters);

  if (ui.themeToggle) ui.themeToggle.addEventListener("click", toggleTheme);

  if (ui.modalSave) {
    ui.modalSave.addEventListener("click", () => {
      const id = ui.modalSave.dataset.saveFor;
      if (id) toggleWatchlist(id);
    });
  }

  if (ui.modalClose) ui.modalClose.addEventListener("click", closeMovieModal);

  if (ui.modal) {
    // A click that lands on the dialog element itself is a click on the backdrop.
    ui.modal.addEventListener("click", (event) => {
      if (event.target === ui.modal) closeMovieModal();
    });

    // Fires for the close button, the backdrop click and the Escape key.
    ui.modal.addEventListener("close", () => {
      document.body.classList.remove("is-locked");
      if (lastFocusedElement && document.contains(lastFocusedElement)) {
        lastFocusedElement.focus();
      }
      lastFocusedElement = null;
    });
  }

  // Mobile navigation
  if (ui.navToggle && ui.nav) {
    ui.navToggle.addEventListener("click", () => {
      const open = ui.nav.classList.toggle("is-open");
      ui.navToggle.setAttribute("aria-expanded", String(open));
      ui.navToggle.querySelector(".sr-only").textContent = open ? "Close menu" : "Open menu";
    });

    ui.nav.addEventListener("click", (event) => {
      if (event.target.closest(".nav-link")) {
        ui.nav.classList.remove("is-open");
        ui.navToggle.setAttribute("aria-expanded", "false");
        ui.navToggle.querySelector(".sr-only").textContent = "Open menu";
      }
    });
  }

  // Header treatment once the page has scrolled past the hero edge
  const onScroll = () => {
    if (!ui.header) return;
    ui.header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------------------------------------------------------
   13. Start
   --------------------------------------------------------- */
function init() {
  state.theme = loadTheme();
  state.watchlist = loadWatchlist();
  saveWatchlist(); // write back the cleaned list if anything was dropped

  applyTheme();
  renderHero();
  renderGenreFilter();
  renderDiscover();
  renderWatchlist();
  updateWatchlistCount();
  bindEvents();

  if (ui.modalPoster && ui.modalPosterFrame && ui.modalPosterFallback) {
    ui.modalPoster.addEventListener("error", () => {
      ui.modalPosterFrame.classList.add("image-failed");
      ui.modalPosterFallback.textContent = ui.modalTitle.textContent;
    });
  }

  if (prefersReducedMotion) {
    document.querySelectorAll(".reveal").forEach((node) => node.classList.add("is-visible"));
  }
}

document.addEventListener("DOMContentLoaded", init);
