# Password Generator

A small React + Vite app that generates random passwords with optional numbers and symbols. It also includes a one-click copy button.

## Features

- Random password generation
- Adjustable length
- Toggle numbers and symbols
- Copy password to clipboard

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Project Structure

- `src/main.jsx` renders the app
- `src/App.jsx` contains the password generator logic and UI
- `src/App.css` contains the component styles
- `src/index.css` contains global page styles

## Notes

The app was fixed after a broken component structure in `App.jsx` caused Vite to fail the build and render a blank page.
