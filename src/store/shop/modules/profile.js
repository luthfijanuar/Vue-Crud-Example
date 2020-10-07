const state = {
  data: {}
}

const mutations = {
  RECEIVE_PROFILE (state, profile) {
    state.data = profile
  },

  TOGGLE_COUPON (state, coupon) {
    const couponLimitId = 4

    if (coupon.id !== couponLimitId) return

    if (!coupon.active) {
      state.data.limit += 25000
    } else {
      state.data.limit -= 25000
    }
  }
}

export default {
  state,
  mutations
}
