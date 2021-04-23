<template>

<div class="min-h-screen bg-white">
  <header>
    <div class="relative bg-white">
      <div class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Appointments</span>
            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
            <span class="sr-only">Open menu</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
            Home
          </a>
        </nav>
        <!-- <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a @click.prevent="Register" href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            Register
          </a>
        </div> -->
      </div>
    </div>
  </header>

  <main>
    <div v-if="appointmentModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div>
            <div class="mt-3 text-center sm:mt-5">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Book an Appointment
              </h3>
            </div>
          </div>
          <div class="py-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div class="py-4">
                <div class="border-gray-200 rounded-lg h-96">
                  <form class="space-y-8 divide-y divide-gray-200">
                    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                        <div class="space-y-6 sm:space-y-5">

                          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label for="with" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Appointment with:</label>
                            <div class="px-500 mt-4">
                              <select v-model="appoinmentWith" class="w-full px-1500 py-2 bg-white border rounded outline-none">
                                <option v-for="user in users" :key="user.name" :value="user.name">{{ user.name }}</option>
                              </select>
                            </div>
                          </div>


                          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Date</label>
                            <Birth v-model="date" />
                          </div>
                          

                          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label for="reason" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Topic</label>
                            <div class="mt-1">
                              <input type="text" v-model="reason" class="w-full px-45000 py-2 bg-white border rounded outline-none" placeholder=" e.g Confirmation of the meeting" />
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button @click="cancel()" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-700 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">Cancel</button>
            <button @click="book()" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-indigo-700 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

</template>

<script>
import Birth from '@/components/Date.vue';
export default {
  name: 'Home',
  components:{
    Birth
  },
  data(){
    return{
      appointmentModal: true,
      appoinmentWith : "",
      user : "",
      reason: "",
      date :null,
      option : "",
      usersLogged : [
        {
          name : "peter",
        },
        {
          name : "paul",
        },
        {
          name : "alex",
        }
      ]
    }
  },
  methods:{
    RegisterUser(){
      this.$router.push('/user')
    },
    Register(){
      this.registerModal = true
    },
    Login(){
      this.$router.push('/login');
    },
    book(){
      let payload = {
        "madeBy" : localStorage.getItem("loggedUser"),
        "time": this.$children[0].date,
        "reason" : this.reason,
        "with" : this.appoinmentWith,
        "status" : "Processing"
      }
      console.log(payload)
    },
    cancel(){
       this.date = ""
      this.reason = ""
      this.user = ""
      this.appointmentModal = false
    }
  },

  computed : {
    users(){
      return this.usersLogged
    }
  }
}
</script>

<style scoped>
.bgSvg{
    background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23180d1c' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23261431' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23351947' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23451e5e' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23552277' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}
</style>
