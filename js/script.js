const {createApp} = Vue;

createApp({
  data(){
    return{
        apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',
        email:''
    }
  },
  methods:{
    printEmail(){
      axios.get(this.apiUrl)
      .then((response) =>{
      this.email = response.data.response
      console.log(email);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  },
  mounted(){

  }
}).mount('#app')