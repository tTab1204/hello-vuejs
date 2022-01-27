<template>
  <div>
    <div v-if="checkSaudiArabic(dateType)" class="date-text">
      <strong>{{ type }}: </strong>
      <span dir="rtl">{{ $d(new Date(), type, dateType) }} </span>
    </div>
    <div v-else class="date-text">
      <strong>{{ type }}: </strong> {{ $d(new Date(), type, dateType) }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["type", "dateType"],
  methods: {
    checkSaudiArabic(dateType) {
      return dateType === "ar-SA";
    },
  },
};
</script>

<style>
.date-text {
  font-size: 1rem;
}
</style>
