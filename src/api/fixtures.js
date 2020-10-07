const profile = {
  'firstName': 'Luthfi',
  'lastName': 'Januar Aulia',
  'limit': 100000
}

const products = [
  { id: 1, title: 'Keripik Kaca', price: 15000, inventory: 10, shipping: 5000, url: require('./../assets/pikca.jpg') },
  { id: 2, title: 'Mie Lidi rasa Coklat', price: 20000, inventory: 4, shipping: 5000, url: require('./../assets/miecoklat.jpg') },
  { id: 3, title: 'Mie Lidi rasa Stoberi', price: 20000, inventory: 3, shipping: 5000, url: require('./../assets/miestoberi.jpeg') },
  { id: 4, title: 'Mie Lidi Pedas', price: 15000, inventory: 5, shipping: 5000, url: require('./../assets/miepedas.jpeg') },
  { id: 5, title: 'Mie Lidi Asin', price: 15000, inventory: 1, shipping: 5000, url: require('./../assets/mieasin.jpg') },
  { id: 6, title: 'Mie Lidi Original', price: 12000, inventory: 6, shipping: 5000, url: require('./../assets/mieoriginal.jpg') }
]

const promotions = [
  { 'id': 1, 'title': '30% OFF' },
  { 'id': 2, 'title': 'Rp3000 Discount' },
  { 'id': 3, 'title': 'Free Shipping' },
  { 'id': 4, 'title': 'Voucher Rp25000' }
]

// Simulate requests

export default {
  getProfile (cb) {
    setTimeout(() => cb(profile), 200)
  },

  getProducts (cb) {
    setTimeout(() => cb(products), 200)
  },

  getPromotions (cb) {
    setTimeout(() => cb(promotions), 200)
  }
}
