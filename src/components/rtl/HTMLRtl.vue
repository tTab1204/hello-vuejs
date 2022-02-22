<template>
  <div class="html-rtl-container">
    <h4>HTML</h4>
    <div class="button-wrapper">
      <button class="btn btn-outline-primary" @click="applyLTR">
        LTR 적용
      </button>
      <button class="btn btn-outline-primary" @click="applyRTL">
        RTL 적용
      </button>
    </div>
    <div :dir="direction" class="list-container">
      <ul class="list-group">
        <li>test 1</li>
        <li>test 2</li>
      </ul>
      <ol>
        <li>test 1</li>
        <li>test 2</li>
      </ol>
      <div class="list-template">
        <div>div-list-item1</div>
        <div>div-list-item2</div>
      </div>
      <div class="list-template">
        <img class="img-thumbnail" :src="chaHospital" alt="cha_hospital" />
        <div>차병원</div>
      </div>
      <div class="list-template">
        <div>{{ $d(new Date(), "time", "ko-KR") }}</div>
        <div>{{ $d(new Date(), "date", "ko-KR") }}</div>
      </div>
      <div class="list-template">
        <button class="btn btn-secondary">test 1</button>
        <button class="btn btn-secondary">test 2</button>
      </div>

      <div class="list-template">
        <span class="number-box">1</span>
        <span class="number-box">2</span>
        <span class="number-box">3</span>
        <span class="number-box">4</span>
        <span class="number-box">5</span>
      </div>
      <div class="list-template">
        <input class="form-control" type="text" placeholder="1" />
        <input class="form-control" type="text" placeholder="2" />
      </div>

      <div>
        <table class="table">
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

      <div>
        <textarea class="form-control">
          Hello my name is Ju Young
      </textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
import cha_hospital from "@/assets/images/1.png";
import { LEFT_TO_RIGHT, RIGHT_TO_LEFT } from "@/constants";

export default {
  props: {
    rtl: {
      type: Boolean,
    },
  },
  data() {
    return {
      chaHospital: cha_hospital,
      direction: LEFT_TO_RIGHT,
    };
  },

  methods: {
    applyLTR() {
      this.direction = LEFT_TO_RIGHT;
    },

    applyRTL() {
      this.direction = RIGHT_TO_LEFT;
    },
  },
};
</script>

<style scoped lang="scss">
.html-rtl-container {
  background: $gray-02;
}

.button-wrapper {
  display: flex;
  justify-content: center;
}

.list-container {
  padding: rem(20px);
}

.number-box {
  background: $gray-03;
  padding: rem(12px);
}
</style>
