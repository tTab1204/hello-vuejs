<template>
  <div class="main-container">
    <button @click="applyLTR">LTR 적용</button>
    <button @click="applyRTL">RTL 적용</button>
    <div class="list-wrapper">
      <ul class="bullet-list">
        <li>bullet-test1</li>
        <li>bullet-test2</li>
      </ul>
      <ol class="number-list">
        <li>number-test1</li>
        <li>number-test2</li>
      </ol>
      <div class="rtlcss-example">
        <div>div-list-item1</div>
        <div>div-list-item2</div>
      </div>
      <div class="rtlcss-example">
        <img :src="chaHospital" alt="cha_hospital" />
        <div>차병원</div>
      </div>
      <div class="rtlcss-example">
        <div>{{ $d(new Date(), "time", "ko-KR") }}</div>
        <div>{{ $d(new Date(), "date", "ko-KR") }}</div>
      </div>
      <div class="rtlcss-example">
        <div>{{ $d(new Date(), "time", "ko-KR") }}</div>
        <div>{{ $d(new Date(), "date", "ko-KR") }}</div>
      </div>
    </div>
    <div class="rtlcss-example set-direction">
      <button>test 1</button>
      <button>test 2</button>
    </div>
    <div class="rtlcss-example set-direction">
      <span class="number-box">1</span>
      <span class="number-box">2</span>
      <span class="number-box">3</span>
      <span class="number-box">4</span>
      <span class="number-box">5</span>
    </div>
    <div class="rtlcss-example set-direction">
      <input type="text" value="1" />
      <input type="text" value="2" />
    </div>
    <div class="set-direction">
      <table>
        <thead>
          <tr>
            <th>test row 1</th>
            <th>test row 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>test td 1</td>
            <td>test td 2</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="set-direction">
      <textarea />
    </div>
  </div>
</template>

<script>
import cha_hospital from "@/assets/images/1.png";

export default {
  data() {
    return {
      chaHospital: cha_hospital,
    };
  },

  methods: {
    applyLTR() {
      const link = document.querySelector("link.ar");
      link.parentNode.removeChild(link);

      document.querySelectorAll("link[rel=stylesheet]").forEach((node) => {
        const newHref = node.href.replace(".rtl.css", ".css");
        node.setAttribute("href", newHref);
      });
    },

    applyRTL() {
      let link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("class", "ar");
      link.href = "test";
      document.head.appendChild(link);

      document.querySelectorAll("link[rel=stylesheet]").forEach((node) => {
        const newHref = node.href.replace(".css", ".rtl.css");
        node.setAttribute("href", newHref);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  direction: ltr;
  padding: rem(20px);
  padding-left: rem(40px);
}

.set-direction {
  direction: ltr;
}

.number-box {
  background: $gray-03;
  padding: rem(12px);
}
</style>
