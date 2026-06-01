# iamliuquan.github.io

My personal website — bio, research, projects, and updates.
Live at **https://iamliuquan.github.io**.

A hand-built static site: plain HTML/CSS/JS, **no framework, no build step**.
GitHub Pages serves the files directly (`.nojekyll` disables Jekyll).

## How to edit

**Almost everything lives in one file:** [`assets/js/data.js`](assets/js/data.js).
Edit it, commit, push — the site updates. Sections:

| Want to change…              | Edit in `data.js`        |
| ---------------------------- | ------------------------ |
| Name, bio, role, photo, CV   | `profile`                |
| Social / external links      | `links`                  |
| Research interest chips      | `interests`              |
| Papers                       | `publications`           |
| Projects                     | `projects`               |
| News feed                    | `updates`                |
| Collaboration blurbs         | `collaboration`          |

Items tagged `// TODO` are placeholders waiting for real content.

### Add a publication
Prepend an object to `publications` (newest first). Write your name exactly as
`"Quan Liu"` in `authors` and it gets **bolded** automatically.

### Add a project / update
Prepend an object to `projects` / `updates`. Set `featured: true` on a project
to surface it on the homepage.

### Profile photo & CV
- Photo: drop a square image in `assets/img/` and set `profile.photo` to its path.
  If empty or missing, a "QL" monogram is shown instead.
- CV: put your PDF at `files/quan-liu-cv.pdf` (or update `profile.cv`). The
  "Download CV" button hides itself automatically if the file isn't there.

## Structure
```
index.html         home (hero + section highlights)
research.html      bio + interests + publications
projects.html      all projects
updates.html       news feed
collaboration.html ways to work together
assets/css/style.css   design system (dark default, cyan accent, light theme too)
assets/js/data.js      ← all content
assets/js/site.js      rendering engine (nav, footer, theme, renderers)
files/                 CV / downloadable docs
```

## Local preview
```bash
python3 -m http.server 8080   # then open http://localhost:8080
```
