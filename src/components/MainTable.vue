<template>
  <table class="table table-bordered">
    <thead class="table-primary">
      <tr>
        <th>Game</th>
        <th>1</th>
        <th>X</th>
        <th>2</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in tableData" :key="index">
        <td>{{ row.game }}</td>
        <td :class="row.one.class">{{ row.one.value }}</td>
        <td :class="row.x.class">{{ row.x.value }}</td>
        <td :class="row.two.class">{{ row.two.value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "MainTable",
  data() {
    return {
      tableData: [
        {
          game: "Ball by Ball",
          one: { value: "-", class: "" },
          x: { value: "-", class: "" },
          two: { value: "-", class: "" },
        },
        {
          game: "Twenty20 Big Bash",
          one: { value: "3.85", class: "blue" },
          x: { value: "5.4", class: "blue" },
          two: { value: "1.25", class: "green" },
        },
        {
          game: "Chennai Super Kings XI",
          one: { value: "-", class: "" },
          x: { value: "-", class: "" },
          two: { value: "-", class: "" },
        },
      ],
    };
  },
};
</script>

<style scoped>
.table td.green {
  background-color: #66bb6a;
}
.table td.blue {
  background-color: #b3e5fc;
  color: black;
}
</style>
