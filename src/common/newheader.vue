<template>
  <div class="nav-bar" style="display:flex; ">
    <div class="nav-left">
      <slot name="left">
        <button>返回</button>
      </slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right">
      <slot name="right">
        <button>通知</button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.nav-bar {
  position: relative;
  z-index: 10;

  display: flex;

  height: 44px;
  line-height: 44px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  /*border-bottom: 1px solid #eee;*/
  /*box-shadow: 0 1px 1px rgba(100,100,100,.08);*/
}
</style>
