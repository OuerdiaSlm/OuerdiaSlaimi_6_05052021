function attribution(parent, enfant, data) {
  parent.appendChild(enfant);
  enfant.textContent = data;
}
// function diapoConditions
function diapoConditions(
  photographeData,
  data,
  imgDiaporama,
  vidDiaporama,
  diapoDesc,
  x
) {
  if (data[x].type == "image") {
    imgDiaporama.style.display = "inline";
    vidDiaporama.style.display = "none";
    imgDiaporama.src = "Sample Photos/" + photographeData + "/" + data[x].src;
    diapoDesc.textContent = data[x].description;
  } else {
    vidDiaporama.src = "Sample Photos/" + photographeData + "/" + data[x].src;
    diapoDesc.textContent = data[x].description;
    vidDiaporama.style.display = "block";
    imgDiaporama.style.display = "none";
    vidDiaporama.type = "video/mp4";
    vidDiaporama.controls = "true";
    vidDiaporama.autoplay = "true";
  }
}
// function diapo
function diapo(data, i, photographeData) {
  let diaporama = document.getElementById("diapo");
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");

  diaporama.style.display = "block";

  // Recuperation des images
  let vidDiaporama = document.getElementById("vidDiapo");
  let imgDiaporama = document.getElementById("imgDiapo");
  imgDiaporama.src = "Sample Photos/" + photographeData + "/" + data[i].src;
  imgDiaporama.setAttribute("alt", data[i].description);

  let diapoDesc = document.getElementById("diapoDesc");
  diapoDesc.textContent = data[i].description;

  // button next et prev
  let x = i;
  next.addEventListener("click", function () {
    if (x < data.length) {
      x = x + 1;
      diapoConditions(
        photographeData,
        data,
        imgDiaporama,
        vidDiaporama,
        diapoDesc,
        x
      );
    }
  });

  prev.addEventListener("click", function () {
    if (x > 0) {
      x = x - 1;
      diapoConditions(
        photographeData,
        data,
        imgDiaporama,
        vidDiaporama,
        diapoDesc,
        x
      );
    }
  });

  // Racourci CLAVIER
  window.addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight" || event.key == "Right") {
      if (x < data.length) {
        x = x + 1;
        diapoConditions(
          photographeData,
          data,
          imgDiaporama,
          vidDiaporama,
          diapoDesc,
          x
        );
      }
    } else if (event.key == "ArrowLeft" || event.key == "Left") {
      if (x > 0) {
        x = x - 1;
        diapoConditions(
          photographeData,
          data,
          imgDiaporama,
          vidDiaporama,
          diapoDesc,
          x
        );
      }
    }
  });
}

// function likeClick
function likesClick(coeur, like) {
  for (j = 0; j < coeur.length; j++) {
    let x = j;
    let b = 0;
    coeur[j].addEventListener("click", function () {
      if (b === 0) {
        like[x].textContent = parseInt(like[x].textContent) + 1;
        b = 1;
      } else if (b === 1) {
        like[x].textContent = parseInt(like[x].textContent) - 1;
        b = 0;
      }
    });
  }
}

//Function qui fait réapparaître le conteneur des likes et prix
function containLikesPrix(){
  let LikesPrix = document.getElementById("LikesPrix");
  LikesPrix.style.opacity = "1";
}

// Afficher tableau trié 
function afficheTab(tabAfficheHtml,creaDiv,infoPhotographe){
  for (let l = 0; l < tabAfficheHtml.length; l++) {
    let mediaUse2 = new MediaFactory(
      tabAfficheHtml[l].type,
      tabAfficheHtml[l].src,
      infoPhotographe[0].name,
      creaDiv,
      tabAfficheHtml[l].description,
      tabAfficheHtml[l].likes
    ).detecte();
    mediaUse2.addEventListener("click", function () {
      diapo(tabAfficheHtml, l, infoPhotographe[0].name);
    });
    mediaUse2.addEventListener('keydown', function(e){
      if(e.keyCode==13){
        diapo(tabAfficheHtml, l, infoPhotographe[0].name);
      }
    })
  }
}