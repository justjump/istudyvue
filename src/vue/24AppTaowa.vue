<template>
  <div class="inner" :style="{ backgroundColor: invert(incolor) }"></div>
</template>
<script>
export default {
  // name:"Taowa",
  props:{
      incolor:{
          type:String
      }
  },
  methods: {
    componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    },

    rgbToHex(r, g, b) {
      return (
        "#" +
        this.componentToHex(r) +
        this.componentToHex(g) +
        this.componentToHex(b)
      );
    },

    invert(rgb) {
      rgb = rgb.toString().replace(/[rgb()]/gi, "");
      rgb = [].slice
        .call(arguments)
        .join(",")
        .replace(/rgb\(|\)|rgba\(|\)|\s/gi, "")
        .split(",");
      for (var i = 0; i < rgb.length; i++)
        rgb[i] = (i === 3 ? 1 : 255) - rgb[i];
      return this.rgbToHex(rgb[0], rgb[1], rgb[2]);
    },
  },
};
</script>
<style scoped>
.inner {
  width: 30px;
  height: 30px;
  margin: auto;
  border: 2px solid #fff;

}
</style>