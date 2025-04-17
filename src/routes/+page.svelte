<style>
  h1, footer {
    font-size: 1.3rem;
    margin: 0;
    font-weight: normal;
  }

  @media (min-width: 36em) {
  h1, footer {
    font-size: 2rem;
  }
}

  h1 {
    margin-bottom: 1em;
  }
  h1 {
    margin-bottom: 1em;
  }
  footer {
    margin-top: auto;
  }
  .pika {
    font-size: 0.7rem;
    margin-top: 3rem;
  }
  .pika img {
    display: block;
  }
  @keyframes vertical-shaking {
    0% { transform: translateY(0) }
    25% { transform: translateY(2px) }
    50% { transform: translateY(0) }
    75% { transform: translateY(-2px) }
    100% { transform: translateY(0) }
  }
  .shake {
    display: inline-block;
    transform: translate3d(0, 0, 0);
    position: relative;
    animation: vertical-shaking 150ms infinite;
  }
  .major-mono {
    font-family: "Major Mono Display", serif;
    font-weight: 400;
    font-style: normal;
    text-transform: lowercase;
  }
  .plex {
    font-family: "IBM Plex Mono", serif;
    font-weight: 300;
    font-style: normal;
  }
  .plex strong {
    font-weight: 500;
  }
  .positive {
    color: green;
  }
  .max {
    max-width: 38rem;
  }
  .outer {
    height: 100%;
    display: flex;
    flex-direction: column; 
    padding: 2rem;
  }

  .feat {
    padding: 5rem 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: center;
  }
  .feat a {
    text-decoration: none;
  }
  .feat .link {
    grid-column: 2;
  }
  .feat .desc a {
    text-decoration: underline;
  }
  .feat strong {
    display: block;
  }
  .feat .app {
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: 3rem 1fr;
    gap: 1rem;
    align-items: center;
  }
  .feat img {
    width: 100%;
  }
  .feat h2 {
    font-size: 0.7em;
    font-weight: inherit;
    letter-spacing: 0.2em;
    text-transform: uppercase;

  }
  .feat .bullet {
    font-size: 2.5rem;
    line-height: 0;
    text-align: center;
  }
  .word {
    word-break: keep-all;
    white-space: pre;
  }
</style>

<svelte:head>
    <title>👋🏻 I'm Ethan Muller</title>
    <meta property="og:title" content="HI IM ETHAN MULLER">
    <meta property="og:description" content="HI IM ETHAN MULLER">
    <meta name="description" content="HI IM ETHAN MULLER">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="HI IM ETHAN MULLER">
    <meta name="twitter:description" content="HI IM ETHAN MULLER">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;500&family=Major+Mono+Display&display=swap" rel="stylesheet">
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte'
  let gifEl: HTMLImageElement;

  const srcs = [
  '3dcat.gif',
  'cpu.gif',
  'frog_crawls_east.gif',
  'ham.gif',
  'horse-riding.gif',
  'kirby.gif',
  'prince.gif',
  'tinybunny.gif',
  ];

  onMount(() => {
    gifEl.src = `/gif/${srcs[Math.floor(Math.random() * srcs.length)]}`;
  })
</script>

<div class="outer">
  <h1 class="major-mono">hi im ethan muller</h1>
  
  <div class="plex max">

    <p>I make fun interactive multimedia <img bind:this={gifEl} src="" alt="" /></p>

    <p>I’m into computers, phones, video games, electronics, programming, free <a href="https://github.com/ethanmuller/ethanmuller.com">open source software</a>, human interface design, game dev, Linux, Mac, Windows, Android, iOS, etc.</p>

    <div class="feat">
      <h2>Active Projects</h2>
      <div class="app">
        <a href="https://ethanmuller.com/bitter">
          <img src="/img/bitter-squircle.svg" alt="" class="icon" />
        </a>
        <div class="desc">
          <a class="link" href="https://ethanmuller.com/bitter">Bitter</a>
          <div>
            multiplayer 1-bit art toy
          </div>
        </div>
      </div>
      <div class="app">
        <a href="https://github.com/ethanmuller/typewriter">
          <div class="bullet">&bull;</div>
        </a>
        <div class="desc">
          <a class="link" href="https://github.com/ethanmuller/typewriter">Typewriter</a>
          <div>
            CLI anti text editor, made for focus and flow
          </div>
        </div>
      </div>
      <div class="app">
        <a href="https://ethanmuller.com/micro_mmo">
          <img src="/img/micro_mmo-squircle.png" alt="" class="icon" />
        </a>
        <div class="desc">
          <a class="link" href="https://ethanmuller.com/micro_mmo">Micro MMO</a>
          <div>
            experimental hangout web space, built in collaboration with <a href="https://ferran.games/">Ferran</a>
          </div>
        </div>
      </div>
    </div>
  
    <p>I am currently: <strong class="positive word">looking for work</strong></p>
  
  </div>
  
  <footer class="major-mono">
    <div class="pika">
      <img src="/gif/pika.gif" alt="pikachu doing construction" />
      Last upd<span class="shake">a</span>te: 2025-04-17
    </div>
    <p>bye im ethan muller</p>
  </footer>
</div>
