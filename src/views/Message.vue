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
      <div class="language-text">
        {{ $t("text") }}
      </div>
    </div>
  </div>
</template>

<script>
import { languages } from "@/constants/language.js";

export default {
  data() {
    return {
      languages: [],
      dateType: "ko-KR",
    };
  },

  created() {
    this.languages = languages;
  },

  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language.type;
      this.dateType = language.dateType;
    },
  },
};
</script>

<style>
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
  margin-bottom: 1.5rem;
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
