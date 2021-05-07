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

        lien.addEventListener("click",function(){
            let tab=[];
            // Boucle parcour des images des photographes
            for(let j=0; j<data.media.length; j++){
                if (data.media[j].photographerId==data.photographers[i].id) {
                    
                    if ( data.media[j].image){
                        tab.push({
                            type:"image",
                            src: data.media[j].image
                          });
                    } else {
                        tab.push({
                            type:"video",
                            src: data.media[j].video
                        });
                    }
                }
            }
            console.log(tab);


            // Objet donnes photographe
            let photographeObjet = {
                name: data.photographers[i].name,
                id: data.photographers[i].id,
                city: data.photographers[i].city,
                country: data.photographers[i].country,
                tags: data.photographers[i].tags,
                tagline: data.photographers[i].tagline,
                portrait: data.photographers[i].portrait,

                media:tab
            }

            //...........Envoie dans le local storage (deuxieme page)...................//
            localStorage.setItem("photographe",JSON.stringify(photographeObjet));
            //let test= JSON.parse(localStorage.getItem("photographe"));
        }
        )}


    
    
})



