<template>
  <Home />
  <About />
  <Process />
  <Project />
  <Team />
  <Comment />
  <Contact />
  <Footer />
</template>

<script setup>
import "font-awesome/css/font-awesome.css";
import Home from "@/components/HeaderComponent.vue";
import About from "@/components/AboutComponent.vue";
import Process from "@/components/ProcessComponent.vue";
import Project from "@/components/ProjectComponent.vue";
import Team from "@/components/TeamComponent.vue";
import Comment from "./components/CommentComponent.vue";
import Contact from "./components/ContactComponent.vue";
import Footer from "./components/FooterComponent.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald&family=Vollkorn&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  width: 940px;
  margin: 0px auto;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
input {
  outline: none;
  border: none;
}
.rectangle {
  width: 80px;
  height: 2px;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.09);
  margin: 0 auto;
  margin-top: 28px;
}
@media (max-width: 992px) {
  .container {
    width: 750px;
  }
}
@media (max-width: 776px) {
  .container {
    width: 520px;
  }
}
@media (max-width: 567px) {
  .container {
    width: 100%;
    padding: 0 20px;
  }
}
</style>
