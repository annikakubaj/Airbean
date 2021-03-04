<template>
    <div class="wrapper">
    <div class="register">

        <img class="logo" src="../assets/A.svg" alt="logo">

        <p class="first">Välkommen till AirBean-familjen!</p>
        <p class="second">Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>

        <form  @submit.prevent>
            <p class="label"> Namn </p>
            <input type="text" v-model="name" required>

            <p class="label"> E-post </p>
            <input type="email" v-model="email" required>

            <p class="radio"><input class="radio-btn" type="radio"> <label class="radio-label"> GDPR OK! </label></p>
            <input class="button" type="submit" value="Brew me a cup!" v-on:click="saveUser()"> 
        </form>
        
    </div>
    </div>
</template>



<script>


export default {

    data: function() { 
        return {
            name:"",
            email:"",
            errors: false
        }
    },
    computed: {
        getCart: function() {

        return this.$store.state.cart
        }
    },
    methods: {

    saveUser: function() {

        this.errors = false; // Rensar errors så att den inte minns gamla errors

        if(this.name == '' || this.name == null){ // Sätter errors till true ifall man har glömt fylla i fältet

            this.errors = true;
        }

        if(this.email == '' || this.email == null){ // Sätter errors till true ifall man har glömt fylla i fältet

            this.errors = true;
        }

        if(this.errors == false) { // Låter valideringen gå igenom ifall det inte finns errors

            const person = {name: this.name, email: this.email};

            this.$store.commit('saveUser', person) // Säger åt store att köra mutationen saveUser, och skickar med datan
            this.$router.push("/UserProfile"); // Navigerar till UserProfile
        }

        if(this.getCart.length > 0) { // om man har grejor i cart så går köpet igenom

            this.$store.commit('onPurchase')
        }
    }
  }
}
</script>


<style scoped>

.logo{
    margin-top:25px;
}

.wrapper{
    display: flex;
    justify-content: center;
    height:500px;
}

.register{
    width:330px;
    height:480px;
    border-radius: 3px;;
    background-image: linear-gradient(white, rgba(243, 228, 225, 1));
    
}


.first{
    font-weight: bold;
    font-size: 32px;
    font-family: serif;
    margin: 0px;
}
.second{
    font-size:16px;
}
.label{
    font-size: 12px;
    margin: 0px 15px;
    text-align:left;
}
.radio{
    margin: 0px 15px;
    text-align: left;
}
.radio-btn{
    width: 12px;
    height:12px;
   
}

.radio-label{
    font-size: 14px;
    margin:0;
}

input{
    width:310px;
    height:50px;
    border-radius: 5px;
    background-color:transparent;
    margin:5px;
    font-size: 16px;
    padding:10px;
    
}




.button{
    border:none;
    border-radius: 50px;
    width:250px;
    height:50px;
    background-color: rgba(47, 41, 38, 1);
    margin:25px;
    color:white;
    font-size:24px;
    font-weight: bold;
    font-family: serif;
}





</style>