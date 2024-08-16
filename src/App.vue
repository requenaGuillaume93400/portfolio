<template>
  <header>
    <HeaderComponent />
  </header>

  <main>
    <!-- TODO tri (back, front, framework) voir une recherche a mettre en place -->
    <ExercicesComponent />

    <TrainingComponent />

    <HobbiesComponent />

    <MoreComponent />
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import HeaderComponent from "./components/shared/HeaderComponent";
import FooterComponent from "./components/shared/FooterComponent";
import HobbiesComponent from "./components/HobbiesComponent";
import TrainingComponent from "./components/TrainingComponent";
import MoreComponent from "./components/MoreComponent";
import ExercicesComponent from "./components/ExercicesComponent";
import { onMounted, onBeforeUnmount } from "vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    HobbiesComponent,
    TrainingComponent,
    MoreComponent,
    ExercicesComponent,
  },
  setup() {
    const handleScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const titles = document.querySelectorAll("h2");
      const articles = document.querySelectorAll("article");
      const images = document.querySelectorAll(".container a img");
      let progress = (Math.ceil(window.scrollY) * 100) / scrollable;
      let timer = 0;
      let startTimer;

      const showTitle = (progressPercentage, number) => {
        if (
          progress >= progressPercentage &&
          !titles[number].classList.contains("show-right")
        ) {
          titles[number].classList.add("show-right");
        }
      };

      const showArticle = (progressPercentage, number) => {
        if (
          progress >= progressPercentage &&
          !articles[number].classList.contains("show-left")
        ) {
          articles[number].classList.add("show-left");
        }
      };

      // First h2 & article
      showTitle(2, 0);
      showArticle(2, 0);

      showTitle(28, 1);
      showArticle(29, 1);

      showTitle(31, 2);
      showArticle(33, 2);

      showTitle(38, 3);
      showArticle(39, 3);

      const fadeImage = () => {
        progress = (Math.ceil(window.scrollY) * 100) / scrollable;

        progress < 44 ? (startTimer = 4000) : (startTimer = 2000);

        setTimeout(function () {
          images.forEach(function (image) {
            timer += 800;

            setTimeout(function () {
              image.classList.add("fade");
            }, timer);
          });
        }, startTimer);
      };

      fadeImage();
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  },
};
</script>
