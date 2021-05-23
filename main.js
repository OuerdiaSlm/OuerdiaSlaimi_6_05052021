// const { create } = require("eslint/lib/rules/*");

fetch ("JsonFile.json").then(response=>response.json())
.then(data=>{
    


    //Boucle: création de toutes les cartes photographe.
    for (let i=0; i<data.photographers.length; i++){

        let carte= new CartePhotographeFactory(data.photographers[i].name,data.photographers[i].id,data.photographers[i].city,data.photographers[i].country,data.photographers[i].tags,data.photographers[i].tagline,data.photographers[i].portrait )
        carte.html();

        console.log(data.photographers[i].name);

        //Récuperation des liens de toutes les images
        let lien=document.getElementById(data.photographers[i].id);

        //console.log(lien);
        lien.addEventListener("click",function(){
            let tab=[];
            tab.push(carte);
            console.log(tab);
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

            //...........Envoie dans le local storage (deuxieme page)...................//
            localStorage.setItem("photographe",JSON.stringify(tab));
        }
        )
    }


    
    
})



