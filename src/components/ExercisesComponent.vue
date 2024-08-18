<template>
  <h2>Exercices & Réalisations</h2>
  <article>
    <div v-for="tag in tagList" :key="tag">
      <input type="checkbox" v-model="techs" :value="tag" />
      <label :for="tag">{{ tag }}</label>
    </div>
    <!-- <p v-if="techs.length !== 0">selected techs : {{ techs }}</p>
    <br /> -->
    <ExerciseComponent
      v-for="exercise in filteredExercises"
      :key="exercise.id"
      :exercise="exercise"
    />
  </article>
</template>

<script>
import { computed, ref } from "vue";
import getExercises from "../composables/getExercises";
import ExerciseComponent from "./ExerciseComponent";

export default {
  components: { ExerciseComponent },
  setup() {
    const techs = ref([]);

    const tagList = [
      "html",
      "css",
      "scss",
      "js",
      "php",
      "sql",
      "twig",
      "bootstrap",
      "symfony",
      "python",
      "react",
      "vue",
      "wordpress",
    ];

    const exercises = getExercises();

    // const filteredExercises = computed(() => {
    //   return exercises.filter((exercise) => {
    //     return techs.value.some((i) => exercise.includes(i));
    //   });
    // });

    const filteredExercises = computed(() =>
      exercises.filter((exercise) =>
        techs.value.some((i) => exercise.tags.includes(i))
      )
    );

    return {
      techs,
      tagList,
      exercises,
      filteredExercises,
    };
  },
};
</script>

<!-- <h3>HTML - CSS - JS</h3>
<div></div>

<div></div>

<div></div>

<div class="separator"></div>

<h3>HTML - SCSS - JS - PHP - SQL</h3>

<div>
  <a
    href="https://guillaumereq.sites.3wa.io/cv/fakesecurity/homepage"
    title="Cliquez pour aller sur le site"
    target="_blank"
  ></a>
</div>

<div class="separator"></div>

<h3>TWIG - BOOTSTRAP - SYMFONY</h3>

<div>
  <a
    href="https://guillaumereq.sites.3wa.io/cv/blog/public/index.php"
    title="Cliquez pour aller sur le site"
    target="_blank"
  ></a>
</div>

<div>
  <a
    href="https://guillaumereq.sites.3wa.io/cv/shop/public/index.php"
    title="Cliquez pour aller sur le site"
    target="_blank"
  ></a>
</div>

<div class="separator"></div>

<h3>Python</h3>

<div></div>

<div class="gitLinks">
  <p class="desc">Scripts</p>
  <p>
    <a href="https://github.com/requenaGuillaume93400/pdf-merger"
      >Pdf merger/splitter</a
    >
  </p>
  <p>
    <a href="https://github.com/requenaGuillaume93400/ytb"
      >YouTube video/audio (single and playlist) downloader</a
    >
  </p>
</div>

<div class="separator"></div>

<h3>React - SCSS</h3>

<div></div>

<div class="separator"></div>

<h3>Projets Openclassrooms</h3>

<div class="gitLinks heighter">
  <p>
    <a href="https://github.com/requenaGuillaume93400/todolist"
      >Upgrade php/symfony versions and add tests - Todolist (Github)</a
    >
  </p>
  <p>
    <a href="https://github.com/requenaGuillaume93400/BileMo"
      >Api Restfull - BileMo (Github)</a
    >
  </p>
  <p>
    <a href="https://github.com/requenaGuillaume93400/snowtricks"
      >Blog symfony - Snowtricks (Github)</a
    >
  </p>
  <p>
    <a href="https://github.com/requenaGuillaume93400/blogOC"
      >Blog php natif (Github)</a
    >
  </p>
  <p>
    <a
      href="https://guillaumereq.sites.3wa.io/cv/chalets-et-caviar-immobilier/"
      >Wordpress - Chalets & Caviar (Site)</a
    >
  </p>
</div> -->

<style scoped>
article {
  width: 98%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
article h3 {
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
}
article h3:nth-of-type(1) {
  margin-top: 2rem;
}
article .heighter {
  height: 340px !important;
}
/* TODO */
/* article div:not(.separator) {
  cursor: none;
  margin: 1.5rem 0;
  width: 500px;
  height: 300px;
  background-color: var(--custom-white);
  border-radius: 10px;
  overflow: hidden;
}
 article div:not(.separator):nth-of-type(1) {
  background: url("../assets/images/restau.png");
}
article div:not(.separator):nth-of-type(2) {
  background: url("../assets/images/hello.png");
}
article div:not(.separator):nth-of-type(3) {
  background: url("../assets/images/archi.png");
}
article div:not(.separator):nth-of-type(5) a,
article div:not(.separator):nth-of-type(7) a,
article div:not(.separator):nth-of-type(8) a {
  display: block;
  width: 100%;
  height: 100%;
}

article div:not(.separator):nth-of-type(5) a {
  background: url("../assets/images/fake.png");
}
article div:not(.separator):nth-of-type(7) a {
  background: url("../assets/images/blog.png");
}
article div:not(.separator):nth-of-type(8) a {
  background: url("../assets/images/shop.png");
}
article div:not(.separator):nth-of-type(10) {
  background: url("../assets/images/aw.png");
}
article div:not(.separator):nth-of-type(13) {
  background: url("../assets/images/artwork.png");
}
article div:not(.separator):nth-of-type(1),
article div:not(.separator):nth-of-type(2),
article div:not(.separator):nth-of-type(3),
article div:not(.separator):nth-of-type(5) a,
article div:not(.separator):nth-of-type(7) a,
article div:not(.separator):nth-of-type(8) a,
article div:not(.separator):nth-of-type(10),
article div:not(.separator):nth-of-type(13) {
  background-position: 0%;
}
article .gitLinks {
  cursor: initial;
  background-color: transparent !important;
  text-align: center;
}
article .gitLinks .desc {
  padding: initial;
  background-color: initial;
  margin-bottom: initial;
}
article .gitLinks p {
  background-color: var(--green-background);
  margin-bottom: 5px;
  border-radius: 0.5rem;
}
article .gitLinks p a {
  padding: 1rem;
  color: var(--custom-white);
  text-decoration: none;
  display: block;
}
article .gitLinks p:not(.desc):hover {
  border: 2px solid var(--custom-black);
  background-color: rgba(255, 255, 255, 0.85);
}
article .gitLinks p:not(.desc):hover a {
  color: var(--custom-black);
}

@media screen and (max-width: 690px) {
  article div:nth-of-type(4) {
    background: url("../assets/images/fake-mobile.png");
  }
} */
</style>
