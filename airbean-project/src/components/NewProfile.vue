<template>
    <div class="wrapper">
    <div class="register">
        <p class="first">Välkommen till AirBean-familjen!</p>
        <p class="second">Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
        <form>
            <p class="label"> Namn </p>
            <input type="text">

            <p class="label"> E-post </p>
            <input type="text">
            <input class="button" type="button" value="Brew me a cup!"> 
        </form>
    </div>
    </div>
</template>



<script>
export default {



}
</script>


<style scoped>

.wrapper{
    display: flex;
    justify-content: center;
    height:470px;
}

.register{
    width:330px;
    height:450px;
    border-radius: 3px;;
    background-image: linear-gradient(white, rgba(243, 228, 225, 1));
    
}


.first{
    font-weight: bold;
    font-size: 32px;
    font-family: serif;
    margin-bottom: 0px;;
}
.second{
    font-size:16px;
}
.label{
    font-size: 12px;
    margin: 0px 15px;
    text-align:left;
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