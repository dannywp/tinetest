<template functional>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss">
  .card {
    padding: 40px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.125);
    transition: box-shadow 100ms ease;
    cursor: pointer;

    &:hover {
      box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.225);
    }
  }
</style>
