<style>
.photo_frame {
  height: 200px;width: 300px;
}
.photo_size {
  height: 180px; width: 180px;
  position: relative;
  right: 15%;
}
</style>
<template>
  <div class="card text-center">
    <div class="card-img-top vue-logo"></div>
    <div class="card-body" >
      <div class="photo_frame">
      <img v-bind:src="product.url" alt="image" class="photo_size"/>
      </div>
      <h5 class="card-title">{{product.title}}</h5>
      <p class="card-text">{{product.price | currency}} - Stock: {{product.inventory}}</p>
      <AddToCart :product="product" />
    </div>
  </div>
</template>

<script>
import AddToCart from './AddToCart'

export default {
  name: 'Product',
  props: {
    product: Object
  },
  components: { AddToCart }
}
</script>
