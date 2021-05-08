
let photographeData= JSON.parse(localStorage.getItem("photographe"));
//console.log(test);
const photographeProfil = document.getElementById("photographerProfil");

//Creation figure
const creaFigure = document.createElement("figure");
photographeProfil.appendChild(creaFigure);

//Création div profil
const creaDivProfil = document.createElement("div");
creaFigure.appendChild(creaDivProfil);

//Création id pour div
const attribute = document.createAttribute('id')
attribute.value = "profilPhotographe"
creaDivProfil.setAttributeNode(attribute);

    // Importation nom
    const namePhotographe=document.createElement("h2");
    attribution(creaDivProfil,namePhotographe,photographeData.name);

    //Récupération et intégration dans le DOM de la ville
    const villePhotographe = document.createElement("h4");
    attribution(creaDivProfil,villePhotographe,photographeData.city+", ");

    //Récupération et intégration dans le DOM du pays
    const paysPhotographe = document.createElement("h4");
    attribution(creaDivProfil,paysPhotographe,photographeData.country);

    //Récupération et intégration dans le DOM du slogan
    const sloganPhotographe = document.createElement("p");
    attribution(creaDivProfil,sloganPhotographe,photographeData.tagline);

    //Récupération et intégration dans le DOM des tags un par un
    const divTags = document.createElement("div");
    creaDivProfil.appendChild(divTags);

    for (let j=0; j<photographeData.tags.length; j++) {
        const tage = document.createElement("h3");
        attribution(divTags,tage,"#"+photographeData.tags[j]);
    }

    //Lien + img
    const lien = document.createElement("a")
    creaDivProfil.appendChild(lien)
    lien.href="photographer-page.html?"+photographeData.id;

    const image = document.createElement("img");
    lien.appendChild(image)
    image.src="Sample Photos/Photographers ID Photos/"+photographeData.portrait;
    //Création id pour img du profile
    const attributeProfilImage = document.createAttribute('id')
    attributeProfilImage.value = "imageProfile"
    image.setAttributeNode(attributeProfilImage);



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
    

