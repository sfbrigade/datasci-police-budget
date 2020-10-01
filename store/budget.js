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
});

export const getters = {
  getTotalAmount(st) {
    return st.total_amount;
  },
  getAmounts(st) {
    return st.amounts;
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
};
