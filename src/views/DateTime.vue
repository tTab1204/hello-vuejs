<template>
  <div id="app">
    <div class="page-container">
      <div class="button-container">
        <div class="button-wrapper">
          <button
            class="btn btn-outline-primary"
            v-for="language in languages"
            :key="language.locale"
            @click="changeLanguage(language)"
          >
            {{ language.name }}
          </button>
        </div>

        <div class="dateWrapper">
          <div class="date-text">
            Date:
            <span :dir="isArabic">{{ $d(new Date(), "date", locale) }}</span>
          </div>
          <div class="date-text">
            Time:
            <span :dir="isArabic"> {{ $d(new Date(), "time", locale) }} </span>
          </div>
          <div class="date-text">
            DateTime:
            <span :dir="isArabic"
              >{{ $d(new Date(), "dateTime", locale) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { languages } from "@/constants/language.js";
import { LEFT_TO_RIGHT, RIGHT_TO_LEFT } from "@/constants";

export default {
  data() {
    return {
      languages: [],
      language: "ko",
      locale: "ko-KR",
    };
  },

  computed: {
    isArabic() {
      return this.language === "ar" ? RIGHT_TO_LEFT : LEFT_TO_RIGHT;
    },
  },

  created() {
    this.languages = languages;
  },

  methods: {
    changeLanguage(value) {
      const { language, locale } = value;
      this.language = language;
      this.locale = locale;
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
