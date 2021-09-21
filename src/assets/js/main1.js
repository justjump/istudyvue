//针对24.vue组件化,vue类型文件实践.html这个文件
import Vue from 'vue';
// import App from './24App';
import App from '../../vue/24App.vue';
new Vue({
    el: "#app",
    template: "<App></App>",
    components: {
        App:App
        // App
    }

})