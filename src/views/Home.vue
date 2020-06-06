<template>
  <div id="home" class="container max-w-screen-xl m-auto p-custom">
    <Navbar />
    <div class="flex flex-col items-center justify-center mt-8">
      <img src="@/assets/images/vue.svg" alt="Vue State Brasil" />
      <h1
        class="max-w-screen-lg mt-8 ml-2 text-3xl font-bold text-center md:text-xl text-secondary"
      >
        Um overview do
        <strong class="text-enfasy">melhor</strong> framework Javascript, feito
        especialmente para a comunidade
        <strong class="text-enfasy">Brasileira</strong>.
      </h1>
    </div>

    <div class="mt-20">
      <h2 class="text-2xl font-bold md:text-xl text-secondary">
        O que é o Vue.js?
      </h2>

      <p class="mt-8 leading-loose text-secondary md:text-sm">
        Vue
        <strong class="text-enfasy"
          >(pronuncia-se /vjuː/, como view, em inglês)</strong
        >
        é um framework <strong>progressivo</strong> para a construção de
        interfaces de usuário. Ao contrário de outros
        <strong>frameworks</strong> monolíticos, Vue foi projetado desde sua
        concepção para ser adotável incrementalmente. A biblioteca principal é
        focada exclusivamente na camada visual <strong>(view layer)</strong>,
        sendo fácil adotar e integrar com outras bibliotecas ou projetos
        existentes. Por outro lado, Vue também é perfeitamente capaz de dar
        poder a sofisticadas Single-Page Applications quando usado em conjunto
        com <strong class="text-enfasy">ferramentas modernas</strong> e
        <strong class="text-enfasy">bibliotecas de apoio</strong>.
      </p>
    </div>
    <footer class="flex items-center justify-end py-8">
      <router-link
        class="text-sm md:text-xs text-enfasy hover:opacity-75"
        to="/history"
        exact
        >Próxima Página</router-link
      >
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'Home',
  components: { Navbar }
}
</script>
