<template>
  <div id="actionresearch">
    <div class="container">
      <label class="title">Images</label>
      <div id="research--box-page">
        <label class="pages">
          <span>Page</span>
          <span>{{npag}}</span>
        </label>
      </div>
      <div class="research--box">
        <input
          type="text"
          class="research--box-txt"
          name="searchimg"
          placeholder="Insert the Author's name"
          v-model="inSearch.text"
        />
        <div class="research--box-btn" @click="searchImages">
          <!-- just get the name of icon without fa- -->
          <font-awesome-icon icon="search" class="btn-icon" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "actionresearch",
  props: ["npag"],
  data() {
    return {
      inSearch: {
        text: null
      }
    };
  },
  methods: {
    searchImages() {
      this.$emit("research", this.inSearch.text);
    }
  }
};
</script>
<style scoped>
.container {
  display: flex;
}

.title {
  margin: auto 20px;
  color: black;
}

.research--box {
  display: flex;
  margin: auto;
  background-color: #eab61c;
  height: 40px;
  border-radius: 40px;
}

.pages {
  margin: auto;
  color: #265a95;
}

input {
  margin: auto 20px;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
}

.research--box-btn {
  background-color: #eab61c;
  display: flex;
  color: white;
  margin: auto;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  width: 70px;
  height: 40px;
}

.btn-icon {
  margin: auto;
}

.research--box-btn:hover {
  background-color: #ffda6a;
  color: #eab61c;
}

.research--box-btn:active {
  background-color: #ffc107;
  color: black;
}

#research--box-page {
  display: none;
}

/*Responsive*/

/* 1147px */
@media screen and (max-width: 1147px) {
  .container {
    flex-direction: row-reverse;
    margin: 10px auto 5px auto;
  }

  .title {
    display: none;
  }

  .research--box {
    margin: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .research--box {
    flex-direction: row-reverse;
  }

  .research--box-btn {
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  input.research--box-txt {
    text-align: center;
    width: 500px;
  }

  #research--box-page {
    padding-left: 5px;
    width: 100px;
    display: flex;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #ffda6a;
    opacity: 0.8;
  }

  span {
    margin: 5px;
  }
}

/* 793px */
@media screen and (max-width: 793px) {
  input {
    margin: auto 0;
  }

  input.research--box-txt {
    width: 400px;
  }

  .research--box-txt {
    text-align: left;
  }
}

/* 596px */
@media screen and (max-width: 596px) {
  input {
    margin: auto 0;
  }

  input.research--box-txt {
    width: 300px;
  }

  .research--box-txt {
    text-align: left;
  }
}

/* 488px */
@media screen and (max-width: 488px) {
  input.research--box-txt {
    width: 200px;
  }
}
</style>