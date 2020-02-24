<template>
  <div id="bottom-menu" class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <label for="customRange1">Width</label>
          <input type="range" class="custom-range" id="customRange1" />
        </div>
        <div class="col-3">
          <label for="customRange1">Weight</label>
          <input type="range" class="custom-range" id="customRange1" />
        </div>
        <div class="col-3">
          <label for="customRange1">Constant</label>
          <input type="range" class="custom-range" id="customRange1" />
        </div>
        <div class="col-1">
          <select class="selectpicker dropup" data-dropup-auto="false">
            <option>a</option>
            <option>b</option>
          </select>
        </div>
        <div class="col-1">
          <select class="selectpicker dropup" data-dropup-auto="false">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#bottom-menu {
    height:100px;
    border:1px solid red;
    position: absolute;
    bottom:0;
    width:100%;
}
</style>