<template>
  <div class="loading-page" v-if="!isLoaded">
    <img src="https://www.easy-pilot.com/typo3conf/ext/tsaviation/Resources/Public/images/loader.gif" alt="LoadingPage">
  </div>
</template>

<script>
export default {
    name: 'LoadingPage',
    data() {
        return {
            isLoaded: false
        }
    },
    mounted() {
        document.onreadystatechange = () => {
            if(document.readyState === "complete") {
                this.isLoaded = true;
            }
        }
    }
}
</script>

<style>
    .loading-page {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>