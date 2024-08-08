<template>
  <!-- 0) DONE Header Component -->
  <header>
    <HeaderComponent />
  </header>

  <main>
    <!-- TODO -> A REFLECHIR ->  pour les components de 1 à 4, les placer dans une div pour les apparitions de coté -->

    <!-- 1) Exercices / Réalisations Component -->
    <!-- Le plus difficile car du tri (back, front, framework) voir une recherche a mettre en place -->
    <ExercicesComponent />

    <!-- 2) Formation Component -->
    <TrainingComponent />

    <!-- 3) DONE - TODO CSS - Block centre d'interets -->
    <HobbiesComponent />

    <!-- 4) Plus Component -->
    <MoreComponent />

    <!-- 5) Modal Component -->
  </main>

  <!-- 6) Footer Component -->
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
};
</script>

<style>
/* TODO - use separate css file for @font-face and * selector 
or for every style block in components ? */
@font-face {
  font-family: "comfortaa";
  src: url("./assets/fonts/comfortaa/Comfortaa-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}
* {
  padding: 0;
  margin: 0;
  font-size: 16px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "comfortaa", "Helvetica", "Arial", "sans-serif";
  width: 100%;
  /* TODO a virer le height car le header aura un 100 vh */
  height: 100vh;
}

header {
  width: 100%;
  height: 100vh;
  /* Gros probleme de style avec le retrait de l'image de fond et le fond blanc ... */
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
}

body {
  width: 100%;
  background: url("./assets/images/binary.png") center/cover;
  background-attachment: fixed;
}

/*  */
main article {
  background-color: rgba(0, 0, 0, 0.4);
}

main h2 {
  width: 125%;
  margin: 5rem auto 0.4rem auto;
  font-size: 2.2rem;
  /* color: #fff; */
  color: #3f2222;
  background-color: aqua;
  /* TODO */
  /* text-align: center; */
  z-index: -1;
  position: relative;
}
/* */

/* MAIN */
main {
  width: 85%;
  margin: 0 auto;
  overflow: hidden;
}
main h2 {
  width: 125%;
  margin: 5rem auto 0.4rem auto;
  font-size: 2.2rem;
  color: #fff;
  text-align: center;
  z-index: -1;
  position: relative;
}
main p {
  line-height: 1.5;
}
main img {
  border-radius: 25%;
}
main .separator {
  width: 80%;
  height: 2px;
  margin: 20px auto;
  border-bottom: 2px dashed rgba(228, 228, 228, 0.897);
}
main article {
  width: 100%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.501);
  color: #fff;
  border-radius: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
main article:nth-of-type(1) {
  width: 98%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
main article:nth-of-type(1) h3 {
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
}
main article:nth-of-type(1) h3:nth-of-type(1) {
  margin-top: 2rem;
}
main article:nth-of-type(1) .heighter {
  height: 320px !important;
}
main article:nth-of-type(1) div:not(.separator) {
  cursor: none;
  margin: 1.5rem 0;
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
}
main article:nth-of-type(1) div:not(.separator):nth-of-type(1) {
  background: url("./assets/images/restau.png");
  background-position: 0%;
}
main article:nth-of-type(1) div:not(.separator):nth-of-type(2) {
  background: url("./assets/images/hello.png");
  background-position: 0%;
}
main article:nth-of-type(1) div:not(.separator):nth-of-type(3) {
  background: url("./assets/images/archi.png");
  background-position: 0%;
}
main article:nth-of-type(1) div:not(.separator):nth-of-type(5) a {
  display: block;
  width: 100%;
  height: 100%;
  background: url("./assets/images/fake.png");
  background-position: 0%;
}
main article:nth-of-type(1) div:not(.separator):nth-of-type(7) a {
  display: block;
  width: 100%;
  height: 100%;
  background: url("./assets/images/blog.png");
  background-position: 0%;
}
main article:nth-of-type(1) div:not(.separator):nth-of-type(8) a {
  display: block;
  width: 100%;
  height: 100%;
  background: url("./assets/images/shop.png");
  background-position: 0%;
}
main article:nth-of-type(1) div:not(.separator):nth-of-type(10) {
  background: url("./assets/images/test.png");
  background-position: 0%;
}
main article:nth-of-type(1) div:not(.separator):nth-of-type(13) {
  background: url("./assets/images/artwork.png");
  background-position: 0%;
}
main article:nth-of-type(1) .gitLinks {
  cursor: initial;
  background-color: transparent !important;
  text-align: center;
}
main article:nth-of-type(1) .gitLinks .desc {
  padding: initial;
  background-color: initial;
  margin-bottom: initial;
}
main article:nth-of-type(1) .gitLinks p {
  background-color: #27ab5e;
  margin-bottom: 5px;
  border-radius: 0.5rem;
}
main article:nth-of-type(1) .gitLinks p a {
  padding: 1rem;
  color: #fff;
  text-decoration: none;
  display: block;
}
main article:nth-of-type(1) .gitLinks p:not(.desc):hover {
  border: 2px solid rgb(0, 0, 0);
  background-color: rgba(255, 255, 255, 0.85);
}
main article:nth-of-type(1) .gitLinks p:not(.desc):hover a {
  color: rgb(0, 0, 0);
}
main article:nth-of-type(2) figure:nth-of-type(6) img {
  background-color: #fff;
}
/* TODO main article:nth-of-type(3) === anciennement Formation, maintenant c'est le 2 */
/* le 2 a disparu (techno, mis dans le header) */
main article:nth-of-type(4) {
  padding: 1.2rem 0 1rem 0;
}
main article:nth-of-type(4) #internship {
  width: 100px;
  margin-left: 0;
}
main article:nth-of-type(4) a {
  height: 5rem;
}
main article:nth-of-type(4) img {
  width: 100px;
  /* TODO opacity: 0; */
}
main article:nth-of-type(4) .container {
  width: 95%;
  margin: 0 auto;
  display: flex;
}
main article:nth-of-type(4) .container:not(:nth-of-type(1)) {
  margin-top: 0.6rem;
}
main article:nth-of-type(4) .container div {
  margin-left: 4rem;
}
main article:nth-of-type(4) .container div p:first-child {
  font-weight: bold;
}
main article:nth-of-type(4) .container ul {
  margin-left: 2rem;
  list-style-type: "- ";
}
main article:nth-of-type(4) .container #mention {
  width: 9rem;
  margin-left: 0;
  padding: 4px 10px;
  text-align: center;
  border: 1px solid black;
  border-radius: 2rem;
  background: rgba(197, 226, 253, 0.8);
  cursor: pointer;
}
/* main article:nth-of-type(3) .container #modal-mention,
main article:nth-of-type(4) .container #modal-mention {
  visibility: hidden;
  width: 80%;
  height: 400px;
  background: url("/images/mention.png") center/cover;
  position: absolute;
  left: 5%;
  z-index: 20;
} */
main article:nth-of-type(4) p {
  text-align: center;
}
main article.flex-container {
  padding: 1rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
main article.flex-container figure {
  margin: 0.5rem;
}
main article.flex-container figure img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0px 0px 7px 0px rgb(0, 0, 0);
}
main article.flex-container figure figcaption {
  text-align: center;
}
main article:nth-of-type(5) figure {
  margin-left: 0.5rem;
}
main article:nth-of-type(5) figure:nth-of-type(2) figcaption {
  margin-left: -5px;
}
main article:nth-of-type(6) {
  text-align: center;
  padding: 1rem 0;
}
main article:nth-of-type(6) ul {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  list-style-type: none;
  text-align: center;
}
main article:nth-of-type(6) ul li {
  width: 20%;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 2px solid transparent;
}
main article:nth-of-type(6) ul li span {
  display: block;
  padding: 0.3rem;
  font-weight: bold;
}
main article:nth-of-type(6) ul li:nth-of-type(1),
main article:nth-of-type(6) ul li:nth-of-type(2) {
  background-color: orange;
}
main article:nth-of-type(6) ul li:nth-of-type(3) {
  background-color: rgb(135, 59, 126);
}
main article:nth-of-type(6) ul li:nth-of-type(4) {
  background-color: rgb(11, 102, 195);
}
main article:nth-of-type(6) ul li:hover {
  border: 2px solid black;
  background-color: rgba(255, 255, 255, 0.85);
  transition: 0.6s;
  color: rgb(0, 0, 0);
}
main article:nth-of-type(6) ul li a {
  display: block;
  color: inherit;
  text-decoration: none;
}
main article:nth-of-type(6) p:last-child a {
  display: block;
  width: 109px;
  margin: 0.3rem auto 0 auto;
}
main article:nth-of-type(6) div:not(.separator) {
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
}
main article:nth-of-type(6) div:not(.separator) p {
  width: 40%;
  margin-top: 0.5rem;
}
main article a img:hover {
  transform: scale(1.1);
  transition: 0.3s;
}
main article .cv {
  display: block;
  width: 20%;
  margin: 0.5rem auto 0 auto;
  padding: 1.2rem 0.3rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 2px solid transparent;
  background-color: #27ab5e;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}
main article .cv:hover {
  border: 2px solid rgb(0, 0, 0);
  background-color: rgba(255, 255, 255, 0.85);
  transition: 0.6s;
  color: rgb(0, 0, 0);
}
/* TODO transform */
/* main h2 {
  transform: translateX(100%);
}
main article {
  transform: translateX(-100%);
} */
main .show-right {
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-name: switch-right;
}
main .show-left {
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-name: switch-left;
}

/* MAIN */

footer {
  margin-top: 2rem;
}

@media screen and (max-width: 843px) {
  body {
    background: url("./assets/images/binary-tablet.png");
    background-attachment: fixed;
    background-position: center;
  }
  header h1 {
    font-size: 3rem;
  }
  header h1 span,
  header h1 span:nth-of-type(2) {
    font-size: 2rem;
  }
  header div img {
    width: 70px;
  }
  header div img:nth-of-type(5) {
    width: 70px;
  }
}
@media screen and (max-width: 690px) {
  body {
    background: url("./assets/images/binary-mobile.png");
    background-attachment: fixed;
    background-position: center;
  }
  main article:nth-of-type(1) div:nth-of-type(4) {
    background: url("./assets/images/fake-mobile.png");
  }
  main article:nth-of-type(3) .container #modal-mention {
    width: 90%;
    top: 83%;
    left: 0;
    background-position: left;
    margin-left: 5%;
  }
  main article ul li {
    width: 140px;
  }
  main article .cv {
    width: 140px;
  }
}
</style>
