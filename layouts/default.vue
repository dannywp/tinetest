<script>
import TnHeader from '../components/TnHeader';

export default {
  components: { TnHeader },
  head() {
    return {
      title: 'Prismic Nuxt.js Blog',
    };
  },
};
</script>

<template>
  <div>
    <tn-header />
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>

</style>

