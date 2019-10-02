<template>
  <div id="actionpages">
    <div class="container">
      <div class="pagesopen--btn" @click="hideInputPages = !hideInputPages">
        <font-awesome-icon icon="images" class="btn-icon" />
      </div>

      <div class="pagesinput--box">
        <input
          v-if="hideInputPages"
          type="number"
          class="pagesinput--box-txt"
          name="enterpages"
          placeholder
          v-model="inSettings.limitImagesPerPages"
        />
      </div>

      <!-- send to the parent the number of images per page -->
      <div class="pagessend--btn" @click="setNumberOfImages">
        <font-awesome-icon icon="check-circle" class="btn-icon" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "actionpages",
  props: ["list"],
  data() {
    return {
      inSettings: {
        limitImagesPerPages: 30,
      },
      hideInputPages: false
    };
  },
  methods: {
    setNumberOfImages() {
      let objParam = {
        limit: this.inSettings.limitImagesPerPages,
        current: 1
      }
      if (
        this.inSettings.limitImagesPerPages > 100 ||
        this.inSettings.limitImagesPerPages < 1
      ) {
        this.$set(this.inSettings, "limitImagesPerPages", this.list.limit);
      }
      this.$emit("limit", objParam);
    }
  }
};
</script>
<style scoped>
.container {
  display: flex;
}

.pagesopen--btn {
  background-color: #eab61c;
  display: flex;
  height: 40px;
  width: 70px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  margin: auto;
}

.pagesinput--box {
  display: flex;
  background-color: #eab61c;
  height: 40px;
}

input {
  margin: auto 20px;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  width: 50px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input.pagesinput--box-txt {
  text-align: center;
}

.pagessend--btn {
  background-color: #eab61c;
  display: flex;
  height: 40px;
  width: 70px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  margin: auto;
}

.btn-icon {
  margin: auto;
}

.pagesopen--btn:hover,
.pagessend--btn:hover {
  background-color: #ffda6a;
  color: #eab61c;
}

.pagesopen--btn:active,
.pagessend--btn:active {
  background-color: #ffc107;
  color: black;
}

/*Responsive*/
@media screen and (max-width: 1147px) {
  .pagessend--btn {
    border-left: 0.5px solid white;
  }
}
</style>