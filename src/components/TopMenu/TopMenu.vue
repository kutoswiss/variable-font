<template>
  <div id="top-menu" class="d-flex flex-column flex-md-row align-items-center p-3 border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto font-weight-normal">{{ projectName }} <small>{{ version }}</small></h5>
    <github-button href="https://github.com/kutoswiss/variable-font" data-size="large" aria-label="Fork kutoswiss/variable-font">Fork me on GitHub</github-button>
  </div>
</template>
<!-- Place this tag in your head or just before your close body tag. -->
<script>
import GithubButton from 'vue-github-button'

export default {
  name: 'TopMenu',
  components: {
      GithubButton
  },
  props: {
    projectName: String,
    version: String
  }
}
</script>
<style>
#top-menu {
    height:70px;
    border:1px solid red;
}
</style>
