//针对24.vue组件化,vue类型文件实践.html这个文件
import Vue from 'vue';
const App = {
    template: `
    <div>
        <ul>
            <li v-for="(color,index) in colors">
                <p class="shape">{{color.name}}</p>
                <h3 :style="{background:color.val}"></h3>
            </li>
        </ul>
    </div>
    `,
    data() {
        return {
            colors: [{
                    name: "红色",
                    val: "#f00"
                },
                {
                    name: "绿色",
                    val: "green"
                },
                {
                    name: "蓝色",
                    val: "blue"
                },
                {
                    name: "橙色",
                    val: "orange"
                },
                {
                    name: "紫色",
                    val: "purple"
                },
                {
                    name: "金色",
                    val: "gold"
                },
            ]
        }
    }
}
new Vue({
    el: "#app",
    template: "<App></App>",
    components: {
        App:App
        // App
    }

})