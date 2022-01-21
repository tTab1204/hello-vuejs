<template>
  <div class="date-text">
    <strong>{{ type }}:</strong> {{ $d(new Date(), length, dateType) }}
  </div>
</template>

<script>
export default {
  props: ["type", "dateType", "length"],
};
</script>

<style>
.date-text {
  font-size: 1.2rem;
}
</style>
