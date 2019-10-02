<template>
  <div id="actionnavigation">
    <div class="container">
      <div class="btn-left" @click="prevPage">
        <font-awesome-icon icon="chevron-left" class="btn-icon" />
      </div>

      <div class="btn-mid" @click="backOnFirtsPage">
        <font-awesome-icon icon="home" class="btn-icon" />
      </div>

      <div class="btn-right" @click="nextPage">
        <font-awesome-icon icon="chevron-right" class="btn-icon" />
      </div>
    </div>
    <div id="container--page">
      <label class="title">
        <span>Page</span>
        <span>{{npag}}</span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "actionnavigation",
  props: ["npag"],
  data() {
    return {};
  },
  methods: {
    backOnFirtsPage() {
      this.$emit("backfirst", "first");
    },
    prevPage() {
      this.$emit("goprev", "prev");
    },
    nextPage() {
      this.$emit("gonext", "next");
    }
  }
};
</script>
<style scoped>
#actionnavigation {
  display: flex;
}

.container {
  display: flex;
  margin: auto;
  background-color: #eab61c;
  height: 40px;
  border-radius: 40px;
}

.btn-icon {
  margin: auto;
}

.btn-left {
  width: 70px;
  display: flex;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
}

.btn-mid {
  width: 70px;
  display: flex;
}

.btn-right {
  width: 70px;
  display: flex;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
}

.btn-left:hover,
.btn-mid:hover,
.btn-right:hover {
  background-color: #ffda6a;
  color: #eab61c;
}

.btn-left:active,
.btn-mid:active,
.btn-right:active {
  background-color: #ffc107;
  color: black;
}

#container--page {
  display: flex;
  width: 100px;
}

label.title {
  margin: auto;
  color: black;
}

span {
  margin: 5px;
}

/*Responsive*/
@media screen and (max-width: 1147px) {
  .navbar {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
  
  #container--page {
    display: none;
  }
}
</style>