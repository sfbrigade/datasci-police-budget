const departments = [
  'health',
  'culture',
  'admin',
  'city',
  'welfare',
  'protection',
  'transport',
  'overview',
];

export const state = () => ({
  active_department: 0,
});

export const getters = {
  getActiveDepartment(st) {
    return st.active_department;
  },
  getActiveDepartmentName(st) {
    return departments[st.active_department];
  },
  shouldShowOverview(st) {
    return st.active_department === 7;
  },
};

export const mutations = {
  nextDepartment(st) {
    if (st.active_department < 6) {
      st.active_department += 1;
    }
  },

  previousDepartment(st) {
    if (st.active_department >= 1) {
      st.active_department -= 1;
    }
  },

  goToWalkthrough(st) {
    st.active_department = 0;
  },

  goToOverview(st) {
    st.active_department = 7;
  },
};
