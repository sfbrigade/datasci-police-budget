export const state = () => ({
  city: 'san_francisco',
  year: '2020',
})

export const mutations = {
  updateCity(state, city) {
    state.city = city;
  },
  updateFiscalYear(state, year) {
    state.year = year;
  }
}