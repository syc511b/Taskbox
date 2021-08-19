<template>
  <!--<div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>-->
  <div id="app">
   <task-list />
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import TaskList from './components/PureTaskList.vue';
export default {
  name: "App",
  components: {
    TaskList
  }
};
</script>

<style>
@import "./index.css";
</style>
