<templates>
  <div class="slider">
    <h3>{{titulo}}</h3>

    <span v-on:mouseover="scrollEsquerda()" onmouseout="clearScroll()" class="handle handlePrev active">
      <i class="fa fa-caret-left" aria-hidden="true"></i>
    </span>

    <!--<div id="scroller" class="row">-->
    <!-- refs para referenciar o id -->
    <div ref="scroller" class="row">
      <div class="row__inner">

        <filme v-for="filme in filmes" v-bind:key="fillme.id" v-bind:titulo"filme.titulo" v-bind:imagem="filme.imagem"><filme>

      </div>
    </div>

    <span v-on:mouseover="scrollDireita()" v-on:onmouseout="clearScroll()"  class="handle handleNext active">
      <i class="fa fa-caret-right" aria-hidden="true"></i>
    </span>

  </div>
</template>

<script>

  import Filme from './Filme.vue';

  export default {
    name: 'Categoria',
    props:['titulo', 'filmes'],
    components:{
      Filme
    },
    methods:{
      scrollDireita(){
        //create variable to reference
        const self = this;
        //this.intervalo = setInterval(function(){ document.getElementById('scroller').scrollLeft += 1 }  , 5);
        this.intervalo = setInterval(function(){ self.$refs.scroller.scrollLeft += 1 }  , 5);
      },
      scrollEsquerda(){
        //selft ou "() =>" função de flexa
        //const self = this;
        this.intervalo = setInterval(() => { this.$refs.scroller.scrollLeft += 1 }  , 5);
      },
      clearScroll(){
        clearInterval(this.intervalo);
      }
    }
  }

</script>

<style lang="scss">

</style>
