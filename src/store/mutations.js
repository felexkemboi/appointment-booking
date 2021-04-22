const mutations = {
  createAppointment(state, data) {
    state.appointments.append(data)
  },
  updateAppointment(state, data) {
    console.log(data)
  },
  createUser(state, data){
    state.users.append(data)
  }
};

export default mutations