# Pretext Breaker

Pretext Breaker is a text-rendered block breaker built with Vite, TypeScript, and [`@chenglou/pretext`](https://www.npmjs.com/package/@chenglou/pretext). The game uses measured text for the wall, paddle, HUD, particles, and power-ups instead of traditional sprites.

## Features

- Text-first breakout gameplay rendered on a single canvas
- Dynamic paragraph-based brick waves
- Audio for paddle hits, brick breaks, pickups, and game states
- Power-ups for paddle expand, slow motion, guard saves, multiball, and extra lives

## Controls

- `Left Arrow` / `A`: move left
- `Right Arrow` / `D`: move right
- `Up Arrow` / `Enter` / tap: launch or continue
- `M`: mute audio
- `R`: restart after game over

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/main.ts`: app bootstrap and canvas mounting
- `src/game.ts`: game loop, gameplay systems, rendering, and power-up logic
- `src/pretext-renderer.ts`: text measurement and draw helpers
- `src/audio/`: music and sound effect generation

## Notes

- The project targets modern browsers with canvas, Web Audio, and font loading support.
- Production output is generated into `dist/`.
