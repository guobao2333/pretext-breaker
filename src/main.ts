import './styles.css'
import { PretextBreaker } from './game'

const app = document.querySelector<HTMLDivElement>('#app')

if (app === null) {
  throw new Error('#app not found')
}

app.innerHTML = `
  <main class="shell">
    <div class="stage">
      <canvas
        id="game"
        class="game-canvas"
        aria-label="Pretext Breaker text-rendered block breaker game"
      ></canvas>
    </div>
  </main>
`

const canvas = document.querySelector<HTMLCanvasElement>('#game')

if (canvas === null) {
  throw new Error('#game not found')
}

await document.fonts.ready

new PretextBreaker(canvas)
