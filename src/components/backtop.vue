<template>
  <div class='topback'>
      <slot name='left'><button>left</button></slot>
      <slot name='mid'><button>mid</button></slot>
      <slot name='right'><button>right</button></slot>

  </div>
</template>

<script scope>
export default {
  name: 'topback',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>
