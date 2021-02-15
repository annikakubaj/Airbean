<template>
    <div>

        <!-- Skriver ut datan -->
        <h2>
            NAMN: {{menuItemData.name}}
        </h2>
        <p>
            DATA: {{menuItemData}}
        </p>



    </div>
</template>

<script>
export default {
    props: [

        // Tar emot datan från MenuList
        'menuItemData'
    ]

}
</script>

<style>

</style>