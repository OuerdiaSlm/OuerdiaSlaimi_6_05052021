


// Récupération du fichier JSON avec fetch
fetch("JsonFile.json")
  .then((response) => response.json())
  .then((data) => {
    //Boucle: création de toutes les cartes photographe.
    for (let i = 0; i < data.photographers.length; i++) {
      let carte = new CartePhotographeFactory(
        data.photographers[i].name,
        data.photographers[i].id,
        data.photographers[i].city,
        data.photographers[i].country,
        data.photographers[i].tags,
        data.photographers[i].tagline,
        data.photographers[i].portrait,
        data.photographers[i].price
      );
      carte.html();

      //Récuperation des liens de toutes les images
      let lien = document.getElementById(data.photographers[i].id);
      
      lien.addEventListener("click", function () {
        //tab contiendra les images
        let tab = [];
        console.log(carte);
        console.log(tab);
        // Boucle parcour des images des photographesju
        for (let j = 0; j < data.media.length; j++) {
          if (data.media[j].photographerId == data.photographers[i].id) {
            if (data.media[j].image) {
              tab.push({
                type: "image",
                src: data.media[j].image,
                description: data.media[j].description,
                likes: data.media[j].likes,
                date: data.media[j].date,
                price: data.media[j].price,
              });
            } else {
              tab.push({
                type: "video",
                src: data.media[j].video,
                description: data.media[j].description,
                likes: data.media[j].likes,
                date: data.media[j].date,
                price: data.media[j].price,
              });
            }
          }
        }

        //tabInfo contient les information du photographe
        let tabInfo = [];
        tabInfo.push(carte);

        //.........Envoie dans le local storage (deuxieme page).........
        localStorage.setItem("photographe", JSON.stringify(tab));
        localStorage.setItem("infoPhotographe", JSON.stringify(tabInfo));
      });
    }
    //FILTRES
    let filtre = document.getElementsByClassName("filtre");
    let figure = document.querySelectorAll(
      " .classFigure > .classDivInfos > div "
    );

    //Recuperation de tous les filtres
    for (let i = 0; i < filtre.length; i++) {
      filtre[i].addEventListener("click", function () {
        //Recupération des figures
        for (let j = 0; j < figure.length; j++) {
          let count = 0;
          //Recuperation des tags d'une figure "enfant de la figure"
          for (let g = 0; g < figure[j].childNodes.length; g++) {
            let filtreMin = filtre[i].textContent;
            //Min pour les filtres de la navbar
            if (
              filtreMin.toLowerCase() === figure[j].childNodes[g].textContent
            ) {
              count = count + 1;
            }
          }
          let figure2 = figure[j].parentNode.parentNode;
          if (count == 0) {
            figure2.style.display = "none";
          } else {
            figure2.style.display = "block";
          }
        }
      });
    }
  });

  let topHead=document.getElementById("top");

window.addEventListener("scroll",function(){
  if(window.scrollY>130){
    console.log("ok");
    topHead.style.display="block"
  }else{
    topHead.style.display="none"
  }
})