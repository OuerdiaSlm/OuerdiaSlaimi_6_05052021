let photographeData= JSON.parse(localStorage.getItem("photographe"));
console.log(photographeData);
const photographeProfil = document.getElementById("photographerProfil");

let carte1= new CartePhotographeFactory(photographeData[0].name,photographeData[0].id,photographeData[0].city,photographeData[0].country,photographeData[0].tags,photographeData[0].tagline,photographeData[0].portrait, photographeData[0].price)
        console.log(photographeData);
carte1.html();


//Création du id
let imageP2= document.querySelector("figure > div");
imageP2.id="imageProfile2"

let secondChild=document.querySelector("figure  div:nth-child(2)");
let parentImg=document.querySelector("figure > div").parentNode;
let recupFigure=document.getElementsByTagName("figure")

parentImg.id="figureImgP2";
console.log(parentImg.childNodes[1]);
let divInfosP2=parentImg.childNodes[1];
divInfosP2.id="idInfosP2";
//const classFigure=document.createAttribute("class");
//classFigure.value="sa veut ps bn dm1 va te reposer <3"
//console.log(secondChild);

const buttonContact= document.createElement("div");
parentImg.insertBefore(buttonContact, secondChild);
buttonContact.id="modal-btn";
buttonContact.class="modal-btn";
buttonContact.textContent="Contactez-moi" 


        
// Fermeture de la modal
let close= document.getElementById("close");
close.addEventListener("click", function(){
    let diaporama = document.getElementById("diapo");
    diaporama.style.display = "none"; 
})

let prev=document.getElementById("prev");
let next=document.getElementById("next");





//creation div
const creaDiv = document.createElement("div");
photographeProfil.appendChild(creaDiv);

    //Récuperation de toutes les images
    for (let i =1; i<photographeData.length; i++){
        //console.log(photographeData[i]); 
       
        let mediaUse=  new MediaFactory( photographeData[i].type, photographeData[i].src, photographeData[0].name, creaDiv).detecte();
        
//.....................................DIAPO........................................//

            // click image pour faire apparaitre le diapo
            mediaUse.addEventListener("click",function(){
               let diaporama = document.getElementById("diapo");
               diaporama.style.display = "block";

               // Recuperation des images
               let imgDiaporama=document.getElementById("imgDiapo");
               imgDiaporama.src="Sample Photos/"+photographeData[0].name+"/"+photographeData[i].src;


                // button next et prev
                let x=i;
                next.addEventListener("click",function(){
                    if(x<photographeData.length-1){
                        x=x+1
                        let vidDiaporama=document.getElementById("vidDiapo");
                        if (photographeData[x].type=="image"){
                            console.log("ok");
                            imgDiaporama.style.display="inline";
                            vidDiaporama.style.display="none";
                            imgDiaporama.src="Sample Photos/"+photographeData[0].name+"/"+photographeData[x].src;
                          
                            vidDiaporama.src="";
                        } else {
                            let vidDiaporama=document.getElementById("vidDiapo");
                            vidDiaporama.src="Sample Photos/"+photographeData[0].name+"/"+photographeData[x].src;
                            imgDiaporama.src="";
                            vidDiaporama.style.display="block";
                            imgDiaporama.style.display="none";
                            vidDiaporama.type="video/mp4";
                            vidDiaporama.controls="true";
                            vidDiaporama.autoplay="true";
                        }
                        
                        }
                })
               
                prev.addEventListener("click",function(){
                    if(x>1){
                        x=x-1
                        let vidDiaporama=document.getElementById("vidDiapo");
                        if (photographeData[x].type=="image"){
                            imgDiaporama.style.display="inline";
                            vidDiaporama.style.display="none";
                            imgDiaporama.src="Sample Photos/"+photographeData[0].name+"/"+photographeData[x].src;
                        } else {
                            vidDiaporama.style.display="block";
                            imgDiaporama.style.display="none";
                            vidDiaporama.src="Sample Photos/"+photographeData[0].name+"/"+photographeData[x].src;
                            vidDiaporama.type="video/mp4";
                            vidDiaporama.controls="true";
                            vidDiaporama.autoplay="true";
                        }
                    }
                })

                // Racourci CLAVIER
               window.addEventListener("keydown", function(event) {
                if (event.key== "ArrowRight" || event.key== "Right" ){ 

                        if(x<photographeData.length-1){
                            x=x+1
                            let vidDiaporama=document.getElementById("vidDiapo");
                            if (photographeData[x].type=="image"){
                                console.log("ok");
                                imgDiaporama.style.display="inline";
                                vidDiaporama.style.display="none";
                                imgDiaporama.src="Sample Photos/"+photographeData[0].name+"/"+photographeData[x].src;
                              
                                vidDiaporama.src="";
                            } else {
                                let vidDiaporama=document.getElementById("vidDiapo");
                                vidDiaporama.src="Sample Photos/"+photographeData[0].name+"/"+photographeData[x].src;
                                imgDiaporama.src="";
                                vidDiaporama.style.display="block";
                                imgDiaporama.style.display="none";
                                vidDiaporama.type="video/mp4";
                                vidDiaporama.controls="true";
                                vidDiaporama.autoplay="true";
                            }
                            
                            }
                        
                } else if (event.key== "ArrowLeft" || event.key== "Left"){
                    
                        if(x>1){
                            x=x-1
                            let vidDiaporama=document.getElementById("vidDiapo");
                            if (photographeData[x].type=="image"){
                                imgDiaporama.style.display="inline";
                                vidDiaporama.style.display="none";
                                imgDiaporama.src="Sample Photos/"+photographeData[0].name+"/"+photographeData[x].src;
                            } else {
                                vidDiaporama.style.display="block";
                                imgDiaporama.style.display="none";
                                vidDiaporama.src="Sample Photos/"+photographeData[0].name+"/"+photographeData[x].src;
                                vidDiaporama.type="video/mp4";
                                vidDiaporama.controls="true";
                                vidDiaporama.autoplay="true";
                            }
                        }
                
                }

            }) 

            
              

            })
        
    
    
    
    }

    const formName=document.getElementById("formName");
    formName.textContent=photographeData[0].name;
