<script lang="ts">
  let { src, children, holdToPlay = false } = $props();
    const ctx = new AudioContext();
    let audio: AudioBuffer | null;
    fetch(src)
    .then(data => data.arrayBuffer())
    .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
    .then(decodedAudio => {
       audio = decodedAudio
    })

let sound;

let isTouch = false;

function handle_press(e: Event) {
  if (e.type === "touchstart") {
    isTouch = true;
  } else if (isTouch && e.type === "mousedown") {
    e.preventDefault();
    return;
  }

  sound = ctx.createBufferSource();
  sound.buffer = audio;
  sound.loop = holdToPlay;
  sound.connect(ctx.destination);
  sound.start(ctx.currentTime);
}

function handle_release(e: Event) {
  if (e.type === "mouseup" && isTouch) {
    return; // Ignore mouse events if a touch event was already registered
  }
  
  if (!sound) return;
  if (holdToPlay) {
    sound.stop();
  }
}

</script>

<style>
    button {
        font-size: 0.75rem;
        padding: 1rem 0.5rem;
        border: none;
        border-radius: 0.75rem;
        background: #fafafa;
        color: #333;
        font-family: monospace;
        user-select: none;
    }
    button:only-child {
        grid-column: -1
    }
    
    button:active {
        background: #0d0;
        color: #000;
    }
    
    button:not(:active) {
        transition: all 2s cubic-bezier(0.190, 1.000, 0.220, 1.000);
    }
</style>


<button ontouchstart={handle_press} onmousedown={handle_press}
  ontouchend={handle_release} ontouchcancel={handle_release} onmouseup={handle_release}>
    {@render children?.()}
</button>
