<template>
  <div id="history" class="container max-w-screen-xl m-auto p-custom">
    <Navbar />
    <div class="mt-8">
      <figure>
        <img
          class="rounded-full"
          src="@/assets/images/evan.jpg"
          alt="Evan You"
          width="150px"
        />
        <figcaption class="mt-4 text-xs text-enfasy">
          Evan You - Criador do Vue
        </figcaption>
      </figure>
    </div>

    <div class="mt-8">
      <h2 class="text-2xl font-bold md:text-xl text-secondary">
        História do Vue
      </h2>
      <p class="mt-4 leading-loose md:text-sm text-secondary">
        O Vue foi criado pelo desenvolvedor independente chinês
        <a
          class="text-enfasy"
          href="https://twitter.com/youyuxi"
          target="_blank"
          >Evan You</a
        >, após trabalhar para o Google usando o AngularJS em vários projetos.
        Posteriormente, ele resumiu o pensamento por trás do processo de criação
        do Vue: "Pensei, e se eu pudesse retirar somente a parte que realmente
        gostava do Angular e criar algo muito leve?". O primeiro commit ao
        código-fonte do projeto data de julho de 2013, e o framework foi lançado
        oficialmente em fevereiro do ano seguinte, em 2014.
      </p>
    </div>

    <div class="mt-12">
      <h2 class="text-2xl font-bold md:text-xl text-secondary">Curiosidades</h2>
      <p class="mt-4 leading-loose md:text-sm text-secondary">
        Algumas versões do Vue foram apelidadas carinhosamente com nomes de
        animes famosos.
      </p>
      <Timeline />
    </div>

    <div class="mt-12">
      <h2 class="text-2xl font-bold md:text-xl text-secondary">
        Saiba Mais
      </h2>
      <p class="mt-4 leading-loose md:text-sm text-secondary">
        Caso tenha curiosidade, assista o
        <a
          class="text-enfasy hover:opacity-75"
          href="https://www.youtube.com/embed/OrxmtDw4pVI"
          target="_blank"
          >documentário</a
        >
        explicando detalhes por traz da criação do Vue.
      </p>
    </div>

    <footer class="flex items-center justify-between py-8">
      <router-link
        class="text-sm md:text-xs text-enfasy hover:opacity-75"
        to="/"
        exact
        >Página Anterior</router-link
      >
      <router-link
        class="text-sm md:text-xs text-enfasy hover:opacity-75"
        to="/why-vue"
        exact
        >Próxima Página</router-link
      >
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Timeline from '@/components/history/Timeline'
export default {
  name: 'History',
  components: { Navbar, Timeline }
}
</script>

<style></style>
