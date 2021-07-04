let photographeData = JSON.parse(localStorage.getItem("photographe"));
let infoPhotographe = JSON.parse(localStorage.getItem("infoPhotographe"));
console.log(photographeData);
const photographeProfil = document.getElementById("photographerProfil");

let carte1 = new CartePhotographeFactory(
  infoPhotographe[0].name,
  infoPhotographe[0].id,
  infoPhotographe[0].city,
  infoPhotographe[0].country,
  infoPhotographe[0].tags,
  infoPhotographe[0].tagline,
  infoPhotographe[0].portrait,
  infoPhotographe[0].price
);
carte1.html();

//Création du id
let imageP2 = document.querySelector("figure > div");
imageP2.id = "imageProfile2";

let secondChild = document.querySelector("figure  div:nth-child(1)");
let parentImg = document.querySelector("figure > div").parentNode;
let recupFigure = document.getElementsByTagName("figure");

parentImg.id = "figureImgP2";
console.log(parentImg.childNodes[1]);
let divInfosP2 = parentImg.childNodes[1];
divInfosP2.id = "idInfosP2";

//Div qui contient le button concactez-moi
const buttonContact = document.createElement("div");
parentImg.insertBefore(buttonContact, secondChild);
buttonContact.tabIndex = 0;
buttonContact.id = "modal-btn";
buttonContact.class = "modal-btn";
buttonContact.textContent = "Contactez-moi";

// Fermeture de la modal............................
let close = document.getElementById("close");
close.addEventListener("click", function () {
  //Function qui fait réapparaître le conteneur des likes et prix
  containLikesPrix();

  //Disparition du diapo
  let diaporama = document.getElementById("diapo");
  diaporama.style.display = "none";
});
//....

// RACOURCI CLAVIER ESCAPE DIAPO...........................
window.addEventListener("keydown", function (eventEscape) {
  if (eventEscape.key == "Escape") {
    // Fermeture de la modal
    let close = document.getElementById("close");
    let diaporama = document.getElementById("diapo");
    diaporama.style.display = "none";
    containLikesPrix();
  }
});
//....

//creation de div ou mettre toutes les images du photographe avec leurs description et likes 
const creaDiv = document.createElement("div");
photographeProfil.appendChild(creaDiv);
creaDiv.id = "idCreaDiv";

//Récuperation de toutes les images
for (let i = 0; i < photographeData.length; i++) {
  let mediaUse = new MediaFactory(
    photographeData[i].type,
    photographeData[i].src,
    infoPhotographe[0].name,
    creaDiv,
    photographeData[i].description,
    photographeData[i].likes
  ).detecte();

  console.log(mediaUse);
  //...........................DIAPO........................
  mediaUse.addEventListener("click", function () {
    document.getElementById("LikesPrix").style.opacity = "0";

    diapo(photographeData, i, infoPhotographe[0].name);
  });
}
//....................MENU TRIER PAR...................

let selectMenu = document.getElementById("menuDeroulant");


selectMenu.onchange = (event) => {
  let inputText = event.target.value; 

  //Tri par Popularité (Likes)
  if (inputText === "Popularité") {
    let containImages = document.getElementById("idCreaDiv");
    containImages.innerHTML = "";
    let tabAfficheHtml = [];
    let tabTri = [];
    
    for (let h = 0; h < photographeData.length; h++) {
      tabTri.push({
        like: photographeData[h].likes,
        description: photographeData[h].description,
      });
    }
    // Condition deu tri des images par nombre de likes
    const sortByMapped = (map, compareFn) => (a, b) =>compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toLike = (e) => e.like;
    const byLike = sortByMapped(toLike, byValue);
    tabTri.sort(byLike);
    
    //si tablike et photographedata.like et leur description sont equivalent on rempli le tableau d'affichage avec les données de photographe data trié
    for (let m = 0; m < photographeData.length; m++) {
      for (let o = 0; o < photographeData.length; o++) {
        if (
          tabTri[m].like === photographeData[o].likes &&
          photographeData[o].description === tabTri[m].description
        ) {
          tabAfficheHtml.push(photographeData[o]);
        }
      }
    }
    //Affiche tableau trié (les cartes image trié)
    afficheTab(tabAfficheHtml,creaDiv,infoPhotographe);

    //function likeClick
    likesClick(coeur, like);
  }

  //Tri par date (date)
  if (inputText === "Date") {
    let containImages = document.getElementById("idCreaDiv");
    containImages.innerHTML = "";
    let tabAfficheHtml = [];
    let tabTri = [];

    for (let h = 0; h < photographeData.length; h++) {
      tabTri.push({
        date: new Date(photographeData[h].date),
        description: photographeData[h].description,
      });
    }
    // Condition deu tri des images par date
    const sortByMapped = (map, compareFn) => (a, b) =>compareFn(map(a), map(b));
    const byValue = (a, b) => b - a;
    const toDate = (e) => e.date;
    const byDate = sortByMapped(toDate, byValue);
    tabTri.sort(byDate);

    //si tabDate et photographedata.date et leur description sont equivalent on rempli le tableau d'affichage avec les données de photographe data trié
    for (let m = 0; m < photographeData.length; m++) {
      for (let o = 0; o < photographeData.length; o++) {
        if (
          tabTri[m].date.toString() ===
            new Date(photographeData[o].date).toString() &&
          photographeData[o].description === tabTri[m].description
        ) {
          tabAfficheHtml.push(photographeData[o]);
        }
      }
    }
    //Affiche tableau trié (les cartes image trié)
    afficheTab(tabAfficheHtml,creaDiv,infoPhotographe);

    //function likeClick
    likesClick(coeur, like);
  }

  //Tri par titre (Alphabet)
  if (inputText === "Titre") {
    let containImages = document.getElementById("idCreaDiv");
    containImages.innerHTML = "";
    let tabAfficheHtml = [];
    let tabTri = [];
    for (let h = 0; h < photographeData.length; h++) {
      tabTri.push({ description: photographeData[h].description });
    }
    // Condition deu tri des images par ordre alphabetique
    tabTri.sort(function compare(a, b) {
      if (a.description < b.description) return -1;
      if (b.description < a.description) return 1;
      return 0;
    });

    //si tabTri.Description et photographedata.description sont equivalent on rempli le tableau d'affichage avec les données de photographe data trié
    for (let m = 0; m < photographeData.length; m++) {
      for (let o = 0; o < photographeData.length; o++) {
        if (photographeData[o].description === tabTri[m].description) {
          tabAfficheHtml.push(photographeData[o]);
        }
      }
    }
    //Affiche tableau trié (les cartes image trié)
    afficheTab(tabAfficheHtml,creaDiv,infoPhotographe)

    //function likeClick
    likesClick(coeur, like);
  }
};

//Augmentation des likes lors du click
let coeur = document.getElementsByClassName("classCoeur");
let like = document.getElementsByClassName("classLikes");

likesClick(coeur, like);

//Somme des likes + prix
let somme = 0;
for (let d = 1; d < photographeData.length; d++) {
  somme = somme + photographeData[d].likes;
}
console.log(somme);
document.getElementById("sommeLikes").textContent = somme + "❤";
document.getElementById("prix").textContent =
  infoPhotographe[0].price + "€/jour";

//......................................................
const formName = document.getElementById("formName");
formName.textContent = infoPhotographe[0].name;
