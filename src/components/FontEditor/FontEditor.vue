<template>
  <div id="font-editor" class="d-flex flex-column flex-md-row align-items-center p-3">
    <p contenteditable="true" spellcheck="false">kutoswiss</p>
  </div>
</template>
<style>
@font-face {
  font-family: 'Minipax';
  src: url('../../assets/fonts/minipax/fonts/variable/Minipax Variable.ttf') format('truetype');
}

#font-editor {
    background-color:linen;
    font-family: Minipax;
    font-size:30px;
    height:80vh; 
}
</style>