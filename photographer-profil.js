let photographeData= JSON.parse(localStorage.getItem("photographe"));
console.log(photographeData);
const photographeProfil = document.getElementById("photographerProfil");

let carte1= new CartePhotographeFactory(photographeData[0].name,photographeData[0].id,photographeData[0].city,photographeData[0].country,photographeData[0].tags,photographeData[0].tagline,photographeData[0].portrait, photographeData[0].price)
        console.log(photographeData[1]);
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
    for (let i =1; i<photographeData.length; i++){
        //console.log(photographeData[i]); 
       
        let mediaUse=  new MediaFactory( photographeData[i].type, photographeData[i].src, photographeData[0].name, creaDiv, photographeData[i].description, photographeData[i].likes).detecte();
        //console.log(photographeData[i].description+"DDDEESSSSSS")
        console.log(mediaUse)
//.....................................DIAPO........................................//

            mediaUse.addEventListener("click", function() {
                diapo(photographeData,i,photographeData[0].name);
            
            })
            
    }
    //....................MENU TRIER PAR...................

    let selectMenu = document.getElementById("menuDeroulant");

    //onchange= detecte les changement(sa remplace le click)
    selectMenu.onchange = (event) => {
    let inputText = event.target.value; //target il cible
    console.log(inputText);
    //.........................................................................................
    if (inputText==="Popularité"){

        let containImages=document.getElementById("idCreaDiv");
        containImages.innerHTML="";


        let tabX=[];
        let tabTest=[];
        for (let h =1; h<photographeData.length; h++){
            tabTest.push({like: photographeData[h].likes, description: photographeData[h].description});
            
        }
        // ........
        //tabTest.sort((a,b) => b-a ) trier tabTest;
        const sortByMapped = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
        const byValue = (a,b) => b - a;
        const toLike = e => e.like;
        const byLike = sortByMapped(toLike,byValue);

        tabTest.sort(byLike);
        //.......
        console.log(tabTest);
        for (let m =0; m<photographeData.length-1; m++){
            for(let o=1; o<photographeData.length; o++) {
                console.log(tabTest[m]);
                if(tabTest[m].like ===photographeData[o].likes && photographeData[o].description === tabTest[m].description
                    ){
                        console.log("okkkkkk");
                        
                    tabX.push(photographeData[o]);
                }
            }
        }
        console.log(tabX);
        for (let l=0; l<tabX.length; l++){
            let mediaUse2=  new MediaFactory( tabX[l].type, tabX[l].src, photographeData[0].name, creaDiv, tabX[l].description, tabX[l].likes).detecte();
            console.log(l);
            mediaUse2.addEventListener("click", function() {
                diapo(tabX,l,photographeData[0].name);
            })
        } 
        
        console.log(tabX);
        console.log(tabTest);
        }

        if (inputText==="Date"){

            let containImages=document.getElementById("idCreaDiv");
            containImages.innerHTML="";
    
    
            let tabX=[];
            let tabTest=[];
            for (let h =1; h<photographeData.length; h++){
                tabTest.push({date: new Date( photographeData[h].date), description: photographeData[h].description});
                console.log(photographeData[h].date);
            }
            // ........
            //tabTest.sort((a,b) => b-a );
            const sortByMapped = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
            const byValue = (a,b) => b - a;
            const toDate = e => e.date;
            const byDate = sortByMapped(toDate,byValue);

            tabTest.sort(byDate);
    

            
            //.......
            console.log(tabTest);
            for (let m =0; m<photographeData.length-1; m++){
                for(let o=1; o<photographeData.length; o++) {
                    let datePhoto = new Date(photographeData[o].date);
                    console.log(tabTest[m].date);
                    console.log(datePhoto);
                    if(tabTest[m].date.toString() === datePhoto.toString() && photographeData[o].description === tabTest[m].description
                        ){
                            console.log("okkkkkk");
                            
                        tabX.push(photographeData[o]);
                    }
                }
            }
            console.log(tabX);
            for (let l=0; l<tabX.length; l++){
                let mediaUse2=  new MediaFactory( tabX[l].type, tabX[l].src, photographeData[0].name, creaDiv, tabX[l].description, tabX[l].likes).detecte();
                console.log(l);
                mediaUse2.addEventListener("click", function() {
                    diapo(tabX,l,photographeData[0].name);
                })
            } 
            
            console.log(tabX);
            console.log(tabTest);
            }

            if (inputText==="Titre"){

                let containImages=document.getElementById("idCreaDiv");
                containImages.innerHTML="";
        
        
                let tabX=[];
                let tabTest=[];
                for (let h =1; h<photographeData.length; h++){
                    tabTest.push({description: photographeData[h].description});
                    console.log(photographeData[h].description);
                }
                // ........
                
    
                tabTest.sort(function compare(a, b) {
                    if (a.description < b.description)
                    return -1;
                    if (b.description<a.description)
                    return 1;
                    return 0;
                });

                console.log(tabTest);
        
    
                
                //.......
                for (let m =0; m<photographeData.length-1; m++){
                    for(let o=1; o<photographeData.length; o++) {
                       
                        console.log(tabTest[m].description);
                        if( photographeData[o].description === tabTest[m].description
                            ){
                                console.log("okkkkkk");
                                
                            tabX.push(photographeData[o]);
                        }
                    }
                }
                console.log(tabX);
                for (let l=0; l<tabX.length; l++){
                    let mediaUse2=  new MediaFactory( tabX[l].type, tabX[l].src, photographeData[0].name, creaDiv, tabX[l].description, tabX[l].likes).detecte();
                    console.log(l);
                    mediaUse2.addEventListener("click", function() {
                        diapo(tabX,l,photographeData[0].name);
                    })
                } 
                
                console.log(tabX);
                console.log(tabTest);
                }
            

    
}



let somme=0;
for (let d=1; d<photographeData.length;d++){
    
    
somme= somme+photographeData[d].likes;

}
console.log(somme);
document.getElementById("sommeLikes").textContent=somme + "♥" ;
document.getElementById("prix").textContent=photographeData[0].price+"€/jour";
//......................................................
    
    

    const formName=document.getElementById("formName");
    formName.textContent=photographeData[0].name;