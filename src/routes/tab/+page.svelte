<script>
  import { Vex } from "https://cdn.skypack.dev/vexflow@beta/build/esm/entry/vexflow.js";
	import { onMount } from "svelte";

  // Vex.Flow.setMusicFont("Bravura");

  onMount(() => {
    const factory = new Vex.Flow.Factory({
      renderer: { elementId: "vextab", width: 500, height: 130 },
    });
    const score = factory.EasyScore();
    factory
        .System()
        .addStave({
            voices: [score.voice(score.notes("C#5/q, B4, A4, G#4", { stem: "up" })), score.voice(score.notes("C#4/h, C#4", { stem: "down" }))],
        })
        .addClef("treble")
        .addTimeSignature("4/4");
    factory.draw();
  })

</script>

<div id="vextab"></div>