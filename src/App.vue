<template>
  <div id="app">
    <div class="page-container">
      <div class="button-container">
        <div class="button-wrapper">
          <!-- 버튼은 컴포넌트로 만들기 -->
          <button
            class="btn btn-outline-primary"
            v-for="language in languages"
            :key="language.type"
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
  </div>
</template>

<script>
import { languages } from "@/constants";

export default {
  data() {
    return {
      languages: [],
    };
  },

  created() {
    this.languages = languages;
  },

  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language.type;
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
}

.btn {
  width: 100px;
  margin-right: 0.8rem;
}

.language-text {
  font-size: 1.5rem;
  margin-top: 1.5rem;
}
</style>
