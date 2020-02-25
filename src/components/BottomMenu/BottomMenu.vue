<template>
  <div id="bottom-menu" class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-top">
        <div id="range-container">
          <div class="form-group form-group-fontsize">
            <label for="fontsize-axis">Font size</label>
            <input type="range" class="custom-range" min="20" max="200" step="1" id="fontsize-axis" v-on:input="sizeChanged()" v-model="fontsize">
          </div>
          <div class="form-group form-group-axis" v-for="axis in axes" v-bind:key="axis.key">
            <label :for="axis.name">{{ axis.name }}</label>
            <input type="range" class="custom-range" :min="axis.minValue" :max="axis.maxValue" step="0.1" :id="axis.name" v-on:input="axisChanged()" v-model="axis.value">
          </div>
        </div>
        <div id="dropdown-container">
          <div class="form-group form-group-dropdown">
            <label for="font-list">Fonts</label>
            <select id="font-list" class="form-control" data-dropup-auto="false" @change="fontChanged($event)">
              <option>Anybody</option>
              <option>Imbue</option>
              <option>Minipax</option>
              <option>Urbanist</option>
            </select>
          </div>
          <div class="form-group form-group-dropdown">
            <label for="font-instances">Instances</label>
            <select id="font-instances" class="form-control" data-dropup-auto="false" @change="instanceChanged()" v-model="instanceSelected">
              <option v-for="instance in instanceOptions" v-bind:key="instance.key" v-bind:value="instance.name">
                {{ instance.name }}
              </option>
            </select>
          </div>
        </div>
  </div>
</template>
<script src="./BottomMenu.js"></script>
<style src="./BottomMenu.css"></style>