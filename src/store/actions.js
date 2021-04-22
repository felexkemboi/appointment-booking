const actions = {
  createAppointment({ commit }, data) {
    commit("createAppointment", data);
  },
  updateAppointment({ commit }, data) {
    commit("updateUser", data);
  },
  createUser({ commit }, data) {
    commit("createUser", data);
  },
};

export default actions
