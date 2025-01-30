<script lang="ts">
    let { src, children } = $props();
    const ctx = new AudioContext();
    let audio: AudioBuffer | null;
    fetch(src)
    .then(data => data.arrayBuffer())
    .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
    .then(decodedAudio => {
       audio = decodedAudio
    })
    
    
    function doink() {
       const playSound = ctx.createBufferSource();
       playSound.buffer = audio;
       playSound.connect(ctx.destination);
       playSound.start(ctx.currentTime);
    }
</script>

<style>
    button {
        font-size: 0.75rem;
        padding: 1rem 0.25rem;
        border: none;
        border-radius: 0.75rem;
        background: #fafafa;
        color: #333;
        font-family: monospace;
    }
    button:only-child {
        grid-column: -1
    }
    
    button:active {
        background: #ccc;
        color: #000;
    }
    
    button:not(:active) {
        transition: all 1s 1s;
    }
</style>


<button onclick={doink}>
    {@render children?.()}
</button>