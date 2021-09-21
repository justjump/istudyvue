<template>
  <div>
    <ul>
      <li
        class="list"
        v-for="(color, index) in colors"
        :key="index + color.val"
      >
        <h3 :style="{ background: color.val }">
          <Taowa :incolor="color.val"></Taowa>
        </h3>
        <p class="shape">{{ color.name.replace("色", "") }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Taowa from "./24AppTaowa";
export default {
  name: "App",
  //这里的name无所谓??去掉也行把
  components: {
    // Taowa:Taowa
    Taowa,
  },
  data() {
    return {
      colors: [
        {
          name: "红色",
          val: "rgb(228, 21, 21)",
        },
        {
          name: "白色",
          val: "rgb(255, 255, 255)",
        },
        {
          name: "黑色",
          val: "rgb(0, 0, 0)",
        },

        {
          name: "绿色",
          val: "rgb(18, 226, 18)",
        },
        {
          name: "蓝色",
          val: "rgb(20, 20, 212)",
        },
        {
          name: "橙色",
          val: "rgb(212, 142, 11)",
        },
        {
          name: "紫色",
          val: "rgb(214, 11, 214)",
        },
        {
          name: "金色",
          val: "rgb(243, 209, 13)",
        },
      ],
    };
  },
};
</script>
<style scoped>
body {
  background: #fff;
}
h3 {
  width: 100px;
  height: 100px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list p {
  margin: 0 auto;
  color: black;
}

.list {
  display: inline-block;
  border: 10px solid #333;
  margin: 20px;
  text-align: center;
}
</style>