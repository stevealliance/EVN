<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Modal</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/drawer">Drawer</router-link> |
      <router-link to="/simple">Simple</router-link> |
      <router-link to="/stagger">Stagger</router-link> |
      <router-link to="/state">State</router-link> |
      <router-link to="/Master">Master</router-link>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  overflow-x:none;
}

.home {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}

button {
  border:0px;
  padding: 12px;
  background-image: linear-gradient(to right, #FF5F6D, #FFC371);
  color: #fff;
  width: 80px;
  border-radius: 4px;
}

.modal {
  width: 50%;
  padding-bottom: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0px 3px 8px #383838ab
}

.modal button {
  margin-top: 20px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #FFC371;
}

#nav a.router-link-exact-active {
  color: #FF5F6D;
}

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.list li {
  list-style-type: none;
}

.input-container {
  display: inline-flex;
}

.input-container input {
  margin-right:8px;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid;
  border-image-source: linear-gradient(to right, #FF5F6D, #FFC371);
  border-image-slice: 1;
}
.input-container button { 
  margin-right: 8px;
}

.drawer {
  background-color: #ddd;
  padding:20px;
  width:200px;
  margin-top: 20px;
  border-radius: 8px;
}

/***** TRANSITIONS ******/

.fade-enter {
  opacity: 0;

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}


.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;

}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

.slide-up-enter {
  transform: translateY(10px);
  opacity: 0;
}

.slide-up-enter-active {
  transition: all .3s ease;
}

.slide-up-move {
  transition: transform .5s ease-in;
}


</style>
