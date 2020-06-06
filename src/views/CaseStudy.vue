<template>
  <div id="case" class="container max-w-screen-xl m-auto p-custom">
    <Navbar />
    <div>
      <h2 class="mt-8 text-2xl font-bold text-secondary">Estudo de Caso</h2>
      <p class="mt-8 leading-loose text-secondary">
        Estudo de casos são a melhor maneira de demonstrar o valor de qualquer
        ferramenta, negócio e... framework. Recebemos dezenas de e-mails
        mencionando estudos de caso com um excelente ponto de vista para com o
        Vue. Eles eram a prova de que o Vue era usado comercialmente em várias
        empresas e, com grande sucesso, entrevistamos empresas que tiveram a
        gentileza de compartilhar suas experiências. Empresas muito diferentes,
        mas todas conseguiram desenvolver com sucesso seus produtos com o
        Vue.js. Vamos ver o exemplo da gigante
        <a
          class="text-enfasy hover:opacity-75"
          href="https://www.ibm.com/br-pt"
          target="_blank"
          >IBM</a
        >.
      </p>
      <div class="mt-8">
        <figure>
          <img
            class="rounded-full"
            src="../assets/images/StephaneRodet.png"
            alt="Stephane Rodet"
            width="150px"
          />
        </figure>
        <figcaption class="mt-4">
          <a
            class="text-sm text-enfasy hover:opacity-75"
            target="_blank"
            href="https://www.linkedin.com/in/stephane-rodet-98736829/"
            >Stephane Rodet - Engenheiro de UX sênior na IBM Design</a
          >
        </figcaption>

        <p class="mt-4">
          <em class="text-sm text-gray-500"
            >Vue.js é a tecnologia que realmente nos ajuda a fazer coisas.
            Quando uso o Vue, passo muito pouco tempo pesquisando coisas, posso
            me concentrar em escrever o código. Além disso, devido à sua
            independência, garantimos que ele continuará a se desenvolver e que
            seu licenciamento será completamente seguro, o que é crucial para
            empresas de TI como a IBM.</em
          >
        </p>

        <h2 class="mt-8 text-2xl font-bold md:text-xl text-enfasy ">
          IBM Hybrid Cloud
        </h2>
        <p class="mt-8 leading-loose text-secondary">
          O IBM Hybrid Cloud oferece soluções completas de gerenciamento de TI
          que abrangem ambientes de nuvem pública, privada e híbrida. Dezenas de
          produtos e serviços como o IBM Cloud e o Process and API Management
          são usados por milhares de empresas, em mais de vinte setores.
        </p>

        <Challenge />
        <Solution />
        <Result />

        <p class="mt-8 text-sm text-secondary">
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
            to="/why-vue"
            exact
            >Página Anterior</router-link
          >
          <router-link
            class="text-sm md:text-xs text-enfasy hover:opacity-75"
            to="/guide"
            exact
            >Próxima Página</router-link
          >
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Challenge from '@/components/casestudy/Challenge'
import Solution from '@/components/casestudy/Solution'
import Result from '@/components/casestudy/Result'
export default {
  name: 'Case Study',
  components: { Navbar, Challenge, Solution, Result }
}
</script>

<style></style>
