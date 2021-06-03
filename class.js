const photographe = document.getElementById("photographe");

    class CartePhotographeFactory {
        constructor(name,id,city,country,tags,tagline,portrait, price){
            this.name=name;
            this.id=id;
            this.city=city;
            this.country=country;
            this.tags=tags;
            this.tagline=tagline;
            this.portrait=portrait;
            this.price=price;
        }  

        html(){
            const creaFigure = document.createElement("figure");
            photographe.appendChild(creaFigure);

            // Div img

            const divImg= document.createElement("div")
            creaFigure.appendChild(divImg)
            //Lien + img
            const lien = document.createElement("a")
            divImg.appendChild(lien)
            lien.href="photographer-page.html?"+this.id;
            lien.id=this.id;

            
            const image = document.createElement("img");
            lien.appendChild(image)
            image.src="Sample Photos/Photographers ID Photos/"+this.portrait;

            //Création id pour img du profile
            const attributeProfilImage = document.createAttribute('id')
            attributeProfilImage.value = "imageProfile"
            image.setAttributeNode(attributeProfilImage);

            //DIV pour les infos du DOM
            const divInfoDom = document.createElement("div")
            creaFigure.appendChild(divInfoDom)

            //Récupération et intégration dans le DOM du nom & prénom
            const nom = document.createElement("h2");
            attribution(divInfoDom,nom,this.name);
            
            //Récupération et intégration dans le DOM de la ville
            const ville = document.createElement("h4");
            attribution(divInfoDom,ville,this.city+", ");

            //Récupération et intégration dans le DOM du pays
            const pays = document.createElement("h4");
            attribution(divInfoDom,pays,this.country);


            //Récupération et intégration dans le DOM du slogan
            const slogan = document.createElement("p");
            attribution(divInfoDom,slogan,this.tagline);


            //Récupération et intégration dans le DOM  du prix
            const prix = document.createElement("h5");
            attribution(divInfoDom,prix,this.price+"€/jour");


            //Récupération et intégration dans le DOM des tags un par un
            const divTags = document.createElement("div");
            divInfoDom.appendChild(divTags);

            for (let j=0; j<this.tags.length; j++) {
                const tage = document.createElement("h3");
                attribution(divTags,tage,"#"+this.tags[j]);
            }
        }
        
    } 

    class MediaFactory {
        constructor(type, src, name, div){
            this.type=type;
            this.src=src;
            this.name=name;
            this.div=div;
        }
            detecte(){
                if (this.type=="image") {
                    console.log(this.name);
                    let typeMedia= new ImageFactory(this.src, this.name, this.div);
                    
                     return typeMedia.createMedia();
                } else {
                    console.log(this.type+"ceci est une vidéo");
                    let typeMedia= new VideoFactory(this.src, this.name, this.div);
                    
                     return typeMedia.createMedia();
                }
            }

            
    }

    class ImageFactory {
        constructor(src, name, parent, id, photographerId, likes) {
            this.id=id;
            this.src=src;
            this.name=name;
            this.parent=parent;
            this.photographerId=photographerId;
            this.likes=likes;
        }
        createMedia() {
            let imagePhotographe = document.createElement("img");
            creaDiv.appendChild(imagePhotographe);
            imagePhotographe.src="Sample Photos/"+this.name+"/"+this.src;
            return imagePhotographe;
        }
    }

    class VideoFactory {
        constructor(src, name, parent, id, photographerId, likes) {
            this.id=id;
            this.src=src;
            this.name=name;
            this.parent=parent;
            this.photographerId=photographerId;
            this.likes=likes;
        }
        createMedia() {
            
            let videoPhotographe = document.createElement("video"); 
            let sourcePhotographe = document.createElement("source");
            creaDiv.appendChild(videoPhotographe);
            videoPhotographe.appendChild(sourcePhotographe);

            sourcePhotographe.src="Sample Photos/"+this.name+"/"+this.src;
            sourcePhotographe.type="video/mp4";
            videoPhotographe.controls="true";
            videoPhotographe.autoplay="true";

            return videoPhotographe, sourcePhotographe;
            
        }
    }