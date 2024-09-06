<template>
  <div v-if="exercise.class !== 'gitLinks'">
    <div class="test" :class="exercise.class"></div>
    <p>
      <span class="tag" v-for="tag in exercise.tags" :key="tag">
        #{{ tag }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["exercise"],
};
</script>

<style scoped>
div > p {
  margin-bottom: 1rem;
}

.tag {
  background-color: var(--orange-background);
  padding: 0.3rem 0.5rem;
  border-radius: 1rem;
  margin-right: 0.3rem;
}

/* TODO sauf si .test contient un .gitLinks */
/* div  */
.test {
  cursor: pointer;
  margin: 1.5rem 0;
  width: 500px;
  height: 300px;
  background-color: var(--custom-white);
  border-radius: 10px;
  overflow: hidden;
  /*  */
  background-position: 0%;
}
.restau {
  background: url("../assets/images/restau.png");
}
.hello {
  background: url("../assets/images/hello.png");
}
.archi {
  background: url("../assets/images/archi.png");
}

/* article div:not(.separator):nth-of-type(5) a,
article div:not(.separator):nth-of-type(7) a,
article div:not(.separator):nth-of-type(8) a {
  display: block;
  width: 100%;
  height: 100%;
} */

.fake {
  background: url("../assets/images/fake.png");
}
.blog {
  background: url("../assets/images/blog.png");
}
.shop {
  background: url("../assets/images/shop.png");
}
.aw {
  background: url("../assets/images/aw.png");
}
.artwork {
  background: url("../assets/images/artwork.png");
}

/* article div:not(.separator):nth-of-type(1),
article div:not(.separator):nth-of-type(2),
article div:not(.separator):nth-of-type(3),
article div:not(.separator):nth-of-type(5) a,
article div:not(.separator):nth-of-type(7) a,
article div:not(.separator):nth-of-type(8) a,
article div:not(.separator):nth-of-type(10),
article div:not(.separator):nth-of-type(13) {
  background-position: 0%;
} */

/* .test {
  display: block !important;
  width: 40px !important;
  height: 40px !important;
  font-weight: 20px !important;
  background-color: white !important;
  color: red !important;
} */

@media screen and (max-width: 690px) {
  .fake {
    background: url("../assets/images/fake-mobile.png");
  }
}
</style>
