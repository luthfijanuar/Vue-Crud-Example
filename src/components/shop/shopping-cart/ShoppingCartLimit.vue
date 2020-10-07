<template>
  <strong>{{limit | currency}}</strong>
</template>

<script>
export default {
  name: 'ShoppingCartLimit',
  props: {
    limit: Number
  }
}
</script>
