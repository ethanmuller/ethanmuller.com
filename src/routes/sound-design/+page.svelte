<style>
  * {
    box-sizing: border-box;
  }

  article {
    display: grid;
    grid-template-columns: 1fr;
  }
  img, video {
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
    background: white;
    align-self: end;
    margin-left: auto;
  }
  .plex {
    font-family: mono;
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
    }
    .inset.tl p {
      bottom: auto;
      right: auto;
      top: 3rem;
      left: 3rem;
    }
  }
  @media (min-width: 11300px) {
    .layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    article {
      font-size: 0.8rem;
      grid-template-columns: 1fr 16rem;
    }
    p {
      padding: 2rem 3rem 2rem 1rem;
      margin: 0;
    }
    article:nth-child(2n - 1),
    article:nth-child(2n) {
      background: #f3f3f3;
    }
    article:nth-child(4n - 1),
    article:nth-child(4n) {
      background: #f9f9f9;
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
src: "https://ethanmuller.com/files/vid/sounds-good/octocat-loop.mp4",
text: "Subtle synthesized elements with some foley to match physics. Usually I mix in mono but this has a cheeky hard pan left for his wave. No octocats were harmed in the making of this audio.",
class: "inset"
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/LFE-update-machine-v6.mp4",
text: "Wood, metal, magnets. Click clack. Cute tumbly music reminiscent of <a href=\"https://www.youtube.com/watch?v=e33KWTJPvuU\">Un P’tit Air</a>.",
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/lfe-family-unlock-v3.mp4",
text: "Shout out to ratchets. Gotta be one of my favorite sound design elements.",
class: "inset",
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/lfe%20spinball%20loop.mp4",
text: "Q: What if a ball rolled a loop de loop on metal and got uploaded into a computer sequence and then it shoomped through a pneumatic tube to project a hologram? What if that happened? What would that sound like?<br><br>A: Tube music",
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/honk%20ball%20loop.mp4",
text: "Quite a productive day at the factory! One of my first and favorite pieces with <a href=\"https://www.makata.tv/\">Makata</a> & Benji. For this piece I sampled actual audio footage of machinery from the factory where they made the Honk bubbles.",
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/honk%20discover%20tab%20loop.mp4",
text: "Lots of action in what feels like a teeny diorama. So many little details.",
},
{
src: "https://ethanmuller.com/files/vid/sounds-good/lfe%20components%20loop.mp4",
text: "Warm guitar, wind chimes, light clinking and clunking. Physical, tactile sounds. Set in outer space, but sonically it’s a prairie in the summer.",
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

  onMount(() => {
    videoElements.forEach((vid) => {
      vid?.parentElement?.addEventListener("mouseover", () => vid.play());
      vid?.parentElement?.addEventListener("mouseleave", () => vid.pause());
    });
  });
</script>

<div class="plex max layout">
  {#each itemsList as item (item.src)}
    <article class={item.class}>
      <video bind:this={videoElements[itemsList.indexOf(item)]} src={item.src} loop></video>
      <p>{@html item.text}</p>
    </article>
  {/each}
</div>
