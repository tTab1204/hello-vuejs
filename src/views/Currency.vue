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
      <p class="currency-text">{{ $n(3000, "currency", locale) }}</p>
    </div>
  </div>
</template>

<script>
import languesForCurrency from "@/constants/languagesForCurrency.js";

export default {
  data() {
    return {
      languages: [],
      language: "en",
      locale: "en-US",
    };
  },

  created() {
    this.languages = languesForCurrency;
  },

  methods: {
    changeLanguage(value) {
      this.$i18n.locale = value.locale;
      this.locale = value.locale;
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
  padding: 0.375rem 0.375rem;
}

.currency-text {
  margin-top: 10px;
}
</style>
