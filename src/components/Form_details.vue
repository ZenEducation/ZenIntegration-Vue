<template>
    <div class="table_container">
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Message</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.message }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchTodo } from '../api/todo';

const data = ref([]);

const fetchData = async () => {
    const response = await fetchTodo();
    data.value = response;
    console.log('fetched data', response);
};

onMounted(() => {
    fetchData();
});
</script>

<style scoped>
td {
  border: 1px solid rgb(234, 229, 229);
  padding: 15px;
  width: 200px;
}

thead {
  /* border: 1px solid rgb(245, 243, 243); */
  /* padding: 10px; */
  width: 180px;
  background-color: #383d43;
}

.table_container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>