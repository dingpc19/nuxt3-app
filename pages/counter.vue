<template>
  <div class="p-4">
    Counter: {{ counter }} CounterRef: {{ counterRef }}
    <div class="mt-2">
      <NButton @click="add">+</NButton>
      <NButton @click="reduce">-</NButton>
    </div>
    <Counter></Counter>
    <Counter></Counter>
  </div>
</template>

<script setup lang="ts">
const counterRef = ref(Math.round(Math.random() * 1000))
const counter = useState('counter', () => Math.round(Math.random() * 1000))
function add() {
  counter.value++
  counterRef.value++
}
function reduce() {
  counter.value--
  counterRef.value--
}
</script>
