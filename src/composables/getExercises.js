const getExercises = () => {
  // remplacer id par title ?
  const pathToImages = "../assets/images/";

  return [
    {
      id: 1,
      // image: "../assets/images/restau.png",
      image: `${pathToImages}restau.png`,
      mobileImage: null,
      tags: ["html", "css", "js"],
      link: null,
      class: "restau",
    },
    {
      id: 2,
      // image: "../assets/images/hello.png",
      image: `${pathToImages}hello.png`,
      mobileImage: null,
      tags: ["html", "css"],
      link: null,
      class: "hello",
    },
    {
      id: 3,
      // image: "../assets/images/archi.png",
      image: `${pathToImages}archi.png`,
      mobileImage: null,
      tags: ["html", "css"],
      link: null,
      class: "archi",
    },
    {
      id: 4,
      // image: "../assets/images/fake.png",
      image: `${pathToImages}fake.png`,
      // mobileImage: "../assets/images/fake-mobile.png",
      mobileImage: `${pathToImages}fake-mobile.png`,
      tags: ["html", "scss", "js", "php", "sql"],
      link: null,
      class: "fake",
    },
    {
      id: 5,
      // image: "../assets/images/blog.png",
      image: `${pathToImages}blog.png`,
      mobileImage: null,
      tags: ["twig", "bootstrap", "symfony"],
      link: null,
      class: "blog",
    },
    {
      id: 6,
      // image: "../assets/images/shop.png",
      image: `${pathToImages}shop.png`,
      mobileImage: null,
      tags: ["twig", "bootstrap", "symfony"],
      link: null,
      class: "shop",
    },
    {
      id: 7,
      // image: "../assets/images/aw.png",
      image: `${pathToImages}aw.png`,
      mobileImage: null,
      tags: ["python"],
      link: null,
      class: "aw",
    },
    {
      id: 8,
      image: null,
      mobileImage: null,
      tags: ["python"],
      link: "https://github.com/requenaGuillaume93400/pdf-merger",
      class: "gitLinks",
    },
    {
      id: 9,
      image: null,
      mobileImage: null,
      tags: ["python"],
      link: "https://github.com/requenaGuillaume93400/ytb",
      class: "gitLinks",
    },
    {
      id: 10,
      image: "../assets/images/artwork.png",
      mobileImage: null,
      tags: ["react", "scss"],
      link: null,
      class: "artwork",
    },
    {
      // TODO test
      id: 11,
      //  Ajouter image ?
      image: null,
      mobileImage: null,
      tags: ["html", "php", "bootstrap"],
      link: "https://github.com/requenaGuillaume93400/blogOC",
      class: "gitLinks",
    },
    {
      id: 12,
      // Ajouter image ?
      image: null,
      mobileImage: null,
      tags: ["wordpress"],
      link: "https://guillaumereq.sites.3wa.io/cv/chalets-et-caviar-immobilier/",
      class: "gitLinks",
    },
    {
      id: 13,
      // Ajouter image ?
      image: null,
      mobileImage: null,
      tags: ["symfony", "twig", "bootstrap"],
      link: "https://github.com/requenaGuillaume93400/snowtricks",
      class: "gitLinks",
    },
    {
      id: 14,
      // Ajouter image ?
      image: null,
      mobileImage: null,
      tags: ["symfony", "twig", "bootstrap"],
      link: "https://github.com/requenaGuillaume93400/BileMo",
      class: "gitLinks",
    },
    {
      id: 15,
      // Ajouter image ?
      image: null,
      mobileImage: null,
      tags: ["symfony", "twig", "bootstrap"],
      link: "https://github.com/requenaGuillaume93400/todolist",
      class: "gitLinks",
    },
  ];
};

export default getExercises;
