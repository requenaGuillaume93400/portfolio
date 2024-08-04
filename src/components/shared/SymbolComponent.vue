<template>
  <figure>
    <img :src="source" :alt="alt" loading="lazy" />
    <figcaption>{{ symbol.title }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: ["symbol"],
  setup(props) {
    const source = "./images/" + props.symbol.image;
    const alt = "Logo de " + props.symbol.alt;

    return { source, alt };
  },
};
</script>

<style scoped>
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
