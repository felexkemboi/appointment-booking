<template>
  <div>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <div class="flex flex-col h-0 flex-1 bg-gray-800">
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Home">
            </div>
            <nav class="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
              <a @click.prevent="createAppointment()"  href="#" class="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"><svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>Create Appointment</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">

      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">My Appointments</h2>
        </div>

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

        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Made By
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Reason
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        With
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(appointment, personIdx) in appointments" :key="appointment.time" :class="personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {{ appointment.madeBy }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ appointment.time }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ appointment.reason }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ appointment.with }}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {{ appointment.status }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  </div>

  </div>
</template>

<script>
  import Birth from '@/components/Date.vue';

export default {

  name: 'Home',
  components:{
    Birth
  },
  computed: {
    query(){
     return  `SELECT ${this.columns} FROM ${this.table.name}.${this.database.name}`
    },
    users(){
      return this.usersLogged
    }
  },
  data(){
    return {
        appointments: [                    
            {
              madeBy: 'peter',
              time: "2020-3-23",
              reason : "Meeting confirmation",
              with : "Alex",
              status : "processing"

            },
            {
              madeBy: 'limoh',
              time: "2020-03-3",
              reason : "Meeting cancellation",
              with : "Morris",
              status : "Cancelled"
            },
            {
              madeBy: 'paul',
              time: "2021-3-3",
              reason : "Growth",
              with : "Phila",
              status : "processing"
            },
            {
              madeBy: 'peter',
              time: "2020-03-23",
              reason : "Meeting Cancelled",
              with : "Alex",
              status : "processing"
            },
            {
              madeBy: "Philemon",
              reason: "Testing",
              status: "Processing",
              time: "2000-01-14",
              with: "peter",
            }
        ],
        appointmentModal: false,
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
  methods: {
    createAppointment(){
      this.appointmentModal = true
    },
    book(){
      let payload = {
        "madeBy" : localStorage.getItem("loggedUser"),
        "time": this.$children[0].date,
        "reason" : this.reason,
        "with" : this.appoinmentWith,
        "status" : "Processing"
      }
      this.appointmentModal =  false
      this.appointments.push(payload)
    },
    cancel(){
      this.date = ""
      this.reason = ""
      this.user = ""
      this.appointmentModal = false
    }
  }
}
</script>