<script lang=ts>
    import Sound from './Sound.svelte'
</script>

<style>
    .btn-group {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 25vh 25vh 25vh;
        align-items: stretch;
        width: 100%;
        gap: 0.75rem;
        padding: 1rem 2rem 0;
    }
    .icon {
        font-size: 1.2rem;
        display: block;
    }
</style>


<!-- <audio bind:this={audioEl} src="/wnw-sfx/witches-and-wizards-spells-v4-healing-1.wav"></audio> -->
<div class="btn-group">
    <Sound src="/wnw-sfx/witches-and-wizards-spells-v4-healing-1.wav">I <span class="icon">💚</span></Sound>
    <Sound src="/wnw-sfx/witches-and-wizards-spells-v4-healing-2.wav">II <span class="icon">💚</span></Sound>
    <Sound src="/wnw-sfx/witches-and-wizards-spells-v4-healing-3.wav">III <span class="icon">💚</span></Sound>
    <Sound src="/wnw-sfx/witches-and-wizards-spells-v4-healing-4.wav">IV <span class="icon">💚</span></Sound>
    <Sound src="/wnw-sfx/witches-and-wizards-spells-v4-hurting-1.wav">I <span class="icon">💥</span></Sound>
    <Sound src="/wnw-sfx/witches-and-wizards-spells-v4-hurting-2.wav">II <span class="icon">💥</span></Sound>
    <Sound src="/wnw-sfx/witches-and-wizards-spells-v4-hurting-3.wav">III <span class="icon">💥</span></Sound>
    <Sound src="/wnw-sfx/witches-and-wizards-spells-v4-hurting-4.wav">IV <span class="icon">💥</span></Sound>
    <Sound src="/wnw-sfx/witches-and-wizards-spells-v4-penalty.wav"><span class="icon">🙊</span></Sound>
</div>
<!-- <button>II 💚</button>
<button>III 💚</button>
<button>VI 💚</button> -->
<!-- <audio src="/wnw-sfx/witches-and-wizards-spells-v4-healing-2.wav" controls></audio>
<audio src="/wnw-sfx/witches-and-wizards-spells-v4-healing-3.wav" controls></audio>
<audio src="/wnw-sfx/witches-and-wizards-spells-v4-healing-4.wav" controls></audio> -->
