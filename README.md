### How cart works

- Products can be added to the cart if they have an item available on stock.
- Products added to the cart must be removable.
- Checkout must be disabled if cart **total** is over user **limit**.
- If a product already exists on the cart, its counter should be updated.
- All products have a shipping price. **shipping** is defined by the highest shipping price of products added to cart.

### How promotions work

- 30% OFF should reduce 30% of the costs on **subtotal**.
- Rp3000 Discount should reduce Rp3000 of **total**.
- Free Shipping should set **shipping** to zero.
- Voucher Rp25000 on limit should increase user **limit** by Rp25000.

### We have 3 resources:

##### Profile

```js
{
  'firstName': 'Luthfi',
  'lastName': 'Januar Aulia',
  'limit': 100.000
}
```

##### Products

```js
{
  'id': 1,
  'title': 'Keripik Kaca',
  'price': 15000,
  'inventory': 10,
  'shipping': 5000
},
...
```

##### Promotions

```js
{ 'id': 1, 'title': '30% OFF' },
{ 'id': 2, 'title': 'Rp3000 Discount' },
{ 'id': 3, 'title': 'Free Shipping' },
{ 'id': 4, 'title': 'Voucher Rp25000' }
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit

### Npm 

## Project Setup
npm install

## Compiles and hot-reloads for development
npm run serve
