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
