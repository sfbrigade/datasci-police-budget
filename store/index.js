export const state = () => ({
  city: 'san_francisco',
  fiscal_year: '2020',
});

export const getters = {
  getCity(st) {
    return st.city;
  },
  getFiscalYear(st) {
    return st.fiscal_year;
  },
};

export const mutations = {
  updateCity(st, city) {
    st.city = city;
  },
  updateFiscalYear(st, fiscalYear) {
    st.fiscal_year = fiscalYear;
  },
};
