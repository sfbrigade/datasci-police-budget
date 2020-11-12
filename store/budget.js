export const state = () => ({
  total_amount: 0,
  amounts: {
    health: 0,
    culture: 0,
    admin: 0,
    city: 0,
    welfare: 0,
    protection: 0,
    transport: 0,
  },
  real_amounts: {
    health: 0,
    culture: 0,
    admin: 0,
    city: 0,
    welfare: 0,
    protection: 0,
    transport: 0,
  },
});

export const getters = {
  hasAnyAmount(st) {
    return Object.values(st.amounts).some((amount) => amount > 0);
  },
  getTotalAmount(st) {
    return st.total_amount;
  },
  getAmounts(st) {
    return st.amounts;
  },
  getRealAmounts(st) {
    return st.real_amounts;
  },
  getRemainingAmount(st) {
    return st.total_amount - Object.values(st.amounts).reduce((a, b) => a + b);
  },
  getExceedsLimit(st) {
    return Object.values(st.amounts)
      .reduce((sum, el) => sum + el, 0) > st.total_amount;
  },
};

export const mutations = {
  updateAmounts(st, amountUpdates) {
    st.amounts = { ...st.amounts, ...amountUpdates };
  },

  setTotalAmount(st, totalAmount) {
    st.total_amount = totalAmount;
  },

  updateRealAmounts(st, amountUpdates) {
    st.real_amounts = { ...st.real_amounts, ...amountUpdates };
  },
};
