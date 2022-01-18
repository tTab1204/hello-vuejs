<template>
  <div id="app">
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
    <div class="text">
      {{ $t("text") }}
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
}

.button-wrapper {
  display: flex;
}
</style>
