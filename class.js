const photographe = document.getElementById("photographe");

class CartePhotographeFactory {
  constructor(name, id, city, country, tags, tagline, portrait, price) {
    this.name = name;
    this.id = id;
    this.city = city;
    this.country = country;
    this.tags = tags;
    this.tagline = tagline;
    this.portrait = portrait;
    this.price = price;
  }

  html() {
    const creaFigure = document.createElement("figure");
    creaFigure.setAttribute("class", "classFigure");

    photographe.appendChild(creaFigure);

    // Div img
    const divImg = document.createElement("div");
    creaFigure.appendChild(divImg);
    //Lien + img
    const lien = document.createElement("a");
    divImg.appendChild(lien);
    lien.href = "photographer-page.html?" + this.id;
    lien.id = this.id;

    const image = document.createElement("img");
    lien.appendChild(image);
    image.src = "Sample Photos/Photographers ID Photos/" + this.portrait;
    image.setAttribute("alt", this.name);

    //Création id pour img du profile
    const attributeProfilImage = document.createAttribute("id");
    attributeProfilImage.value = "imageProfile";
    image.setAttributeNode(attributeProfilImage);

    //DIV pour les infos du DOM
    const divInfoDom = document.createElement("div");
    divInfoDom.setAttribute("class", "classDivInfos");
    creaFigure.appendChild(divInfoDom);

    //Récupération et intégration dans le DOM du nom & prénom
    const nom = document.createElement("h1");
    attribution(divInfoDom, nom, this.name);

    //Récupération et intégration dans le DOM de la ville
    const ville = document.createElement("h2");
    attribution(divInfoDom, ville, this.city + ", ");

    //Récupération et intégration dans le DOM du pays
    const pays = document.createElement("h2");
    attribution(divInfoDom, pays, this.country);

    //Récupération et intégration dans le DOM du slogan
    const slogan = document.createElement("p");
    attribution(divInfoDom, slogan, this.tagline);

    //Récupération et intégration dans le DOM  du prix
    const prix = document.createElement("h5");
    attribution(divInfoDom, prix, this.price + "€/jour");

    //Récupération et intégration dans le DOM des tags un par un
    const divTags = document.createElement("div");
    divTags.setAttribute("class", "classDivTags");
    divInfoDom.appendChild(divTags);

    for (let j = 0; j < this.tags.length; j++) {
      const tage = document.createElement("h3");
      attribution(divTags, tage, "#" + this.tags[j]);
    }
  }
}

class MediaFactory {
  constructor(type, src, name, div, description, likes) {
    this.type = type;
    this.src = src;
    this.name = name;
    this.div = div;
    this.likes = likes;
    this.description = description;
  }
  detecte() {
    if (this.type == "image") {
      let typeMedia = new ImageFactory(
        this.src,
        this.name,
        this.div,
        this.description,
        this.likes
      );

      return typeMedia.createMedia();
    } else {
      let typeMedia = new VideoFactory(
        this.src,
        this.name,
        this.div,
        this.description,
        this.likes
      );

      return typeMedia.createMedia();
    }
  }
}

class ImageFactory {
  constructor(src, name, parent, description, likes, id, photographerId) {
    this.id = id;
    this.src = src;
    this.name = name;
    this.parent = parent;
    this.photographerId = photographerId;
    this.description = description;
    this.likes = likes;
  }
  createMedia() {
    let divCarteImg = document.createElement("div");
    creaDiv.appendChild(divCarteImg);
    divCarteImg.id = "idCarteImg";

    let imagePhotographe = document.createElement("img");
    imagePhotographe.setAttribute("alt", this.name + " " + this.description);
    divCarteImg.appendChild(imagePhotographe);
    imagePhotographe.src = "Sample Photos/" + this.name + "/" + this.src;
    imagePhotographe.setAttribute("class", "classImgVid");
    imagePhotographe.tabIndex = 0;

    const divP = document.createElement("div");
    divCarteImg.appendChild(divP);
    divP.id = "idDivP";

    const pDescription = document.createElement("p");
    divP.appendChild(pDescription);
    pDescription.textContent = this.description;

    const divLikeCoeur = document.createElement("div");
    divP.appendChild(divLikeCoeur);
    divLikeCoeur.setAttribute("class", "classLikeCoeur");

    const pLikes = document.createElement("p");
    divLikeCoeur.appendChild(pLikes);
    pLikes.textContent = this.likes;
    pLikes.setAttribute("class", "classLikes");

    const coeurLikes = document.createElement("span");
    divLikeCoeur.appendChild(coeurLikes);
    coeurLikes.textContent = "❤";
    coeurLikes.setAttribute("class", "classCoeur");

    return imagePhotographe;
  }
}

class VideoFactory {
  constructor(src, name, parent, description, likes, id, photographerId) {
    this.id = id;
    this.src = src;
    this.name = name;
    this.parent = parent;
    this.photographerId = photographerId;
    this.description = description;
    this.likes = likes;
  }
  createMedia() {
    let divCarteVideo = document.createElement("div");
    creaDiv.appendChild(divCarteVideo);
    divCarteVideo.id = "idCarteVideo";

    let videoPhotographe = document.createElement("video");
    videoPhotographe.setAttribute("alt", this.name + " " + this.description);
    let sourcePhotographe = document.createElement("source");
    divCarteVideo.appendChild(videoPhotographe);
    videoPhotographe.appendChild(sourcePhotographe);
    videoPhotographe.setAttribute("class", "classImgVid");
    videoPhotographe.tabIndex = 0;

    sourcePhotographe.src = "Sample Photos/" + this.name + "/" + this.src;
    sourcePhotographe.type = "video/mp4";
    videoPhotographe.controls = "true";
    videoPhotographe.autoplay = "true";

    const divP = document.createElement("div");
    divCarteVideo.appendChild(divP);
    divP.id = "idDivP";

    const pDescription = document.createElement("p");
    divP.appendChild(pDescription);
    pDescription.textContent = this.description;

    const divLikeCoeur = document.createElement("div");
    divP.appendChild(divLikeCoeur);
    divLikeCoeur.setAttribute("class", "classLikeCoeur");

    const pLikes = document.createElement("p");
    divLikeCoeur.appendChild(pLikes);
    pLikes.textContent = this.likes;
    pLikes.setAttribute("class", "classLikes");

    const coeurLikes = document.createElement("span");
    divLikeCoeur.appendChild(coeurLikes);
    coeurLikes.textContent = "❤";
    coeurLikes.setAttribute("class", "classCoeur");

    return videoPhotographe, sourcePhotographe;
  }
}
