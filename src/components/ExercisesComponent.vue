<template>
  <h2>Exercices & Réalisations</h2>
  <article>
    <div>
      <div v-for="tag in tagList" :key="tag" class="checkbox">
        <input type="checkbox" v-model="techs" :value="tag" />
        <label :for="tag">{{ tag }}</label>
      </div>
    </div>

    <ExerciseImageComponent
      v-for="exercise in filteredExercisesWithImages"
      :key="exercise.id"
      :exercise="exercise"
    />

    <div class="exercise-button">
      <div>
        <ExerciseButtonComponent
          v-for="exercise in filteredExercisesLinks"
          :key="exercise.id"
          :exercise="exercise"
        />
      </div>
    </div>
  </article>
</template>

<script>
import { computed, ref } from "vue";
import getExercises from "../composables/getExercises";
import ExerciseImageComponent from "./ExerciseImageComponent";
import ExerciseButtonComponent from "./ExerciseButtonComponent";

export default {
  components: { ExerciseImageComponent, ExerciseButtonComponent },
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

    const filteredExercisesWithImages = computed(() =>
      exercises.filter((exercise) =>
        techs.value.some(
          (i) => exercise.tags.includes(i) && exercise.class !== "gitLinks"
        )
      )
    );

    const filteredExercisesLinks = computed(() =>
      exercises.filter((exercise) =>
        techs.value.some(
          (i) => exercise.tags.includes(i) && exercise.class === "gitLinks"
        )
      )
    );

    return {
      techs,
      tagList,
      exercises,
      filteredExercisesWithImages,
      filteredExercisesLinks,
    };
  },
};
</script>

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
article div:nth-of-type(1) {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
.checkbox {
  padding: 10px;
}
.exercise-button {
  display: block;
  flex: 0 0 100%;
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
