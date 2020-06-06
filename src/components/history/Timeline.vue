<template>
  <div id="timeline">
    <vue-timeline-update
      :date="new Date('2019-02-04')"
      title="v2.6.0 - Macross"
      category="Anúncio"
      icon="code"
      color="blue"
      class="mt-16"
      ><img src="@/assets/images/macross.jpg" alt="Macross" />
      <p class="mt-4 leading-loose md:text-sm">
        Ontem, comemoramos o quinto aniversário do Vueniversary - hoje temos o
        prazer de anunciar o lançamento do Vue 2.6 "Macross"!
      </p>

      <p class="mt-4 leading-loose md:text-sm">
        No ano passado, passamos muito tempo trabalhando na nova CLI e na
        criação de protótipos para o 3.0. Como resultado, o Vue core 2.x não
        recebe atualizações importantes há um bom tempo. Já estava na hora! Esta
        versão combina uma série de melhorias substanciais, alterações internas
        e novos recursos. Para detalhes completos, verifique também a nota de
        lançamento completa no GitHub.
      </p>
      <p class="mt-4 md:text-sm">
        Mais sobre o lançamento:
        <a
          class="md:text-sm"
          href="https://github.com/vuejs/vue/releases/tag/v2.6.0"
          target="_blank"
          >Macross</a
        >.
      </p></vue-timeline-update
    >

    <vue-timeline-update
      :date="new Date('2017-10-13')"
      title="v2.5.0 - Level E"
      category="Anúncio"
      icon="code"
      color="green"
      class="mt-16"
      ><img src="@/assets/images/level_e.jpg" alt="Level E" />
      <p class="mt-4 leading-loose md:text-sm">
        Alteramos a implementação do Vue.nextTick para corrigir alguns bugs
        (relacionados a
        <a href="https://github.com/vuejs/vue/issues/6566" target="_blank"
          >#6566</a
        >,
        <a href="https://github.com/vuejs/vue/issues/6690" target="_blank"
          >#6690</a
        >). A mudança envolve o uso de uma tarefa macro em vez de uma micro
        tarefa para adiar as atualizações do DOM quando dentro de um manipulador
        de eventos do DOM conectado via v-on. Isso significa que qualquer
        atualização do Vue acionada por alterações de estado nos manipuladores
        v-on será adiada usando uma tarefa de macro. Isso pode levar a
        alterações no comportamento ao lidar com eventos DOM nativos.
      </p>
      <p class="mt-4 md:text-sm">
        Mais sobre o lançamento:
        <a
          class="md:text-sm"
          href="https://github.com/vuejs/vue/releases/tag/v2.5.0"
          target="_blank"
          >Level E</a
        >.
      </p></vue-timeline-update
    >

    <vue-timeline-update
      :date="new Date('2017-07-13')"
      title="v2.4.0 - Kill La Kill"
      category="Anúncio"
      icon="code"
      color="orange"
      class="mt-16"
      ><img src="@/assets/images/kill_la_kill.jpg" alt="Kill La Kill" />
      <p class="mt-4 leading-loose md:text-sm">
        Suporte completo a componentes assíncronos SSR + no núcleo: o SSR agora
        suporta a renderização de componentes assíncronos usados em qualquer
        lugar e o cliente também oferece suporte a componentes assíncronos
        durante a fase de hidratação. Isso significa que componentes assíncronos
        / divisão de código agora funcionam apenas durante o SSR e não são mais
        limitados no nível da rota.
      </p>
      <p class="mt-4 md:text-sm">
        Mais sobre o lançamento:
        <a
          class="md:text-sm"
          href="https://github.com/vuejs/vue/releases/tag/v2.4.0"
          target="_blank"
          >Kill La Kill</a
        >.
      </p></vue-timeline-update
    >

    <vue-timeline-update
      :date="new Date('2017-04-27')"
      title="v2.3.0 - JoJo's Bizarre Adventure"
      category="Anúncio"
      icon="code"
      color="purple"
      class="mt-16"
      ><img
        src="@/assets/images/jojo_adventures.jpg"
        alt="Jojo's Bizarre Adventures"
      />
      <p class="mt-4 leading-loose md:text-sm">
        Criamos um guia independente totalmente novo para renderização no
        servidor do Vue. É uma leitura recomendada para todos os usuários. Além
        disso, a demonstração do HackerNews foi atualizada para refletir as
        melhores práticas mais recentes.
      </p>
      <p class="mt-4 md:text-sm">
        Mais sobre o lançamento:
        <a
          href="https://github.com/vuejs/vue/releases/tag/v2.3.0"
          target="_blank"
          >JoJo's Bizarre Adventure</a
        >.
      </p></vue-timeline-update
    >

    <vue-timeline-update
      :date="new Date('2017-02-26')"
      title="v2.2.0 - Initial D"
      category="Anúncio"
      icon="code"
      color="red"
      class="mt-16"
      ><img src="@/assets/images/initial_d.jpg" alt="Initial D" />
      <p class="mt-4 leading-loose md:text-sm">
        Esta versão contém 31 solicitações pull de 22 colaboradores diferentes -
        obrigado!
      </p>
      <p class="mt-4 md:text-sm">
        Mais sobre o lançamento:
        <a
          class="md:text-sm"
          href="https://github.com/vuejs/vue/releases/tag/v2.2.0"
          target="_blank"
          >Initial D</a
        >.
      </p></vue-timeline-update
    >

    <vue-timeline-update
      :date="new Date('2016-11-22')"
      title="v2.1.0 - Hunter X Hunter"
      category="Anúncio"
      icon="code"
      color="turquoise"
      class="mt-16"
      ><img src="@/assets/images/hunter_x_hunter.jpg" alt="Hunter X Hunter" />
      <p class="mt-4 leading-loose md:text-sm">
        Esta é uma nota de lançamento bastante longa:
        <a
          class="md:text-sm"
          href="https://gist.github.com/yyx990803/faebe22e8763f5b17572b35ed96f52fe"
          target="_blank"
          >Veja uma versão com sumário vinculável aqui.</a
        >
      </p>
      <p class="mt-4 md:text-sm">
        Mais sobre o lançamento:
        <a
          class="md:text-sm"
          href="https://github.com/vuejs/vue/releases/tag/v2.1.0"
          target="_blank"
          >Hunter X Hunter</a
        >.
      </p></vue-timeline-update
    >

    <vue-timeline-update
      :date="new Date('2016-09-30')"
      title="v2.0.0 - Ghost in the Shell"
      category="Anúncio"
      icon="code"
      color="white"
      class="mt-16"
      ><img
        src="@/assets/images/ghost_in_the_shell.jpg"
        alt="Ghost In The Shell"
      />
      <p class="mt-4 leading-loose md:text-sm">
        Hoje, tenho o prazer de anunciar o lançamento oficial do Vue.js 2.0:
        Ghost in the Shell. Após 8 alfas, 8 betas e 8 rcs (uma total
        coincidência!), O Vue.js 2.0 está pronto para produção! O guia oficial
        foi totalmente atualizado e está disponível em vuejs.org/guide.
      </p>

      <p class="mt-4 leading-loose md:text-sm">
        Desde o início do trabalho em 2.0, em abril, a equipe principal fez
        contribuições significativas para o design da API, correções de bugs,
        documentação e tipografia TypeScript (sim, vue core, vue-router e vuex
        2.0, todos têm tipificações TypeScript enviadas nos pacotes npm ) e a
        comunidade também forneceram um feedback extremamente valioso sobre as
        alterações na API - um grande obrigado a todos os envolvidos!
      </p>

      <p class="mt-4 md:text-sm">
        Mais sobre o lançamento:
        <a
          class="md:text-sm"
          href="https://github.com/vuejs/vue/releases/tag/v2.0.0"
          target="_blank"
          >Ghost In The Shell</a
        >.
      </p></vue-timeline-update
    >

    <vue-timeline-update
      :date="new Date('2015-10-27')"
      title="v1.0.0 - Evangelion"
      category="Anúncio"
      icon="code"
      color="black"
      class="mt-16"
      ><img
        class="w-ghost"
        src="@/assets/images/evangelion.svg"
        alt="Evangelion"
      />
      <p class="mt-4 leading-loose md:text-sm">
        Depois de mais de 300 commits, 8 alphas, 4 betas e 2 candidatos a
        lançamento, hoje tenho muito orgulho em anunciar o lançamento do Vue.js
        1.0.0 Evangelion! Muito obrigado a todos os que participaram do processo
        de reformulação da API - não teria sido possível sem toda a contribuição
        da comunidade.
      </p>

      <p class="mt-4 md:text-sm">
        Mais sobre o lançamento:
        <a
          class="md:text-sm"
          href="https://github.com/vuejs/vue/releases/tag/1.0.0"
          target="_blank"
          >Evangelion</a
        >.
      </p>
      <p class="mt-8 text-xs text-secondary">
        *Timeline component made by
        <a
          href="https://www.growthbunker.dev/vuetimeline/"
          target="_blank"
          rel="noopener noreferrer"
          >Nada</a
        >.
      </p>
    </vue-timeline-update>
  </div>
</template>

<script>
export default {
  name: 'Timeline'
}
</script>

<style>
[class^='gb-']:not(.gb-base-icon) {
  font-family: 'IBM Plex Mono', monospace !important;
}
</style>
