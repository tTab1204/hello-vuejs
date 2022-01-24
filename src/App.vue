<template>
  <div id="app">
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
        <div class="dateWrapper">
          <DateTime :type="'date'" :dateType="dateType" />
          <DateTime :type="'time'" :dateType="dateType" />
          <DateTime :type="'dateTime'" :dateType="dateType" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { languages } from "@/constants";
import DateTime from "@/components/DateTime.vue";

export default {
  components: { DateTime },

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
