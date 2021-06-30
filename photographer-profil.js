let photographeData= JSON.parse(localStorage.getItem("photographe"));
let infoPhotographe= JSON.parse(localStorage.getItem("infoPhotographe"));
console.log(photographeData);
const photographeProfil = document.getElementById("photographerProfil");

let carte1= new CartePhotographeFactory(infoPhotographe[0].name,infoPhotographe[0].id,infoPhotographe[0].city,infoPhotographe[0].country,infoPhotographe[0].tags,infoPhotographe[0].tagline,infoPhotographe[0].portrait, infoPhotographe[0].price)
        console.log(carte1);
carte1.html();

//Création du id
let imageP2= document.querySelector("figure > div");
imageP2.id="imageProfile2"

let secondChild=document.querySelector("figure  div:nth-child(1)");
let parentImg=document.querySelector("figure > div").parentNode;
let recupFigure=document.getElementsByTagName("figure")

parentImg.id="figureImgP2";
console.log(parentImg.childNodes[1]);
let divInfosP2=parentImg.childNodes[1];
divInfosP2.id="idInfosP2";

const buttonContact= document.createElement("div");
parentImg.insertBefore(buttonContact, secondChild);
buttonContact.tabIndex=0;
buttonContact.id="modal-btn";
buttonContact.class="modal-btn";
buttonContact.textContent="Contactez-moi" 

// Fermeture de la modal............................
let close= document.getElementById("close");
close.addEventListener("click", function(){
    let diaporama = document.getElementById("diapo");
    diaporama.style.display = "none"; 
})
//...................................................

// RACOURCI CLAVIER ESCAPE DIAPO...........................
window.addEventListener("keydown", function(eventEscape){
    if (eventEscape.key=="Escape") {
        // Fermeture de la modal
        let close= document.getElementById("close");
            let diaporama = document.getElementById("diapo");
            diaporama.style.display = "none"; 
    }
})
//....................................................

//creation div
const creaDiv = document.createElement("div");
photographeProfil.appendChild(creaDiv);
creaDiv.id="idCreaDiv";

    //Récuperation de toutes les images
    for (let i =0; i<photographeData.length; i++){
        
        let mediaUse=  new MediaFactory( photographeData[i].type, photographeData[i].src, infoPhotographe[0].name, creaDiv, photographeData[i].description, photographeData[i].likes).detecte();
        //console.log(photographeData[i].description+"DDDEESSSSSS")
        console.log(mediaUse)
//.....................................DIAPO........................................//
        mediaUse.addEventListener("click", function() {
            diapo(photographeData,i,infoPhotographe[0].name);
        }) 
    }
    //....................MENU TRIER PAR...................

    let selectMenu = document.getElementById("menuDeroulant");

    //onchange= detecte les changement(sa remplace le click)
    selectMenu.onchange = (event) => {
    let inputText = event.target.value; //target il cible

    //.........................................................................................
    if (inputText==="Popularité"){
        let containImages=document.getElementById("idCreaDiv");
        containImages.innerHTML="";
        let tabAfficheHtml=[];
        let tabTri=[];
        for (let h =0; h<photographeData.length; h++){
            tabTri.push({like: photographeData[h].likes, description: photographeData[h].description});
        }
        // ........
        //tabTri.sort((a,b) => b-a ) trier tabTri;
        const sortByMapped = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
        const byValue = (a,b) => b - a;
        const toLike = e => e.like;
        const byLike = sortByMapped(toLike,byValue);
        tabTri.sort(byLike);
        //.......
        for (let m =0; m<photographeData.length; m++){
            for(let o=0; o<photographeData.length; o++) {
                if(tabTri[m].like ===photographeData[o].likes && photographeData[o].description === tabTri[m].description){
                    tabAfficheHtml.push(photographeData[o]);
                }
            }
        }
        for (let l=0; l<tabAfficheHtml.length; l++){
            let mediaUse2=  new MediaFactory( tabAfficheHtml[l].type, tabAfficheHtml[l].src, infoPhotographe[0].name, creaDiv, tabAfficheHtml[l].description, tabAfficheHtml[l].likes).detecte();
            mediaUse2.addEventListener("click", function() {
                diapo(tabAfficheHtml,l,infoPhotographe[0].name);
            })
        } 

        //function likeClick
        likesClick(coeur, like);
        }

        if (inputText==="Date"){
            let containImages=document.getElementById("idCreaDiv");
            containImages.innerHTML="";
            let tabAfficheHtml=[];
            let tabTri=[];
            for (let h =0; h<photographeData.length; h++){
                tabTri.push({date: new Date( photographeData[h].date), description: photographeData[h].description});
            }
            // ........
            //tabTri.sort((a,b) => b-a );
            const sortByMapped = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
            const byValue = (a,b) => b - a;
            const toDate = e => e.date;
            const byDate = sortByMapped(toDate,byValue);
            tabTri.sort(byDate);

            //.......
            for (let m =0; m<photographeData.length; m++){
                for(let o=0; o<photographeData.length; o++) {
                    if(tabTri[m].date.toString() === new Date(photographeData[o].date).toString() && photographeData[o].description === tabTri[m].description){
                            tabAfficheHtml.push(photographeData[o]);
                        }
                }
            }
            for (let l=0; l<tabAfficheHtml.length; l++){
                let mediaUse2=  new MediaFactory( tabAfficheHtml[l].type, tabAfficheHtml[l].src, infoPhotographe[0].name, creaDiv, tabAfficheHtml[l].description, tabAfficheHtml[l].likes).detecte();
                mediaUse2.addEventListener("click", function() {
                    diapo(tabAfficheHtml,l,infoPhotographe[0].name);
                })
            } 

            //function likeClick
            likesClick(coeur, like);
            }
            if (inputText==="Titre"){
                let containImages=document.getElementById("idCreaDiv");
                containImages.innerHTML="";
                let tabAfficheHtml=[];
                let tabTri=[];
                for (let h =0; h<photographeData.length; h++){
                    tabTri.push({description: photographeData[h].description});
                }
                // ........
                tabTri.sort(function compare(a, b) {
                    if (a.description < b.description)
                    return -1;
                    if (b.description<a.description)
                    return 1;
                    return 0;
                });
                //.......
                for (let m =0; m<photographeData.length; m++){
                    for(let o=0; o<photographeData.length; o++) {
                        if( photographeData[o].description === tabTri[m].description
                            ){
                            tabAfficheHtml.push(photographeData[o]);
                        }
                    }
                }
                for (let l=0; l<tabAfficheHtml.length; l++){
                    let mediaUse2=  new MediaFactory( tabAfficheHtml[l].type, tabAfficheHtml[l].src, infoPhotographe[0].name, creaDiv, tabAfficheHtml[l].description, tabAfficheHtml[l].likes).detecte();
                    mediaUse2.addEventListener("click", function() {
                        diapo(tabAfficheHtml,l,infoPhotographe[0].name);
                    })
                } 

                //function likeClick
                likesClick(coeur, like);
                }
}

//Augmentation des likes lors du click
let coeur=document.getElementsByClassName("classCoeur");
let like=document.getElementsByClassName("classLikes");

likesClick(coeur, like);

//Somme des likes + prix
let somme=0;
for (let d=1; d<photographeData.length;d++){
    somme= somme+photographeData[d].likes;
}
console.log(somme);
document.getElementById("sommeLikes").textContent=somme + "❤" ;
document.getElementById("prix").textContent=infoPhotographe[0].price+"€/jour";

//......................................................
const formName=document.getElementById("formName");
formName.textContent=infoPhotographe[0].name;