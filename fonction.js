function attribution(parent, enfant, data) {
  parent.appendChild(enfant);
  enfant.textContent = data;
}
// function diapoConditions
function diapoConditions(photographeData,data,imgDiaporama,vidDiaporama,diapoDesc,x) {
  if (data[x].type == "image") {
    console.log("ok");
    imgDiaporama.style.display = "inline";
    vidDiaporama.style.display = "none";
    imgDiaporama.src = "Sample Photos/" + photographeData + "/" + data[x].src;
    diapoDesc.textContent = data[x].description;

    //vidDiaporama.src="";
  } else {
    vidDiaporama.src = "Sample Photos/" + photographeData + "/" + data[x].src;
    diapoDesc.textContent = data[x].description;
    //imgDiaporama.src="";
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
  console.log(data[i].description);

  // button next et prev
  let x = i;
  next.addEventListener("click", function () {
    if (x < data.length) {
      x = x + 1;
      diapoConditions(photographeData,data,imgDiaporama,vidDiaporama,diapoDesc,x);
    }
  });

  prev.addEventListener("click", function () {
    if (x > 0) {
      x = x - 1;
      diapoConditions(photographeData,data,imgDiaporama,vidDiaporama,diapoDesc,x
      );
    }
  });

  // Racourci CLAVIER
  window.addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight" || event.key == "Right") {
      if (x < data.length) {
        x = x + 1;
        diapoConditions(photographeData,data,imgDiaporama,vidDiaporama,diapoDesc,x);
      }
    } else if (event.key == "ArrowLeft" || event.key == "Left") {
      if (x > 0) {
        x = x - 1;
        diapoConditions(photographeData,data,imgDiaporama,vidDiaporama,diapoDesc,x);
      }
    }
  });
}

// function likeClick
function likesClick(coeur, like){
  for(j=0;j<coeur.length;j++){
      let x=j;
      let b=0;
      console.log(like.length);
      coeur[j].addEventListener("click",function(){
          console.log(b)
          if (b===0){ 
              like[x].textContent=parseInt(like[x].textContent)+1;
              b=1;
      
              }
              else if (b===1){ 
              like[x].textContent=parseInt(like[x].textContent)-1;
              b=0;
              }
          })
      }
}