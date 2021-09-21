import {
    flag,
    say,
    todo
} from './aaa.js';
console.log(flag)
say();
todo();

import b from './bbb.js';
console.log(b);
b.daikuan(10, .2, 15);

import * as c from './ccc.js';
console.log(c);


//引入vue
import Vue from 'vue';
console.log(Vue)
new Vue({
    el: "#app1",
    template:`
        <h1>{{myname}}</h1>
    `,
    data: {
        myname: 'hehehe'
    }
})
// import Vue from "/node_modules/vue/dist/vue.js";
//修改一下这个文件,看看git有什么反应?
//用git status来跟踪.
require("../css/normal.css");