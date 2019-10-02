<template>
  <div id="actioncomp">
    <div class="navbar">
      <!-- sub-component 1-->
      <ActionResearch
        class="navbar--research"
        @research="findImages($event)"
        :npag="listPages.current"
      />

      <div class="navbar--actions">
        <!-- sub-component 2 -->
        <ActionPages @limit="setLimitImages($event)" :list="listPages" />

        <!-- sub-component 3 -->
        <ActionNavigation
          @backfirst="pageChange($event)"
          @goprev="pageChange($event)"
          @gonext="pageChange($event)"
          :npag="listPages.current"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ActionResearch from "./ActionResearch";
import ActionPages from "./ActionPages";
import ActionNavigation from "./ActionNavigation";
export default {
  name: "actioncomp",
  props: ["listImages", "listPages"],
  components: {
    ActionResearch,
    ActionPages,
    ActionNavigation
  },
  data() {
    return {
    };
  },
  methods: {
    findImages(text) {
      let listFiltered = [];
      if (text != null) {
        listFiltered = this.listImages.filter(image => {
          return image.author.match(text);
        });
        if (listFiltered.length > 0) {
          this.$emit("search", listFiltered);
        } else {
          alert("No images found");
        }
      }
    },
    setLimitImages(obj) {
      let objParams = {};
      if (obj.limit < 1 || obj.limit > 100) {
        alert(
          "Max limit of images per pages is 100 and the Minimum limit is 1. Please change the value!"
        );
      } else {
        objParams = {
          limit: obj.limit
        };
        this.listPages.current = obj.current;
        this.$emit("setLimit", objParams);
      }
    },
    pageChange(value) {
      switch (value) {
        case "next":
          /*if (this.listPages.current < maxPages) {
              this.listPages.current += 1;
              this.$emit("next", this.listPages.current);
          }*/
          this.listPages.current += 1;
          break;
        case "prev":
          if (this.listPages.current > 1) {
            this.listPages.current -= 1;
          }
          break;
        case "first":
          this.listPages.current = 1;
          break;
        default:
          this.listPages.current = value;
      }
      this.$emit("updatePage", this.listPages.current);
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  display: flex;
  padding: 10px 10px;
  justify-content: space-between;
  overflow: hidden;
  background-color: #ffc107;
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.navbar--research,
.navbar--actions {
  display: flex;
}

/*Responsive*/
@media screen and (max-width: 1147px) {
  .navbar {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
  .navbar--actions {
    margin: 5px auto 5px auto;
  }
}
</style>