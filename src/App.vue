<template>
  <div id="app" class="container-fluid">
    <TopMenu projectName="Variable Font" version="0.0.1"/>
    <FontEditor/>
    <BottomMenu/>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu/TopMenu.vue'
import FontEditor from './components/FontEditor/FontEditor.vue'
import BottomMenu from './components/BottomMenu/BottomMenu.vue'
export default {
  name: 'App',
  components: {
    TopMenu,
    FontEditor,
    BottomMenu
  }
}
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
body {
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  padding: 0;
  margin: 0;
}
</style>
