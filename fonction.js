function attribution (parent,enfant,data){
        parent.appendChild(enfant);
                enfant.textContent=data;
        }

function diapo(data,i,photographeData){
    console.log(data);
        let diaporama = document.getElementById("diapo");
               let prev=document.getElementById("prev");
               let next=document.getElementById("next");
               diaporama.style.display = "block";

               // Recuperation des images
               let imgDiaporama=document.getElementById("imgDiapo");
               imgDiaporama.src="Sample Photos/"+photographeData+"/"+data[i].src;
               imgDiaporama.setAttribute("alt",data[i].description);

               let diapoDesc=document.getElementById("diapoDesc");
               diapoDesc.textContent=data[i].description;
               console.log(data[i].description);

               


                // button next et prev
                let x=i;
                next.addEventListener("click",function(){
                    if(x<data.length){
                        x=x+1
                        let vidDiaporama=document.getElementById("vidDiapo");
                        if (data[x].type=="image"){
                            console.log("ok");
                            imgDiaporama.style.display="inline";
                            vidDiaporama.style.display="none";
                            imgDiaporama.src="Sample Photos/"+photographeData+"/"+data[x].src;
                            diapoDesc.textContent=data[x].description;
                          
                            vidDiaporama.src="";
                        } else {
                            let vidDiaporama=document.getElementById("vidDiapo");
                            vidDiaporama.src="Sample Photos/"+photographeData+"/"+data[x].src;
                            diapoDesc.textContent=data[x].description;
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
                    if(x>0){
                        x=x-1
                        let vidDiaporama=document.getElementById("vidDiapo");
                        if (data[x].type=="image"){
                            imgDiaporama.style.display="inline";
                            vidDiaporama.style.display="none";
                            imgDiaporama.src="Sample Photos/"+photographeData+"/"+data[x].src;
                            diapoDesc.textContent=data[x].description;
                        } else {
                            vidDiaporama.style.display="block";
                            imgDiaporama.style.display="none";
                            vidDiaporama.src="Sample Photos/"+photographeData+"/"+data[x].src;
                            diapoDesc.textContent=data[x].description;
                            vidDiaporama.type="video/mp4";
                            vidDiaporama.controls="true";
                            vidDiaporama.autoplay="true";
                        }
                    }
                    console.log("blalaa"+x);
                })

               


                // Racourci CLAVIER
               window.addEventListener("keydown", function(event) {
                if (event.key== "ArrowRight" || event.key== "Right" ){ 

                        if(x<data.length){
                            x=x+1
                            let vidDiaporama=document.getElementById("vidDiapo");
                            if (data[x].type=="image"){
                                console.log("ok");
                                imgDiaporama.style.display="inline";
                                vidDiaporama.style.display="none";
                                imgDiaporama.src="Sample Photos/"+photographeData+"/"+data[x].src;
                                diapoDesc.textContent=data[x].description;
                              
                                vidDiaporama.src="";
                            } else {
                                let vidDiaporama=document.getElementById("vidDiapo");
                                vidDiaporama.src="Sample Photos/"+photographeData+"/"+data[x].src;
                                diapoDesc.textContent=data[x].description;
                                imgDiaporama.src="";
                                vidDiaporama.style.display="block";
                                imgDiaporama.style.display="none";
                                vidDiaporama.type="video/mp4";
                                vidDiaporama.controls="true";
                                vidDiaporama.autoplay="true";
                            }
                            
                            }
                        
                } else if (event.key== "ArrowLeft" || event.key== "Left"){
                    
                        if(x>0){
                            x=x-1
                            let vidDiaporama=document.getElementById("vidDiapo");
                            if (data[x].type=="image"){
                                imgDiaporama.style.display="inline";
                                vidDiaporama.style.display="none";
                                imgDiaporama.src="Sample Photos/"+photographeData+"/"+data[x].src;
                                diapoDesc.textContent=data[x].description;
                            } else {
                                vidDiaporama.style.display="block";
                                imgDiaporama.style.display="none";
                                vidDiaporama.src="Sample Photos/"+photographeData+"/"+data[x].src;
                                diapoDesc.textContent=data[x].description;
                                vidDiaporama.type="video/mp4";
                                vidDiaporama.controls="true";
                                vidDiaporama.autoplay="true";
                            }
                        }
                
                }

            }) 
}
    
    