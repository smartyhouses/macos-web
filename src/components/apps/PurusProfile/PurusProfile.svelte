<script lang="ts">
  export let isBeingDragged: boolean;

  $: console.log(isBeingDragged);
</script>

<section class="container">
  <header class="app-window-drag-handle" />
  <div>
    <iframe
      src="https://prtl.cc"
      title="Agents"
      allow="camera;microphone"
    />
  </div>
</section>

<style lang="scss">
  .container {
    background-color: #202327;
    padding: 1px;

    border-radius: inherit;

    display: grid;
    grid-template-rows: auto 1fr;
  }

  iframe {
    width: 100%;
    height: 100%;

    border-radius: 0 0 0.75rem 0.75rem;
  }

  header {
    padding: 0.9rem;
  }

  :global(.tl-container.vscode) {
    top: 0.6rem;
    left: 0.6rem;
  }
</style>
