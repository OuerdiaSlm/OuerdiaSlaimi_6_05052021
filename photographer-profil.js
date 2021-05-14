
let photographeData= JSON.parse(localStorage.getItem("photographe"));
console.log(photographeData);
const photographeProfil = document.getElementById("photographerProfil");

let carte1= new CartePhotographe(photographeData[0].name,photographeData[0].id,photographeData[0].city,photographeData[0].country,photographeData[0].tags,photographeData[0].tagline,photographeData[0].portrait )
        console.log(carte1);
carte1.html();
        

//creation div
const creaDiv = document.createElement("div");
photographeProfil.appendChild(creaDiv);

    //Récuperation de toutes les images
    for (let i =1; i<photographeData.length; i++){
        console.log(photographeData[i]); 
        if (photographeData[i].type == "image"){
            console.log(photographeData[i].type);
            let imagePhotographe = document.createElement("img");
            creaDiv.appendChild(imagePhotographe);
            imagePhotographe.src="Sample Photos/"+photographeData[0].name+"/"+photographeData[i].src;
        } else {
            let videoPhotographe = document.createElement("video");
            let sourcePhotographe = document.createElement("source");
            creaDiv.appendChild(videoPhotographe);
            videoPhotographe.appendChild(sourcePhotographe);
            sourcePhotographe.src="Sample Photos/"+photographeData[0].name+"/"+photographeData[i].src;
            sourcePhotographe.type="video/mp4";
            videoPhotographe.controls="true";
            videoPhotographe.autoplay="true";
        }

    }
    
    
    

