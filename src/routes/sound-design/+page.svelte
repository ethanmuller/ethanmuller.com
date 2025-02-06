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
    opacity: 0.7;
    transition: opacity 0.3s ease-out;
  }
  article.hover {
    opacity: 1;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 95vh;
  }

  .inset {
    grid-template-columns: 1fr;
    position: relative;
    /*min-height: 60vh;*/
    background: white;
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
    background: #f6f6f6;
  }
  article:nth-child(2n) {
    background: #f9f9f9;
  }
  .layout {
    display: flex;
    flex-direction: column;
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
    article {
      grid-template-columns: 1fr 20em;
    }
    video {
      max-height: none;
    }
  }
  .max {
    max-width: 87rem;
  }
</style>


<script lang="ts">
  import { onMount } from "svelte";

const itemsList = [
{
src: "https://ethanmuller.com/files/vid/sounds-good/lfe%20components%20loop.mp4",
text: "Warm guitar, wind chimes, light clinking and clunking. Physical, tactile sounds. Set in outer space, but sonically it’s a prairie in the summer.",
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/LFE-update-machine-v6.mp4",
text: "Wood, metal, magnets. Click clack. Cute tumbly music reminiscent of <a href=\"https://www.youtube.com/watch?v=e33KWTJPvuU\">Un P’tit Air</a>.",
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/honk%20ball%20loop.mp4",
text: "Quite the day at the factory! One of my first and favorite pieces with <a href=\"https://www.makata.tv/\">Makata</a> & Benji. I sampled actual audio footage of machinery from the (now defunct) factory where they made the Honk bubbles.",
},
{
  src: "https://ethanmuller.com/files/vid/sounds-good/lfe-family-unlock-v3.mp4",
  text: "Shout out to ratchets. Gotta be one of my favorite sound design elements.",
  class: "inset",
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/octocat-loop.mp4",
text: "Subtle synthesized elements with some foley to match physics. Usually I mix in mono but this has a cheeky hard pan left for his wave. If you're on a phone in portrait mode, that's your top speaker. No octocats were harmed in the making of this audio.",
class: "inset"
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/honk%20discover%20tab%20loop.mp4",
text: "Lots of action in what feels like a teeny diorama. I love syncing audio to dense detailed visuals like this.",
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/lfe%20spinball%20loop.mp4",
text: "Q: What if a ball rolled a loop de loop on metal and got uploaded into a computer sequence and then it shoomped through a pneumatic tube to project a hologram? What if that happened? What would that sound like?<br><br>A: Tube music",
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/honk%20fanfare%20loop.mp4",
text: "It's like that one episode of Spongebob where...",
class: 'inset',
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/HONK_PAINTINGLOGO_WITH_AUDIO_v05.mp4",
text: "Back at the factory, a ball is formed from organic goop. It is rounded, plucked, and painted. Then it is ready.",
},
]

  let videoElements: HTMLVideoElement[] = [];
  let currentlyPlayingVideo: HTMLVideoElement;

  function pauseAll() {
    document.querySelectorAll('video').forEach((video) => {
      video.pause()
    })
  }

  function stopCurrentlyPlaying() {
    currentlyPlayingVideo.pause()
  }

  function hover(el:HTMLElement) {
    el.classList.add('hover')
  }

  function unhover(el:HTMLElement) {
    el.classList.remove('hover')
  }

  onMount(() => {
    videoElements.forEach((vid) => {
      vid?.parentElement?.addEventListener("mouseover", () => {
        vid?.parentElement?.classList.add('hover')
        vid.play();
        currentlyPlayingVideo = vid
      });
      vid?.parentElement?.addEventListener("mouseleave", () => {
        vid.pause();
        vid?.parentElement?.classList.remove('hover')
      });
      vid?.parentElement?.addEventListener("touchstart", () => {
        stopCurrentlyPlaying()
        vid?.parentElement?.classList.add('hover')
        vid.play();
        currentlyPlayingVideo = vid
      });
    });
  });
</script>

<div class="plex max layout">
  {#each itemsList as item (item.src)}
    <article class={item.class}>
      <video playsinline bind:this={videoElements[itemsList.indexOf(item)]} src={item.src} loop></video>
      <p>{@html item.text}</p>
    </article>
  {/each}
</div>
