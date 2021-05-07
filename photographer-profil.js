/* Page photographer-page
const photographeProfil = document.getElementById("photographerProfil");
    
    const creaFigure = document.createElement("figure");
    photographeProfil.appendChild(creaFigure);

    // Importation nom
    const nom = document.createElement("h2");
        creaFigure.appendChild(nom);
        nom.textContent=localStorage.getItem("nomPhotographe");

    // Importation ville
    const ville = document.createElement("h4");
        creaFigure.appendChild(ville);
        ville.textContent=localStorage.getItem("villePhotographe");

    // Importation pays
    const pays = document.createElement("h4");
        creaFigure.appendChild(pays);
        pays.textContent=localStorage.getItem("paysPhotographe");

    // Importation slogan
    const slogan = document.createElement("p");
        creaFigure.appendChild(slogan);
        slogan.textContent=localStorage.getItem("sloganPhotographe");

    // Importation image
    const portrait = document.createElement("img");
        creaFigure.appendChild(portrait);
        portrait.src="Sample Photos/Photographers ID Photos/"+localStorage.getItem("portraitPhotographe");

    //GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
    fetch("jsonFile.json").then(resultats=>resultats.json())
    .then (
        function(resultats){
           
                for(let i=0; i<resultats.media.length; i++){
                    if (resultats.media[i].photographerId==localStorage.getItem("photographerId")) {
                        const image = document.createElement("img");
                        creaFigure.appendChild(image);
                        image.src="Sample Photos/"+localStorage.getItem("nomPhotographe")+"/"+resultats.media[i].image
                    }
                }
        });
*/
let photographeData= JSON.parse(localStorage.getItem("photographe"));
//console.log(test);
const photographeProfil = document.getElementById("photographerProfil");

//Creation figure
const creaFigure = document.createElement("figure");
photographeProfil.appendChild(creaFigure);

// Importation nom
const namePhotographe=document.createElement("h2");
attribution(creaFigure,namePhotographe,photographeData.name);

//creation div
const creaDiv = document.createElement("div");
creaFigure.appendChild(creaDiv);

//Récuperation de toutes les images
for (let i =0; i<photographeData.media.length; i++){
    if (photographeData.media[i].type == "image"){
        let imagePhotographe = document.createElement("img");
        creaDiv.appendChild(imagePhotographe);
        imagePhotographe.src="Sample Photos/"+photographeData.name+"/"+photographeData.media[i].src;
    } else {
        let videoPhotographe = document.createElement("video");
        let sourcePhotographe = document.createElement("source");
        creaDiv.appendChild(videoPhotographe);
        videoPhotographe.appendChild(sourcePhotographe);
        sourcePhotographe.src="Sample Photos/"+photographeData.name+"/"+photographeData.media[i].src;
        sourcePhotographe.type="video/mp4";
        videoPhotographe.controls="true";
        videoPhotographe.autoplay="true";
    }
   

   


}
    //console.log(photographeData.media[0]);
    

