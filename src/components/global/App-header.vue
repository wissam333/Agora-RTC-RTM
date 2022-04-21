<template>
  <div class="header">
    <ul>
      <li>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            v-model="this.search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </li>
      <li></li>
      <li></li>
      <li>
        <img src="../../assets/p1.webp" alt="" />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "pinia";
import { RTC } from "../../stores/counter";

export default {
  name: "Header",
  data: function () {
    return {
      ...mapState(RTC, ["search"]),
    };
  },
};
</script>
<style lang="scss">
.header {
  display: none;
  position: fixed;
  width: 96.5%;
  max-height: 57px;
  padding: 6px 17px;
  margin: 1% auto 1% auto;
  background-color: #283046;
  border-radius: 0.25rem;
  border: 1px solid #3b4253;
  z-index: 5;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      display: inline;
      img {
        width: 45px;
        height: 45px;
      }
    }
  }
}
</style>
