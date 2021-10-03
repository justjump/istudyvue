import Vue from "vue"
import todo from "../../vue/todo.vue"
import 'lib-flexible'
const App=new Vue({
    el:"#app",
    template:"<todo />",
    components:{
        todo
    }
})