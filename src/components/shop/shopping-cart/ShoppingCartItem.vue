<template>
  <div class="media mb-3">
    <div class="mr-2">
      <div class="rounded vue-logo"></div>
    </div>

    <div class="media-body">
      <strong class="d-block">{{item.title}}</strong>
      <span>Quantity: {{item.quantity}} - {{item.price | currency}}</span>
    </div>

    <div class="media-right align-middle">
      <RemoveFromCart :product="item" />
    </div>
  </div>
</template>

<script>
import RemoveFromCart from './../products/RemoveFromCart'

export default {
  name: 'ShoppingCartItem',
  props: {
    item: Object
  },
  components: { RemoveFromCart }
}
</script>
