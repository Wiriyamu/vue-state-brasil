<template>
  <vs-navbar
    collapse
    v-model="activeItem"
    class="pt-4"
    color="#222429"
    type="flat"
  >
    <div slot="title">
      <vs-navbar-title class="flex items-center text-secondary">
        <router-link class="ml-2 text-xs text-enfasy" to="/"
          >Vue State Brasil</router-link
        >
      </vs-navbar-title>
    </div>

    <vs-navbar-item class="text-enfasy hover:opacity-75">
      <router-link to="/" exact>Home</router-link>
    </vs-navbar-item>

    <vs-navbar-item class="text-enfasy hover:opacity-75">
      <router-link to="/history">História</router-link>
    </vs-navbar-item>

    <vs-navbar-item class="text-enfasy hover:opacity-75">
      <router-link to="/why-vue">Porque Vue?</router-link>
    </vs-navbar-item>

    <vs-navbar-item class="text-enfasy hover:opacity-75">
      <router-link to="/case-study">Estudo De Caso</router-link>
    </vs-navbar-item>

    <vs-navbar-item class="text-enfasy hover:opacity-75">
      <router-link to="/guide">Guia Essencial</router-link>
    </vs-navbar-item>

    <vs-navbar-item class="text-enfasy hover:opacity-75">
      <router-link to="/community">Comunidade</router-link>
    </vs-navbar-item>

    <vs-navbar-item class="text-enfasy hover:opacity-75">
      <router-link to="/project">Projeto</router-link>
    </vs-navbar-item>
  </vs-navbar>
</template>

<script>
export default {
  name: 'Navbar'
  // data: () => ({
  //   activeItem: 0
  // })
}
</script>

<style></style>
