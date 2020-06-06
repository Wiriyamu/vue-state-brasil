<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  border: 0;
}

html,
body {
  @apply antialiased;
  @apply h-screen;
  @apply bg-primary;
  font-family: 'IBM Plex Mono', monospace;
}
</style>
