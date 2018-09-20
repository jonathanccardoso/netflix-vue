import Vue from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue'

//install VueResource in project
import VueResource from 'vue-resource'
Vue.use(VueResource)

//npm install vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Contato = {template: '<p>Pagina de Contato</p>'}
const SemPagina = {template: '<p>Não existe</p>'}

//using vue-router
//configurações de rotas
const routes = [
  { path: '/', component: Home },
  { path: '/contato', component: Contato }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router
}).$mount('#app')

/*new Vue({
  el: '#app',
  data:{
    rotaAtual: window.location.pathname
  },
  computed:{
    exibeComponente(){
      return rotas[this.rotaAtual] || SemPagina
    }
  },
  //render: h => h(App)
  //render: h => h(Home)
  render: h => h(this.exibeComponente)
})*/
