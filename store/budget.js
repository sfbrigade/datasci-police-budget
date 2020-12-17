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

const round = (x) => x.toFixed(2);

export const getters = {
  hasAnyAmount(st) {
    return Object.values(st.amounts).some((amount) => amount > 0);
  },
  getTotalAmount(st) {
    return round(st.total_amount);
  },
  getAmounts(st) {
    return st.amounts.map((a) => round(a));
  },
  getRealAmounts(st) {
    return st.real_amounts.map((a) => round(a));
  },
  getAllAmounts(st) {
    return Object.entries(st.amounts).reduce((hash, [key, value]) => {
      hash[key] = [round(value), round(st.real_amounts[key])];
      return hash;
    }, {});
  },
  getRemainingAmount(st) {
    return round(st.total_amount - Object.values(st.amounts).reduce((a, b) => a + b, 0));
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

  updateRealAmounts(st, amountUpdates) {
    st.real_amounts = { ...st.real_amounts, ...amountUpdates };
    st.total_amount = Object.values(st.real_amounts).reduce((a, b) => a + b, 0);
  },

  resetAmounts(st) {
    st.amounts = Object.keys(st.amounts).reduce((hash, key) => {
      hash[key] = 0;
      return hash;
    }, {});
  },

  resetRealAmounts(st) {
    st.total_amount = 0;
    st.real_amounts = Object.keys(st.real_amounts).reduce((hash, key) => {
      hash[key] = 0;
      return hash;
    }, {});
  },
};
