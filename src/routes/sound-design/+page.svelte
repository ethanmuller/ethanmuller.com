<svelte:head>
<title>Sound Design @ ethanmuller.com</title>
</svelte:head>
<style>
  * {
    box-sizing: border-box;
  }

  article {
    display: grid;
    grid-template-columns: 1fr;
    align-content: flex-start;
    opacity: 0.7;
    transition: opacity 0.3s ease-out;
    position: relative;
    align-items: center;
  }
  article:hover,
  article.tryna-play {
    opacity: 1;
  }
  video {
    width: 100%;
    object-fit: contain;
    object-position: top;
  }

  .inset {
    grid-template-columns: 1fr;
    /*min-height: 60vh;*/
    background: white;
  }
  .inset video {
    grid-column: span 2;
  }
  .inset p {
    align-self: end;
    margin-left: auto;
  }
  .plex {
    font-family: monospace;
    font-weight: 300;
    font-style: normal;
  }
  p {
    max-width: 21rem;
    padding: 2rem;
    margin: 0 0 0 auto;
  }
  article {
    background: #f7f7f7;
  }
  article:nth-child(2n) {
    background: #f9f9f9;
  }
  article.half {
    background: white;
  }
  .half video {
    margin: 0 auto;
  }
  .layout {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  .layout > * {
    grid-column: span 12;
  }
  .layout > .quarter {
    grid-column: span 3;
  }
  @media (min-width: 900px) {
  .layout > .half {
    grid-column: span 6;
  }
    .layout > .third {
      grid-column: span 4;
    }
  }
  .layout > .limit-doodle {
    background: white;
    grid-column: span 6;
  }
  .layout > .limit-doodle--major {
    grid-column: span 12;
  }
  .layout > .limit-doodle > video {
    max-width: 500px;
    max-height: 500px;
    margin: 0 auto;
  }
  .layout > .major {
    grid-column: span 6;
    grid-row: span 2;
  }
  .layout > .minor {
    grid-column: span 6;
  }
  @media (min-width: 50em) {
    p {
      max-width: 25rem;
      padding: 2rem 4rem 4rem 2rem;
    }
    .inset p {
      padding: 2rem;
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      background: white;
    }
    .inset.tl p {
      bottom: auto;
      right: auto;
      top: 3rem;
      left: 3rem;
    }
  }
  @media (min-width: 900px) {
    article:not(.minor) {
      grid-template-columns: 1fr 20em;
    }
  }
  .max {
    max-width: 87rem;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .spinner {
    width: 4rem;
    height: 4rem;
    top: 1rem;
    left: 1rem;
    position: absolute;
    pointer-events: none;
    animation: spin 1.5s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite;
    display: none;
  }
  .tryna-play .spinner {
    display: block;
    display: none;
  }
  .loaded .spinner {
    display: none;
  }
  .spinner::after {
    position: absolute;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    top: 0;
    content: '';
    width: 1rem;
    height: 1rem;
    background: #eee;
    border-radius: 1rem;
    /*box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);*/
  }
  .floater {
    position: fixed;
    bottom: 1.5rem;
    left: 1.5rem;
    display: flex;
  }
  .stop-button {
    background: #eee;
    border: none;
    width: 6rem;
    height: 4rem;
    font-size: 0.7rem;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
  100px 100px 80px rgba(0, 0, 0, 0.07)
;
  }
  .stop-button__icon {
    display: inline-block;
    font-size: 1.1rem;
  }
  footer {
    text-align: right;
    height: 8rem;
    background: #dfdfdf;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 3rem;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.4);
  }
</style>


<script lang="ts">
  import { onMount } from "svelte";
  import { Howl } from 'howler'

  const ui_sfx_a = new Howl({
    src: ['https://ethanmuller.com/files/wav/sfx-monkey-c.wav'],
  });

  const ui_sfx_b = new Howl({
    src: ['https://ethanmuller.com/files/wav/sfx-monkey-b.wav'],
  });

  let autoplay: boolean | undefined;

const itemsList = [
{
src: "https://ethanmuller.com/files/vid/sounds-good/honk%20ball%20loop.mp4",
text: "Quite the day at the factory! One of my first and favorite pieces with <a href=\"https://www.makata.tv/\">Makata</a> & <a href='https://benji.org'>Benji</a>. I sampled actual audio footage of machinery from the (now defunct) factory where they made the Honk bubbles.",
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/LFE-update-machine-v6.mp4",
//text: "Wood, metal, magnets. Click clack. Cute tumbly music reminiscent of <a href=\"https://www.youtube.com/watch?v=e33KWTJPvuU\">Un P’tit Air</a>.",
class: 'half',
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/lfe%20spinball%20loop.mp4",
class: 'half',
//text: "What if a ball rolled a loop de loop on metal and got uploaded into a computer sequence and then it shoomped through a pneumatic tube to project a hologram? What would that sound like?<br><br>A: Tube music",
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/lfe%20components%20loop.mp4",
text: "Warm guitar, wind chimes, light clinking and clunking. Physical, tactile sounds. Set in outer space, but sonically it’s a prairie in the summer.",
hidden: false,
},
{
  src: "https://ethanmuller.com/files/vid/sounds-good/lfe-family-unlock-v3.mp4",
  class: 'third',
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/family-nutcracker.mp4",
class: 'third',
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/octocat-loop.mp4",
//text: "Subtle synthesized elements with some foley to match physics. Usually I mix in mono but this has a cheeky hard pan left for his wave. No octocats were harmed in the making of this audio.",
class: 'third',
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/honk%20discover%20tab%20loop.mp4",
class: 'half',
//text: "Lots of action in what feels like a teeny diorama. I love syncing audio to dense detailed visuals like this.",
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/honk%20fanfare%20loop.mp4",
text: "It's like that one episode of SpongeBob where...",
hidden: true,
class: 'inset',
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/HONK_PAINTINGLOGO_WITH_AUDIO_v05.mp4",
class: 'half',
//text: "Back at the factory, a ball is formed from organic goop. It is rounded, plucked, and painted. Then it is ready.",
},
{
src: "https://ethanmuller.com/files/vid/etc/i_like_it.mp4",
class: "limit-doodle limit-doodle--major",
},
{
src: "https://ethanmuller.com/files/vid/etc/chrome.mp4",
class: "half",
},
{
src: "https://ethanmuller.com/files/vid/etc/dog-song.mp4",
//text: "lyrics: if you want im sitting here ive got two ears to hear you. or maybe we could take us a walk and have a talk to work through some of the stuff that's in your head you haven't said but want to so if you want to open on up i am your pup and i love you.",
hidden: true,
class: "half",
},
{
src: "https://ethanmuller.com/files/vid/etc/life.mp4",
class: "half inset",
text: "Theme song for the <a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'>Game of Life</a> glider",
},
{
src: "https://ethanmuller.com/files/vid/etc/sad_clown.mp4",
class: "limit-doodle half",
},
{
src: "https://ethanmuller.com/files/vid/etc/wow.mp4",
class: "limit-doodle half",
},
{
src: "https://ethanmuller.com/files/vid/etc/eatimng.mp4",
class: "limit-doodle half",
},
{
src: "https://ethanmuller.com/files/vid/etc/diapers.mp4",
class: "limit-doodle half",
},
{
src: "https://ethanmuller.com/files/vid/etc/metroid.mp4",
text: "Alternate sound design for Metroid Prime. I made this because I played the Metroid Prime remake and was dissatisfied with <a href='https://youtu.be/x8kV8WwobDc?t=15'>the sounds of the charge beam</a>. I aimed to make the charge shot sound more powerful in comparison to the uncharged shots. Tried to make all sounds more satisfying in general.",
class: "inset major",
},
{
src: "https://ethanmuller.com/files/vid/etc/katamari.mp4",
text: "Alternate sound design for Katamari Damacy, followed by original footage as reference. To get these crunchy uneven rolling sounds I'm running samples for various surfaces through a granulator: grass, sand and brick. I also made the pickup sounds shorter so they give each other more room to breathe.",
class: "inset major",
},
{
src: "https://ethanmuller.com/files/vid/etc/rad.mp4",
text: "Alternate sound design for <a href='https://en.wikipedia.org/wiki/Robot_Alchemic_Drive'>Robot Alchemic Drive (R.A.D.).</a> Trying to match that nice warm blown-out sound of 80s anime.",
class: "minor",
},
{
src: "https://ethanmuller.com/files/vid/etc/friends.mp4",
text: "It can be fun to dance with your friend while listening to loud music.",
class: "minor",
},
]

  let videoElements: HTMLVideoElement[] = [];
  let currentlyPlayingVideo: HTMLVideoElement | undefined;
  let loadedStates = Array(itemsList.length).fill(false);

  function pauseAll() {
    document.querySelectorAll("video").forEach((video) => video.pause());
  }

  function stopCurrentlyPlaying() {
    currentlyPlayingVideo?.pause();
  }

  function videoReady(index: number) {
    loadedStates[index] = true;
  }

  onMount(() => {
    videoElements.forEach((vid, index) => {
      vid?.addEventListener("canplaythrough", () => {
        videoReady(index);
      });

      vid?.addEventListener("click", () => {
        // note this is only for a click on the video which disables autoplay
        //vid?.parentElement?.classList.add("tryna-play");
        vid.play();
        currentlyPlayingVideo = vid;
        autoplay = true
      })

      vid?.parentElement?.addEventListener("mouseover", () => {
        document.querySelectorAll('.tryna-play').forEach((el) => el.classList.remove("tryna-play"));
        vid?.parentElement?.classList.add("tryna-play");
        if (autoplay) {
          vid.play();
        }
        currentlyPlayingVideo = vid;
      });


      vid?.parentElement?.addEventListener("mouseleave", () => {
        vid.pause();
        vid?.parentElement?.classList.remove("tryna-play");
      });

      vid?.parentElement?.addEventListener("touchstart", (e) => {
        stopCurrentlyPlaying();
        vid?.parentElement?.classList.add("tryna-play");
        if (autoplay || typeof autoplay === 'undefined') {
          vid.play();
          autoplay = true;
        }
        currentlyPlayingVideo = vid;
      });

    });
  });
  function toggleAutoplay() {
    autoplay = !autoplay;

    const i = videoElements.indexOf(currentlyPlayingVideo)

    if (autoplay) {
      currentlyPlayingVideo?.play()
      ui_sfx_b.play()
    } else {
      currentlyPlayingVideo?.pause()
      ui_sfx_a.play()
    }
  }
</script>

<div class="plex max layout">
  {#each itemsList as item, index (item.src)}
    {#if !item.hidden}
      <article class="{`${item.class} ${loadedStates[index] ? 'loaded' : 'not-loaded'}`}">
        <video
          style={ !item.text ? 'grid-column: span 2' : '' }
          preload="auto"
          playsinline
          bind:this={videoElements[index]}
          src={`${item.src}#t=0.1`}
          disableRemotePlayback
          disablePictureInPicture
          loop
        >
          <track kind="captions">
        </video>
        {#if item.text}
          <p>{@html item.text}</p>
        {/if}
        <div class="spinner"></div>
      </article>
    {/if}
  {/each}
  <div class="floater">
    {#if typeof autoplay !== 'undefined'}
      <button class="stop-button" on:click={toggleAutoplay}>
        {#if autoplay}
          <span style="margin-right: 1em">Stop</span>
        {/if}
        <span class="stop-button__icon">{autoplay ? '🙉' : '🐵' } </span>
      </button>
    {/if}
  </div>
</div>
<footer class="plex"></footer>
