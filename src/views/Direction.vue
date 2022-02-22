<template>
  <div class="main-container">
    <HTMLRtl />
    <CSSRtl />
    <Rtlcss />
  </div>
</template>

<script>
import HTMLRtl from "@/components/rtl/HTMLRtl.vue";
import Rtlcss from "@/components/rtl/Rtlcss.vue";
import CSSRtl from "@/components/rtl/CSSRtl.vue";

export default {
  components: { HTMLRtl, CSSRtl, Rtlcss },
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
