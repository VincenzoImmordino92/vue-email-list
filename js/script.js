const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emails: []
    }
  },
  methods: {
    printEmail() {
      for (i = 0; i < 10; i++) {
        axios.get(this.apiUrl)
          .then((response) => {
            this.emails.push(response.data.response)
            console.log(response.data);
          })

          .catch((error) => {
            console.log(error);
          })
      }
    }
  },
  mounted() {
    this.printEmail()
    this.printMyArray()
  }
}).mount('#app')