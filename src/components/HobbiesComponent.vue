<template>
  <h2>Centres d'intêrets</h2>
  <article class="flex-container hidden-left">
    <SymbolComponent
      v-for="symbol in symbols"
      :key="symbol.alt"
      :symbol="symbol"
    />
  </article>
</template>

<script>
import SymbolComponent from "./shared/SymbolComponent.vue";

export default {
  components: { SymbolComponent },
  setup() {
    const symbols = [
      { alt: "Image d'haltères", title: "Sport", image: "sport.jpg" },
      {
        alt: "Image d'une manette de console",
        title: "Jeux video",
        image: "game.jpg",
      },
      { alt: "Image d'une batterie", title: "Musique", image: "music.jpg" },
      { alt: "Image du manga Berserk", title: "Manga", image: "manga.png" },
    ];

    return { symbols };
  },
};
</script>

<style scoped>
/* TODO css is PARTIALLY duplicated HeaderComponent */
.flex-container {
  padding: 1rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
/* TODO css is duplicated in SymbolComponent */
figure {
  margin: 0.5rem;
}
figure img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 1);
}
figcaption {
  text-align: center;
}

@media screen and (max-width: 1115px) {
  figure img {
    width: 80px;
    height: 80px;
  }
}

@media screen and (max-width: 910px) {
  figure img {
    width: 70px;
    height: 70px;
  }
  figcaption {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 597px) {
  figure img {
    width: 60px;
    height: 60px;
  }

  figcaption {
    font-size: 0.7rem;
  }
}

@media screen and (max-width: 570px) {
  figure img {
    width: 50px;
    height: 50px;
  }
}

@media screen and (max-width: 524px) {
  figure img {
    width: 43px;
    height: 43px;
  }
}

@media screen and (max-width: 489) {
  figure img {
    width: 30px;
    height: 30px;
  }
}
</style>
