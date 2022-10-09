<template>
  <div class="app" :class="mode">
    <NanBar :mode="mode" @toggle="toggle" />
    <router-view />
  </div>
</template>

<script>
  import NanBar from './components/NanBar.vue';

  export default {
    name: "app",
    components: { NanBar },
    data () {
    return {
      mode: 'light'
    }
  },

    methods: {
      toggle() {
      if(this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    }
    }
  }
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none !important;
  text-transform: capitalize;
}

body {
  font-family: "Poppins", sans-serif !important;
  background: var(--text-light) !important;
}

:root {
  --main-color: #5a8f7b !important;
  --text-par: #555;
  --text-light: #fff;
  --border-main-color: 1px solid var(--main-color);
}

.dark {
  --text-par: #b3aaaa;
  background: #082032 !important;
}
</style>
