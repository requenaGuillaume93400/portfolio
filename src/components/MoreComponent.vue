<template>
  <h2>Plus</h2>
  <article>
    <p>Anglais B2</p>

    <p>Permis B</p>

    <div class="separator"></div>

    <p>Notions</p>

    <div>
      <p>jQuery</p>

      <p>Bootstrap</p>

      <p>REGEX</p>

      <p>Url rewriting</p>
    </div>

    <div class="separator"></div>

    <p>
      Curriculum Vitae
      <a
        href="assets/pdf/cv.pdf"
        target="_blank"
        title="Téléchargez mon CV"
        class="cv"
      >
        Téléchargez mon CV
      </a>
    </p>

    <div class="separator"></div>

    <p class="codewarsp">
      S'exerce en algorythmie sur Codewars
      <a
        href="https://www.codewars.com/users/guillaumeRequena"
        target="_blank"
        title="Visitez mon profil Codewars"
        ><img
          class="codewars"
          src="/images/codewars.png"
          alt="Logo Codewars"
          loading="lazy"
        />
      </a>
    </p>

    <div class="separator"></div>

    <p>Ce que mes anciens collaborateurs disent de moi :</p>
    <ul>
      <li>
        <a href="./assets/pdf/dir.pdf" target="_blank" title="Consultez le PDF"
          ><span>Supérieur</span> Directeur des opérations</a
        >
      </li>
      <li>
        <a href="./assets/pdf/cds.pdf" target="_blank" title="Consultez le PDF"
          ><span>Supérieur</span> Chef de site</a
        >
      </li>
      <li>
        <a href="./assets/pdf/cdp.pdf" target="_blank" title="Consultez le PDF"
          ><span>Collègue</span> Chef de poste</a
        >
      </li>
      <li>
        <a href="./assets/pdf/opv.pdf" target="_blank" title="Consultez le PDF"
          ><span>Subordonné</span> Opérateur video</a
        >
      </li>
    </ul>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
article {
  text-align: center;
  padding: 1rem 0;
}
article ul {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  list-style-type: none;
  text-align: center;
}
article ul li {
  width: 20%;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 2px solid transparent;
}
article ul li span {
  display: block;
  padding: 0.3rem;
  font-weight: bold;
}
/*  */
article .cv {
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
/*  */
/* Témoignages */
article ul li:nth-of-type(1),
article ul li:nth-of-type(2) {
  background-color: orange;
}
article ul li:nth-of-type(3) {
  background-color: rgb(135, 59, 126);
}
article ul li:nth-of-type(4) {
  background-color: rgb(11, 102, 195);
}
/* Témoignages */
article ul li:hover {
  border: 2px solid black;
  background-color: rgba(255, 255, 255, 0.85);
  transition: 0.6s;
  color: rgb(0, 0, 0);
}
article ul li a {
  /* display: block; */
  color: inherit;
  text-decoration: none;
}
article p:last-child a {
  display: block;
  width: 109px;
  margin: 0.3rem auto 0 auto;
}
article div:not(.separator) {
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
}
article div:not(.separator) p {
  width: 40%;
  margin-top: 0.5rem;
}

img {
  display: block;
  opacity: 1;
  z-index: 10;
  border-radius: 25%;
  overflow-clip-margin: content-box;
  overflow: clip;
}

p {
  line-height: 1.5;
}

/* TODO check if need css class realy */
.cv {
  height: 2rem;
}

.codewars {
  opacity: 1;
}

.codewarsp a {
  display: block;
  width: 5%;
  margin: 1rem auto;
  transform: translateX(-50%);
}
</style>
