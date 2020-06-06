<template>
  <div id="project" class="container max-w-screen-xl m-auto p-custom">
    <Navbar />

    <h2 class="mt-8 text-2xl font-bold md:text-xl text-secondary">
      Open Source
    </h2>

    <figure class="mt-8">
      <a
        class="mt-4 text-sm text-enfasy"
        href="https://www.linkedin.com/in/wiriyamu/"
        target="_blank"
        ><img
          class="rounded-full hover:opacity-75"
          src="@/assets/images/oficialAvatar.png"
          alt="Willian Silva"
          width="150"
      /></a>
    </figure>

    <p class="mt-4 leading-loose md:text-sm text-secondary">
      Olá, meu nome é Willian Silva, idealizador do Vue State Brasil. O objetivo
      por traz da criação dessa página é simplesmente colocar o Vue nos
      holofotes. Quero reunir nesse espaço, informações de diversas fontes, afim
      de sanar dúvidas das pessoas e empresas em relação ao uso do Vue. Para
      finalizarmos, nada melhor que algumas palavras de Evan You, criador do
      Vue:
      <em class="leading-loose md:text-sm text-enfasy"
        >Trabalhamos muito para tornar o Vue uma das soluções mais acessíveis,
        confiáveis e completas para a criação de aplicativos da Web, hoje e, com
        o apoio da comunidade, estamos confiantes de que podemos continuar assim
        por muito tempo... Estamos animados para desenvolver o projeto junto com
        você.</em
      >
    </p>

    <p class="mt-4 leading-loose md:text-sm text-secondary">
      Espero que tenha gostado do conteúdo apresentado até aqui! Esse projeto é
      open source, então fique a vontade para contribuir com issues e pull
      requests. O link para o repositório no Github está fixado aqui em baixo.
    </p>

    <vs-button class="my-2" color="#41C7C7" type="filled" size="small">
      <a href="https://github.com/Wiriyamu/vue-state-brasil" target="_blank"
        >Contribua!</a
      >
    </vs-button>

    <p class="mt-2 leading-loose md:text-sm text-secondary">
      Bons projetos galera! #Team Vue.
    </p>
    <footer class="flex items-center justify-between py-8">
      <router-link
        class="text-sm md:text-xs text-enfasy hover:opacity-75"
        to="/community"
        exact
        >Página Anterior</router-link
      >
      <router-link
        class="text-sm md:text-xs text-enfasy hover:opacity-75"
        to="/"
        exact
        >Ir para Home</router-link
      >
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'Projeto',
  components: { Navbar }
}
</script>

<style></style>
