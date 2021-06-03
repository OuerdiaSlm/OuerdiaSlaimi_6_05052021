function attribution (parent,enfant,data){
        parent.appendChild(enfant);
                enfant.textContent=data;
        }

function diapo(){
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
}
    
    