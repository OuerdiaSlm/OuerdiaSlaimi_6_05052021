
let photographeData= JSON.parse(localStorage.getItem("photographe"));
console.log(photographeData);
const photographeProfil = document.getElementById("photographerProfil");

let carte1= new CartePhotographeFactory(photographeData[0].name,photographeData[0].id,photographeData[0].city,photographeData[0].country,photographeData[0].tags,photographeData[0].tagline,photographeData[0].portrait, photographeData[0].price)
        console.log(photographeData);
carte1.html();
        
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
        console.log(photographeData[i]); 
        if (photographeData[i].type == "image"){
            console.log(photographeData[i].type);
            

           //New ImageFcatory
           let creaImage= new ImageFactory(photographeData[i].src, photographeData[0].name, creaDiv);
           

            // click image pour faire apparaitre le diapo
            creaImage.createMedia().addEventListener("click",function(){
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

            })
        } else {
           //New ImageFcatory
            let creavideo= new VideoFactory(photographeData[i].src, photographeData[0].name, creaDiv).createMedia();
            
            // click video pour faire apparaitre le diapo
            creavideo.addEventListener("click",function(){
                let diaporama = document.getElementById("diapo");
                diaporama.style.display = "block";
                let vidDiaporama=document.getElementById("vidDiapo");
                vidDiaporama.src="Sample Photos/"+photographeData[0].name+"/"+photographeData[i].src;

                vidDiaporama.type="video/mp4";
                vidDiaporama.controls="true";
                vidDiaporama.autoplay="true";

                // click image pour faire apparaitre le diapo
                creaImage.createMedia().addEventListener("click",function(){
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
                     
                     if (photographeData[x].type=="image"){
                         console.log("ok");
                         imgDiaporama.style.display="inline";
                         vidDiaporama.style.display="none";
                         imgDiaporama.src="Sample Photos/"+photographeData[0].name+"/"+photographeData[x].src;
                         let vidDiaporama=document.getElementById("vidDiapo");
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
             })


            
        })


    }
    
    
    
    }
