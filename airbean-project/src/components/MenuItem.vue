<template>
    <div>
        <!-- 
            JAG SKA HÅLLA OCH PRESENTERA DATA
            ALLA SMARTA FUNCTIONER ETC SKÖTS I MenuList
         -->

        <!-- Skriver ut datan -->
        <h2>
            {{menuItemData.name}}
        </h2>
        <p>
            {{menuItemData.description}}
        </p>
        <p>
            PRICE: {{menuItemData.price}}
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