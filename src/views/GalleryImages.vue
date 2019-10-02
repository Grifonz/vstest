<template>
  <div id="galleryimages">
    <!-- these are rows -->
    <div class="contenitor--row">
      <!-- these are columns -->
      <div v-for="image in this.images" :key="image.id" class="contenitor--card">
        <div class="card-title">
          <span>
            <h3>{{image.author}}</h3>
          </span>
          <span>
            <h3># {{image.id}}</h3>
          </span>
        </div>

        <a href="#" @click="openImage(image)">
          /*<img :src="image.download_url" width="367" height="267" alt />*/
          <img :src="`https://picsum.photos/id/${image.id}/367/267`" width="367" height="267" alt />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "galleryimages",
  props: ["images"],
  data() {
    return {};
  },
  methods: {
    //open image in a new browser tab according to the id and their own screen sizes
    openImage(imagevalue) {
      window.open(
        "https://picsum.photos/id/" +
          imagevalue.id +
          "/" +
          imagevalue.width +
          "/" +
          imagevalue.height,
        "_blank"
      );
    }
  }
};
</script>
<style>
.contenitor--row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.contenitor--card {
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}

.card-title {
  display: flex;
  justify-content: space-between;
  background-color: white;
}

h3 {
  margin: 20px;
  font-size: 20px;
  text-overflow: ellipsis;
}

/* Responsive */

/* 420px */
@media screen and (max-width: 420px) {
  .contenitor--row {
    justify-content: center;
  }
}
</style>
