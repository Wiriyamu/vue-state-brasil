<template>
  <div id="why" class="container max-w-screen-xl m-auto p-custom">
    <Navbar />

    <h2 class="mt-8 text-2xl font-bold md:text-xl text-secondary">
      Tudo que você precisa é Vue!
    </h2>
    <p class="mt-8 leading-loose md:text-sm text-secondary">
      O Vue foi criado com um objetivo especifico: trazer o melhor do
      <a
        class="text-enfasy md:text-sm hover:opacity-75"
        href="https://pt-br.reactjs.org/"
        target="_blank"
        >React</a
      >
      e do
      <a
        class="text-enfasy md:text-sm hover:opacity-75"
        href="https://angular.io/"
        target="_blank"
        >Angular</a
      >
      para dentro de um só lugar. Por isso há problemas que acreditamos que ele
      resolva melhor do que qualquer outra opção existente. Entretanto,
      precisamos ser justos e precisos, a verdade é que outras
      bibliotecas/frameworks também oferecem vantagens significativas, como por
      exemplo, o ecossistema do React ou a robustez do Angular. Ou seja, no fim
      das contas não existe uma ferramenta com ganhos absolutos, existe aquela
      que atende sua demanda e resolve os problemas de seus projetos. Dito isso,
      agora sim veremos onde o Vue se destaca...
    </p>

    <h2 class="my-8 text-2xl font-bold md:text-xl text-secondary">
      Opiniões da <em>comunidade</em> Vue
    </h2>

    <ul class="mt-4 ml-8 leading-loose list-disc text-secondary">
      <li>
        <strong class="mr-4 text-xl text-enfasy">Usabilidade</strong>
        <p class="md:text-sm">
          <strong class="text-xl">92%</strong> dos entrevistados usariam o
          Vue.js novamente em seu próximo projeto.
        </p>
      </li>

      <li class="mt-4">
        <strong class="mr-4 text-xl text-enfasy">Ótima Documentação</strong>
        <p class="md:text-sm">
          <strong class="text-xl">94%</strong> dos participantes da pesquisa
          usaram a documentação oficial para aprender sobre o Vue.
        </p>
      </li>

      <li class="mt-4">
        <strong class="mr-4 text-xl text-enfasy">Integração</strong>
        <p class="md:text-sm">
          <strong class="text-xl">75%</strong> dos entrevistados apontaram a
          facilidade de integração como a maior vantagem do Vue.js.
        </p>
      </li>

      <li class="mt-4">
        <strong class="mr-4 text-xl text-enfasy">Crescimento</strong>
        <p class="md:text-sm">
          <strong class="text-xl">60%</strong> dos participantes da pesquisa
          acreditam que o Vue.js se tornará ainda mais popular em suas
          organizações nos próximos 12 meses.
        </p>
      </li>

      <li class="mt-4">
        <strong class="mr-4 text-xl text-enfasy"
          >Curva de Aprendizagem Rápida</strong
        >
        <p class="md:text-sm">
          <strong class="text-xl">58%</strong> decidiu adicionar o Vue à sua
          stack porque é uma estrutura bastante fácil para se começar.
        </p>
      </li>
    </ul>

    <p class="mt-8 text-sm text-secondary">
      * Pesquisa feita com base em 1.553 respostas, principalmente de
      desenvolvedores de software e diretores de tecnologia cujas as
      organizações atualmente usam Vue.
      <a
        class="text-enfasy hover:opacity-75"
        href="https://twitter.com/youyuxi"
        target="_blank"
        >Evan You</a
      >
      e
      <a
        class="text-enfasy hover:opacity-75"
        target="_blank"
        href="https://www.linkedin.com/in/szymon-korzeniowski-23742431/?originalSubdomain=pl"
        >Szymon Korzeniowski</a
      >
      também participaram da pesquisa.
    </p>
    <Chart />
    <RankChart />
    <p class="mt-8 text-sm text-secondary">
      * Os dados da pesquisa foram retirados do site
      <a
        class="text-enfasy hover:opacity-75"
        target="_blank"
        href="https://2019.stateofjs.com/front-end-frameworks/vuejs/"
        >State of JavaScript</a
      >.
    </p>
    <p class="mt-4 text-sm text-secondary">
      * Para mais informações, os seguites artigos são recomendados:
      <a
        class="text-enfasy hover:opacity-75"
        href="https://br.vuejs.org/v2/guide/comparison.html"
        target="_blank"
        >Br Vuejs</a
      >,
      <a
        class="text-enfasy hover:opacity-75"
        href="https://vuejs-brasil.com.br/por-que-vuejs-e-uma-boa-opcao/"
        target="_blank"
        >Vuejs Brasil </a
      >,
      <a
        class="text-enfasy hover:opacity-75"
        href="https://blog.codecasts.com.br/por-que-vue-js-e-nao-react-d5b58c09d193"
        target="_blank"
        >CodeCasts</a
      >.
    </p>
    <Growth />
    <p class="mt-8 text-sm text-secondary">
      * Esse trecho é uma tradução livre da
      <a
        class="text-enfasy hover:opacity-75"
        href="https://www.quora.com/How-popular-is-VueJS-in-the-industry-Will-becoming-a-Vue-expert-be-useful-career-wise/answer/Evan-You-3"
        target="_blank"
        >resposta</a
      >
      do criador do Vue à pergunta: Como o Vue é popular na Industria?
    </p>
    <p class="mt-2 text-sm text-secondary">
      * Post completo
      <a
        class="text-enfasy hover:opacity-75"
        target="_blank"
        href="https://vuejs-brasil.com.br/como-e-a-popularidade-do-vue-js-no-mercado/"
        >aqui!</a
      >.
    </p>
    <AfterYear />

    <p class="mt-4 text-sm text-secondary">
      * Palavras de
      <a
        class="text-enfasy hover:opacity-75"
        target="_blank"
        href="https://www.linkedin.com/in/yuriynemtsov/"
        >Yurly Nemtsov</a
      >, engenheiro de software e gerente na Behance, em relatório para Evan
      You.
    </p>

    <p class="mt-2 text-sm text-secondary">
      * Trecho retirado do ebook State of Vue. Tradução e adaptação por
      <a
        class="text-enfasy hover:opacity-75"
        href="https://www.linkedin.com/in/wiriyamu/"
        target="_blank"
        >Willian Silva</a
      >.
    </p>

    <p class="mt-2 text-sm text-secondary">
      * Para baixar o ebook clique
      <a
        class="text-enfasy hover:opacity-75"
        href="https://www.monterail.com/state-of-vuejs-report"
        target="_blank"
        >aqui!</a
      >.
    </p>

    <footer class="flex items-center justify-between py-8">
      <router-link
        class="text-sm md:text-xs text-enfasy hover:opacity-75"
        to="/history"
        exact
        >Página Anterior</router-link
      >
      <router-link
        class="text-sm md:text-xs text-enfasy hover:opacity-75"
        to="/case-study"
        exact
        >Próxima Página</router-link
      >
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Chart from '@/components/whyvue/Chart'
import RankChart from '@/components/whyvue/RankChart'
import Growth from '@/components/whyvue/Growth'
import AfterYear from '@/components/whyvue/AfterYear'

export default {
  name: 'WhyVue',
  components: { Navbar, Chart, RankChart, Growth, AfterYear }
}
</script>

<style></style>
