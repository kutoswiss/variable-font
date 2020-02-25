<template>
  <nav class="navbar navbar-expand-lg navbar-light border-bottom">
    <a class="navbar-brand" href="#">
      <h5 class="my-0 mr-md-auto font-weight-normal">{{ projectName }} <small>{{ version }}</small></h5> 
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      </ul>
      <github-button href="https://github.com/kutoswiss/variable-font" data-size="large" aria-label="Fork kutoswiss/variable-font">Fork me on GitHub</github-button>
    </div>
  </nav>
</template>
<script src="./TopMenu.js"></script>
