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
    max-width: 35rem;
  }
  .outer {
    height: 100%;
    display: flex;
    flex-direction: column; 
    padding: 2rem;
  }
</style>

<svelte:head>
    <title>HI IM ETHAN MULLER</title>
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

<div class="outer">
  <h1 class="major-mono">hi im ethan muller</h1>
  
  <div class="plex max">
    <p>Welcome to my personal web page.</p>
  
    <p>I love to use computers to make interactive multimedia.</p>
  
    <p>I’m interested in computers, phones, free open source software, programming, electronics,  video games, game dev, sound design, Linux, Mac, Windows, Android, iOS, etc.</p>
  
    <p>I am currently: <strong class="positive">looking for work</strong></p>
  
  </div>
  
  <footer class="major-mono">
    <div class="pika">
      <img src="/gif/pika.gif" alt="pikachu doing construction" />
      Last upd<span class="shake">a</span>te: 2025-02-03
    </div>
    <p>bye im ethan muller</p>
  </footer>
</div>
