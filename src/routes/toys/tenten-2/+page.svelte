<script lang=ts>
    import Sound from './Sound.svelte'
</script>

<style>
  small {
    display: block;
    opacity: 0.4;
    line-height: 2;
    text-transform: uppercase;
  }
    .btn-group {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 20vh 20vh 20vh;
        align-items: stretch;
        width: 100%;
        gap: 0.25rem;
        padding: 1rem 2rem 0;
    }
    .icon {
        font-size: 1.2rem;
        margin-top: 0.5em;
        display: block;
    }
    @media (min-width: 32rem) {
      .icon {
        font-size: calc(5vh);
      }
    }
</style>


<!-- <audio bind:this={audioEl} src="/wnw-sfx/witches-and-wizards-spells-v4-healing-1.wav"></audio> -->
<div class="btn-group">
    <Sound src="https://ethanmuller.com/jule/tenten/wav/tenten-lock-1.wav">Lock <span class="icon">🔒</span></Sound>
    <Sound src="https://ethanmuller.com/jule/tenten/wav/tenten-mute-1.wav">Mute <span class="icon">🙉</span></Sound>
    <Sound src="https://ethanmuller.com/jule/tenten/wav/tenten-unmute-1.wav">Unmute <span class="icon">🐵</span></Sound>
    <Sound holdToPlay={true} src="https://ethanmuller.com/jule/tenten/wav/tenten-connecting-loop-1.wav">Waiting Loop <small>hold</small><span class="icon">🤠</span></Sound>
    <Sound src="https://ethanmuller.com/jule/tenten/wav/tenten-connection-success-1.wav">Connection Success <span class="icon">📢</span></Sound>
    <Sound src="https://ethanmuller.com/jule/tenten/wav/tenten-hangup-1.wav">Hang Up <span class="icon">✌</span></Sound>
    <Sound src="https://ethanmuller.com/jule/tenten/wav/tenten-cuica-1.wav">Could not reach <span class="icon">🙈</span></Sound>
    <Sound src="https://ethanmuller.com/jule/tenten/wav/tenten-push-start-1.wav">____ is talking... <span class="icon">📢</span></Sound>
    <Sound src="https://ethanmuller.com/jule/tenten/wav/tenten-push-end-1.wav">Over! <span class="icon">✌</span></Sound>
</div>
<!-- <button>II 💚</button>
<button>III 💚</button>
<button>VI 💚</button> -->
<!-- <audio src="/wnw-sfx/witches-and-wizards-spells-v4-healing-2.wav" controls></audio>
<audio src="/wnw-sfx/witches-and-wizards-spells-v4-healing-3.wav" controls></audio>
<audio src="/wnw-sfx/witches-and-wizards-spells-v4-healing-4.wav" controls></audio> -->
