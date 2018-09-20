<templates>
  <div class="gui-card" v-bind:style="efeitoClick" v-on:click="clickEfeito()" v-on:mouseout="removeClickEfeito()">
    <div class="gui-card__media">
      <!-- v-buid para passar variavel -->
      <img class="gui-card__img" v-bind:src="imagem" alt=""  />
    </div>
    <div class="gui-card__details">
      <div class="gui-card__title">
        {{titulo}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Filme',
    props:['titulo', 'imagem'],
    data(){
      return{
        efeitoClick: null
      }
    },
    methods:{
      clickEfeito: function(){
        this.efeitoClick = 'transform: scale(1.9); margin-right: 110px;';
      },
        this.efeitoClick = null;
        removeClickEfeito: function(){
      }
    }
  }
</script>

<style lang="scss">

</style>
