<template>
  <h2>Expérience</h2>
  <article>
    <div class="container">
      <a href="https://www.pensermieux.com/" target="_blank">
        <img
          src="/images/pme-2.png"
          alt="Logo Penser mieux l'energie"
          loading="lazy"
        />
      </a>
      <div>
        <p>Développeur PHP</p>
        <p>Penser mieux l'energie</p>
        <ul>
          <li>Automatisation d'un processus de contrôle documentaire</li>
          <li>
            Développement de la partie front end d'une application Salesforce
          </li>
          <li>Découverte du framework CodeIgniter</li>
        </ul>
        <p>Août 2024 - Décembre 2024</p>
      </div>
    </div>

    <div class="separator"></div>

    <div class="container">
      <a href="https://ecotree.green/" target="_blank">
        <img src="/images/ecotree.png" alt="Logo EcoTree" loading="lazy" />
      </a>
      <div>
        <p>Chargé de développement PHP</p>
        <p>EcoTree (alternance)</p>
        <ul>
          <li>ApiPlatform</li>
          <li>Graphql</li>
          <li>Sonata</li>
          <li>
            Recherche de solutions techniques pour répondre à un besoin
            spécifique
          </li>
          <li>Mise en place de test unitaires et fonctionnels</li>
          <li>Test Driven Development</li>
          <li>
            Maintenance (refactorisation, mise à jour de librairies mineurs et
            majeures, résolution de bugs ...)
          </li>
          <li>Code legacy</li>
        </ul>
        <p>
          2022 - 2024
          <span class="reco">
            <a href="./pdf/cto.pdf" target="_blank" title="Consultez le PDF">
              Lettre de recommandation
            </a>
          </span>
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped>
article {
  padding: 1.2rem 0 1rem 0;
}
article .container .internship {
  width: 100px;
  margin-left: 0;
}
article .container {
  width: 95%;
  margin: 0 auto;
  display: flex;
}
article .container:not(:nth-of-type(1)) {
  margin-top: 0.6rem;
}
article .container div {
  margin-left: 4rem;
}
article .container div p:first-child {
  font-weight: bold;
}
article .container ul {
  margin-left: 2rem;
  list-style-type: "- ";
}
img {
  opacity: 0;
}
.reco {
  float: right;
  background-color: orange;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.reco a {
  color: #fff;
  text-decoration: none;
}
.reco a:hover {
  color: rgba(0, 0, 0, 0.693);
}

@media screen and (max-width: 430px) {
  article a {
    display: none;
  }
  .container .internship {
    display: none;
  }
}
</style>
