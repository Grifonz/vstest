<template>
  <div id="app">
    <div class="header">
      <label class="header--title">Images Gallery</label>
    </div>

    <ActionComp
      class="action--sticky"
      @search="showImagesListFiltered($event)"
      @setLimit="getImagesFromLimit($event)"
      @updatePage="pageChangeHandle($event)"
      :list-images="images.list"
      :list-pages="pages"
    />

    <!-- :key keyword helps to re-render the component -->
    <GalleryImages class="gallery--images" :images="images.list" :key="images.list.id" />
  </div>
</template>
<script>
import ActionComp from "./components/ActionComp.vue";
import GalleryImages from "./views/GalleryImages.vue";
import Axios from "axios";
export default {
  name: "app",
  data() {
    return {
      //object Images
      images: {
        list: [],
        listFiltered: []
      },
      //object Pages
      pages: {
        current: 1,
        limit: 30
        //count: 0
      }
    };
  },
  components: {
    ActionComp,
    GalleryImages
  },
  methods: {
    //initialize images gallery default 30 images per page
    async initImages() {
      const gallery = await Axios.get("https://picsum.photos/v2/list", {
        params: { page: this.pages.current, limit: this.pages.limit }
      });

      /* to get max num of images from server
      let newTotPages = this.setNumOfPages(
        gallery.data.length,
        this.pages.limit
      );*/

      this.$set(this.images, "list", gallery.data);
      //this.$set(this.pages, "count", newTotPages);
    },
    //get images according to the next page
    async pageChangeHandle(value) {
      const gallery = await Axios.get("https://picsum.photos/v2/list", {
        params: { page: value, limit: this.pages.limit }
      });
      this.$set(this.images, "list", gallery.data);
    },
    async getImagesFromLimit(param) {
      const newdatalimit = await Axios.get("https://picsum.photos/v2/list", {
        params: { page: this.pages.current, limit: param.limit }
      });
      this.$set(this.images, "list", newdatalimit.data);
      this.$set(this.pages, "limit", param.limit);
    },
    //set parameter of images according to the research
    showImagesListFiltered(value) {
      this.$set(this.images, "list", value);
    }
    /* set ne number of pages according to the user request
    setNumOfPages(dimension, limit) {
      return Math.ceil(dimension / limit);
    }*/
  },
  mounted() {
    try {
      this.initImages();
    } catch (err) {
      throw err;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body,
header {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: "Playball", cursive;
}

.header {
  display: flex;
  background-color: #ffc107;
  font-weight: bold;
  color: black;
  font-size: 40px;
}

.header--title {
  padding: 12px;
  margin: 50px auto;
}

.action--sticky {
  position: sticky;
  top: 0;
}

.gallery--images {
  padding: 30px;
}

/*Responsive*/
@media screen and (max-width: 1147px) {
  .header--title {
    margin: 0 auto;
  }
}
</style>
