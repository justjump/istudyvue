<template>
  <div>
    <ul>
      <li
        class="list"
        v-for="(color, index) in colors"
        :key="index + color.val"
      >
        <h3 :style="{ background: color.val }"></h3>
        <p class="shape">{{ color.name.replace("色", "") }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      colors: [
        {
          name: "红色",
          val: "#f00",
        },
        {
          name: "绿色",
          val: "green",
        },
        {
          name: "蓝色",
          val: "blue",
        },
        {
          name: "橙色",
          val: "orange",
        },
        {
          name: "紫色",
          val: "purple",
        },
        {
          name: "金色",
          val: "gold",
        },
      ],
    };
  },
};
</script>
<style scoped>
h3 {
  width: 100px;
  height: 100px;
  margin: 0;
}
.list p {
  margin: 0 auto;
}

.list {
  display: inline-block;
  border: 10px solid #333;
  margin: 20px;
  text-align: center;
}
</style>