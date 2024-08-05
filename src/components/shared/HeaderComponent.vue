<template>
  <h1>
    Guillaume Requena
    <span>Développeur Web</span>
  </h1>
  <!-- TODO flex container centre d'interet -->
  <div class="flex-container">
    <SymbolComponent
      v-for="symbol in symbols"
      :key="symbol.alt"
      :symbol="symbol"
    />
  </div>
</template>

<script>
import SymbolComponent from "./SymbolComponent.vue";

export default {
  components: { SymbolComponent },
  setup() {
    const symbols = [
      { alt: "HTML", title: "HTML", image: "html.png" },
      { alt: "CSS", title: "CSS", image: "css.png" },
      { alt: "Sass", title: "Sass", image: "sass.png" },
      { alt: "PHP", title: "PHP", image: "php.png" },
      { alt: "MySQL", title: "MySQL", image: "mysql.jpg" },
      { alt: "Gitbash", title: "Gitbash", image: "gitbash.png" },
      { alt: "VS Code", title: "VS Code", image: "vscode.png" },
      { alt: "Wamp", title: "Wamp", image: "wamp.png" },
      { alt: "Symfony", title: "Symfony", image: "sym.png" },
      { alt: "Sonata", title: "Sonata", image: "sonata.png" },
      { alt: "Python", title: "Python", image: "python.png" },
      { alt: "Linux", title: "Linux", image: "linux.png" },
      { alt: "Windows", title: "Windows", image: "windows.png" },
      { alt: "Postman", title: "Postman", image: "postman.png" },
      { alt: "React", title: "React", image: "react.png" },
      { alt: "JavaScript", title: "JavaScript", image: "javascript.png" },
      // Mettre un p pour apiplatform
      { alt: "ApiPlatform", title: "ApiPlatform", image: "apiplatform.png" },
      { alt: "Bootstrap", title: "Bootstrap", image: "bootstrap.png" },
    ];

    return { symbols };
  },
};
</script>

<style scoped>
h1 {
  color: #fff;
  font-size: 4rem;
  text-align: center;
  width: 90%;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h1 span {
  font-size: 3rem;
  display: block;
  padding-top: 1rem;
}

/* TODO this class is duplicated in centre d'interets */
.flex-container {
  padding: 1rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  position: absolute;
  bottom: 3rem;
}

@media screen and (max-width: 843px) {
  h1 {
    font-size: 3rem;
  }
  h1 span,
  h1 span:nth-of-type(2) {
    font-size: 2rem;
  }

  div img {
    width: 70px;
  }
  div:nth-of-type(5) {
    width: 70px;
  }
}

@media screen and (max-width: 570px) {
  .flex-container {
    bottom: 1rem;
  }
}

@media screen and (max-width: 489) {
  h1 {
    top: 20%;
  }
}

@media screen and (max-width: 430px) {
  header {
    overflow: hidden;
  }

  header div {
    flex-flow: row wrap;
    bottom: 2%;
  }
}

@media screen and (max-width: 404px) {
  h1 {
    top: 45%;
    z-index: 2;
  }
  .flex-container {
    opacity: 0.33;
  }
}
</style>
