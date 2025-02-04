<style>
  article {
    display: grid;
    grid-template-columns: 1fr 21rem;
  }
  img {
    width: 100%;
    height: 100%;
    max-height: 45vh;
    object-fit: cover;
    object-position: middle right;
  }
  .plex {
    font-family: "IBM Plex Mono", mono;
    font-weight: 300;
    font-style: normal;
  }
  p {
    padding: 2rem;
    margin: 0;
  }
  article {
    background: #f3f3f3;
  }
  article:nth-child(2n) {
    background: #f9f9f9;
  }
  .layout {
    display: flex;
    flex-direction: column;
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

<div class="plex max layout">

  <article>
    <img src="https://ethanmuller.com/files/thmb/thmb_4.jpg" alt="" />
    <p>Back in the factory, a ball is formed from organic goop. It is rounded, plucked, and painted. Then it is ready.</p>
  </article>

  <article>
    <img src="https://ethanmuller.com/files/thmb/thmb_gh.jpg" alt="" />
    <p>Subtle synthesized elements with some foley to match physics. Usually I mix in mono but this has a cheeky hard pan left for his wave. No octocats were harmed in the making of this audio.</p>
  </article>

  <article>
    <img src="https://ethanmuller.com/files/thmb/thmb_2.jpg" alt="" />
    <p>Warm guitar, wind chimes, light clinking and clunking. Physical, tactile sounds. Set in outer space, but sonically it’s a prairie in the summer.</p>
  </article>

  <article>
    <img src="https://ethanmuller.com/files/thmb/thmb_1.jpg" alt="" />
    <p class="plex">One of my first and favorite pieces with Makata & Benji. For this piece I sampled actual audio footage of machinery from the factory where they made the Honk bubbles.</p>
  </article>

  <article>
    <img src="https://ethanmuller.com/files/thmb/thmb_3.jpg" alt="" />
    <p>In this piece I dared to ask: what if a ball rolled looped de loop on metal and got uploaded into a computer sequence and then it shoomped through a pneumatic tube to make a hologram? What if that happened? What would that sound like?</p>
  </article>

  <article>
    <img src="https://ethanmuller.com/files/thmb/thmb_5.jpg" alt="" />
    <p>Wood, metal, magnets. Click clack. Cute tumbly music reminiscent of <a href="https://www.youtube.com/watch?v=e33KWTJPvuU">Un P’tit Air</a>.</p>
  </article>

  <article>
    <img src="https://ethanmuller.com/files/thmb/thmb_fanfare.jpg" alt="" />
    <p>Doing my darndest to recreate the Spongebob Band Geeks fanfare with software instruments. Sounds real, doesn’t it? Benji originally described this as a “Superbowl commercial” and I wasn’t sure if he was being serious.</p>
  </article>

  <article>
    <img src="https://ethanmuller.com/files/thmb/thmb_6.jpg" alt="" />
    <p>Lots of action in what feels like a little diorama. My favorite part is when the broom swoops in.</p>
  </article>
</div>
