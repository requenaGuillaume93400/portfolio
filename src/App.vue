<template>
  <!-- 0) DONE Header Component -->
  <header>
    <HeaderComponent />
  </header>

  <!-- <main> -->

  <!-- TODO -> A REFLECHIR ->  pour les components de 1 à 4, les placer dans une div pour les apparitions de coté -->

  <!-- 1) Exercices / Réalisations Component -->
  <!-- Le plus difficile car du tri (back, front, framework) voir une recherche a mettre en place -->

  <!-- 2) Formation Component -->

  <!-- 3) Block centre d'interets (meme chose que technologies utilisées niveau css ?) -->

  <!-- 4) Plus Component -->

  <!-- 5) Modal Component -->

  <!-- </main> -->

  <!-- 6) Footer Component -->
  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import HeaderComponent from "./components/shared/HeaderComponent";
import FooterComponent from "./components/shared/FooterComponent";

export default {
  name: "App",
  components: { HeaderComponent, FooterComponent },
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
  background-color: rgb(255, 250, 250);
}

header {
  width: 100%;
  height: 100vh;
  /* Gros probleme de style avec le retrait de l'image de fond et le fond blanc .... */
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
}

footer {
  margin-top: 2rem;
}
</style>
