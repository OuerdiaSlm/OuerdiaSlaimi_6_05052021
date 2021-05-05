// const { create } = require("eslint/lib/rules/*");

fetch ("JsonFile.json").then(response=>response.json())
.then(data=>{
    //console.log(data.photographers[0].portrait)
    //console.log(data.media[0].likes)
    
    //nom.textContent=data.photographers[0].name
    //Page index
    const photographe = document.getElementById("photographe");
    for (let i=0; i<data.photographers.length; i++){
        const creaFigure = document.createElement("figure");
        photographe.appendChild(creaFigure);
        
        //Lien + img
        const lien = document.createElement("a")
        creaFigure.appendChild(lien)
        lien.href="photographer-page.html?"+data.photographers[i].id;
        

        const image = document.createElement("img");
        lien.appendChild(image)
        image.src="Sample Photos/Photographers ID Photos/"+data.photographers[i].portrait;

        //Récupération et intégration dans le DOM du nom & prénom
        const nom = document.createElement("h2");
        attribution(creaFigure,nom,data.photographers[i].name);
        
        //Récupération et intégration dans le DOM de la ville
        const ville = document.createElement("h4");
        attribution(creaFigure,ville,data.photographers[i].city+", ");

        //Récupération et intégration dans le DOM du pays
        const pays = document.createElement("h4");
        attribution(creaFigure,pays,data.photographers[i].country);


        //Récupération et intégration dans le DOM du slogan
        const slogan = document.createElement("p");
        attribution(creaFigure,slogan,data.photographers[i].tagline);


        //Récupération et intégration dans le DOM  du prix
        const prix = document.createElement("h5");
        attribution(creaFigure,prix,data.photographers[i].price+"€/jour");


        //Récupération et intégration dans le DOM des tags un par un
        const divTags = document.createElement("div");
        creaFigure.appendChild(divTags);

        for (let j=0; j<data.photographers[i].tags.length; j++) {
            const tage = document.createElement("h3");
            attribution(divTags,tage,"#"+data.photographers[i].tags[j]);
            
        }

        



        //...........Envoie dans le local storage (deuxieme page)...................//
    }
    
    
})


function attribution (parent,enfant,data){
    parent.appendChild(enfant);
            enfant.textContent=data;
    }
