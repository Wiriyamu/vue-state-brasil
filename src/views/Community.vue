<template>
  <div id="community" class="container max-w-screen-xl m-auto p-custom">
    <Navbar />

    <figure class="flex flex-col items-center justify-center mt-8">
      <a
        class="mt-4 text-sm text-enfasy hover:opacity-75"
        href="https://github.com/vuejs-br"
        target="_blank"
        ><img
          class="rounded-full"
          src="@/assets/images/vue-brasil.jpg"
          alt="Vue Brasil"
          width="150"
      /></a>
    </figure>

    <p class="mt-8 leading-loose text-center md:text-sm text-secondary">
      Venha fazer parte da comunidade Vue.js Brasil! Todo mundo só tem a ganhar.
      Além de você adquirir conhecimento, de quebra, ainda terá ajuda de pessoas
      feras, que mandam muito usando o Vue.
    </p>

    <div class="flex items-center justify-center mt-8">
      <video autoplay muted loop>
        <source src="../assets/video/video.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="flex justify-center my-8 centerx">
      <vs-button :color="colorx" @click="popupActivo5 = true" type="filled"
        >Conheça a Comunidade</vs-button
      >

      <vs-popup
        style="color:rgb(255,255,255)"
        background-color="rgba(255,255,255,.6)"
        :background-color-popup="colorx"
        title="Conheça as comunidades que fazem parte do ecossistema Vuejs no Brasil."
        :active.sync="popupActivo5"
      >
        <ul class="mt-8 ml-8 text-secondary">
          <li>
            <a
              class="text-secondary hover:text-enfasy"
              href="http://vuejs-brasil.com.br/"
              target="_blank"
              >Blog</a
            >
          </li>

          <li>
            <a
              class="mt-2 text-secondary hover:text-enfasy"
              href="https://github.com/vuejs-br/forum"
              target="_blank"
              >Fórum</a
            >
          </li>
          <li>
            <a
              class="mt-2 text-secondary hover:text-enfasy"
              href="https://www.facebook.com/groups/vuejsbr/"
              target="_blank"
              >Facebook(grupo)</a
            >
          </li>
          <li>
            <a
              class="mt-2 text-secondary hover:text-enfasy"
              href="https://www.facebook.com/vuejsbrasil/"
              target="_blank"
              >Facebook(página)</a
            >
          </li>
          <li>
            <a
              class="mt-2 text-secondary hover:text-enfasy"
              href="https://t.me/vuejsbrasil"
              target="_blank"
              >Telegram</a
            >
          </li>

          <li>
            <a
              class="mt-2 text-secondary hover:text-enfasy"
              href="https://twitter.com/vuejs_brasil"
              target="_blank"
              >Twitter</a
            >
          </li>

          <li>
            <a
              class="mt-2 text-secondary hover:text-enfasy"
              href="https://vuejs-brasil.herokuapp.com/"
              target="_blank"
              >Slack</a
            >
          </li>

          <li>
            <a
              class="mt-2 text-secondary hover:text-enfasy"
              href="https://www.youtube.com/channel/UC9DvZyV1QU3Y0-Tpv97oAxw"
              target="_blank"
              >Youtube</a
            >
          </li>
        </ul>
      </vs-popup>
    </div>
    <footer class="flex items-center justify-between py-8">
      <router-link
        class="text-sm md:text-xs text-enfasy hover:opacity-75"
        to="/guide"
        exact
        >Página Anterior</router-link
      >
      <router-link
        class="text-sm md:text-xs text-enfasy hover:opacity-75"
        to="/project"
        exact
        >Próxima Página</router-link
      >
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'Community',
  components: { Navbar },
  data() {
    return {
      colorx: '#4a5153',
      popupActivo5: false
    }
  }
}
</script>

<style></style>
