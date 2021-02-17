<template>
<div>
  <!-- 
    JAG SKA HÅLLA OCH PRESENTERA DATA
    ALLA SMARTA FUNCTIONER ETC SKÖTS I MenuList
  -->

  <!-- Skriver ut datan -->
  <div v-if="menuItemData" >
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

<!-- Skriver ut datan -->
  <div v-if="cartItemData" >
    <h2>
      {{cartItemData.name}}
    </h2>

    <p>
      {{cartItemData.description}}
    </p>

    <p>
      PRICE: {{cartItemData.price}}
    </p>
  </div>



</div>
</template>

<script>
export default {
  props: [

    // Tar emot datan från MenuList
    'menuItemData',
    'cartItemData'
  ]
}
</script>

<style>

</style>