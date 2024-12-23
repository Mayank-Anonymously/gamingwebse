<template>
  <div class="horse-racing-list-overlay">
    <h5>All Horse Racing</h5>
    <div
      v-for="(item, index) in horseRacingList"
      :key="index"
      class="horse-racing-list-item"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HorseRacingOverlay",
  props: {
    horseRacingList: {
      type: Array,
      default: () => ["01:39 Turf Paradise (US)", "01:45 Fair Grounds (US)"],
    },
  },
};
</script>

<style scoped>
.horse-racing-list-overlay {
  position: absolute;
  top: 0;
  left: 16.7%;
  width: 33.3%;
  background: white;
  z-index: 1050;
  overflow-y: auto;
}
.horse-racing-list-item {
  border-bottom: 1px solid #ddd;
  padding: 5px;
}
</style>
