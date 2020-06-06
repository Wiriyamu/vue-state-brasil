<template>
  <div id="case">
    <div>
      <h2 class="mt-8 text-2xl font-bold md:text-xl text-secondary">
        Um ano depois com o Vue.js - Behance
      </h2>
    </div>

    <div>
      <p class="mt-8 leading-loose md:text-sm text-secondary">
        Fomos ao Behance para sabermos se o Vue resistiu ao teste do tempo e se
        continua sendo usado nos projetos da companhia.
      </p>
      <h3 class="mt-4 text-enfasy">
        Você ainda usa o Vue.js em seus produtos? Se não, porque?
      </h3>
      <p class="mt-8 leading-loose md:text-sm text-secondary">
        Sim nós usamos. E há duas razões pelas quais acho que o Vue.js continua
        sendo a melhor tecnologia para o Behance: SSR e ergonomia.
        Preocupamo-nos em ter um TTI baixo e não conseguiríamos alcançar o nosso
        sem o excelente suporte SSR do Vue. É bem pensado e documentado de
        maneira útil. Do vue-loader, renderizador de pacotes, suporte completo
        no vue-router e vuex, armazenamento em cache de componentes embutido e
        até manuseio de pré-carregamento / pré-comprovação de ativos - as
        eficiências que obtemos de um único ecossistema compatível com SSR são
        incomparáveis. E isso não é específico para SSR. O Vue foi desenvolvido
        para ser uma biblioteca progressiva, na qual os componentes
        independentes são projetados para trabalhar muito bem juntos. Eles são
        ergonômicos, e nós amamos isso no Vue.
      </p>
    </div>

    <div class="mt-8">
      <h3 class="text-enfasy">O que mudou no seu uso do Vue.js?</h3>
      <p class="mt-8 leading-loose md:text-sm text-secondary">
        No lado do gerenciamento de estado, começamos com uma loja Vuex onde
        todos os nossos módulos estavam registrados no momento da inicialização.
        Somente mais tarde percebemos que, para o tamanho de nosso aplicativo, e
        especificamente o fato de ser um site com seções independentes, essa
        abordagem não foi bem dimensionada. O acesso a qualquer página do site
        fez o usuário baixar o Vuex módulos (e seus utilitários de suporte e
        bibliotecas de comunicação API) para todo o aplicativo. Uma página que
        necessitasse apenas de alguns KB de gerenciamento de estado seria punida
        dez vezes mais, sem nenhum benefício. O que fazemos agora é registrar
        dinamicamente os módulos Vuex quando forem necessários e cancelar o
        registro quando não forem. Em conjunto com componentes assíncronos e
        vue-router, agora carregamos apenas os componentes e módulos Vuex
        necessários para essa página específica e importamos outros
        dinamicamente quando necessário.
      </p>
    </div>

    <div class="mt-8">
      <h3 class="text-enfasy">
        Quantos desenvolvedores usam o Vue.js em sua empresa agora em comparação
        com um ano atrás?
      </h3>
      <p class="mt-8 leading-loose md:text-sm text-secondary">
        Temos dez pessoas trabalhando no Vue.js em tempo integral agora. Se não
        me falha a memória, é uma ou duas pessoas a mais que no ano passado.
      </p>
    </div>

    <div class="mt-8">
      <h3 class="text-enfasy">
        Como sua empresa cresceu e como o Vue.js contribuiu para isso?
      </h3>
      <p class="mt-8 leading-loose md:text-sm text-secondary">
        Desde o ano passado, reescrevemos nossa página inicial de login no Vue
        (um sucesso, com base no feedback extremamente positivo do usuário e nos
        dados que vemos). Quando você ler isso, terminaremos com mais duas
        seções principais do Behance; todos usando Vue eficiente, renderizado no
        servidor, permitindo que as pessoas que usam o Behance mostrem seu
        trabalho e se inspirem no belo trabalho de outras pessoas
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'After Year'
}
</script>

<style></style>
