<template>
  <div class="page-container">
    <div class="button-container">
      <div class="button-wrapper">
        <button
          class="btn btn-outline-primary"
          v-for="language in languages"
          :key="language.dateType"
          @click="changeLanguage(language)"
        >
          {{ language.name }}
        </button>
      </div>
      <p>{{ $tc("banana", 0) }}</p>
      <p>{{ $tc("banana", 1) }}</p>
      <p>{{ $tc("banana", 2) }}</p>
      <p>{{ $tc("banana", 3) }}</p>
      <p>{{ $tc("banana", 4) }}</p>
      <p>{{ $tc("banana", 5) }}</p>
      <p>{{ $tc("banana", 6) }}</p>
      <p>{{ $tc("banana", 7) }}</p>
      <p>{{ $tc("banana", 8) }}</p>
      <p>{{ $tc("banana", 9) }}</p>
      <p>{{ $tc("banana", 10) }}</p>
      <p>{{ $tc("banana", 11) }}</p>
      <p>{{ $tc("banana", 12) }}</p>
    </div>
  </div>
</template>

<script>
import { languages } from "@/constants/language.js";

export default {
  data() {
    return {
      languages: [],
      language: "ko",
      dateType: "ko-KR",
    };
  },

  computed: {
    isArabic() {
      return this.$i18n.locale === "ar";
    },
  },

  created() {
    this.languages = languages;
  },

  methods: {
    changeLanguage(value) {
      this.$i18n.locale = value.language;
    },
  },
};
</script>

<style scoped lang="scss">
html,
body,
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Pretendard";
}

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--bs-blue);
  border-radius: 8px;
  padding: 1rem;
}

.button-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.btn {
  width: 100px;
  margin-right: 0.8rem;
}

.language-text {
  font-size: 1rem;
  margin-top: 1.5rem;
}
</style>
