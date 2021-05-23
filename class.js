const photographe = document.getElementById("photographe");

    class CartePhotographeFactory {
        constructor(name,id,city,country,tags,tagline,portrait){
            this.name=name;
            this.id=id;
            this.city=city;
            this.country=country;
            this.tags=tags;
            this.tagline=tagline;
            this.portrait=portrait;
        }  

        html(){
            const creaFigure = document.createElement("figure");
            photographe.appendChild(creaFigure);

            //Lien + img
            const lien = document.createElement("a")
            creaFigure.appendChild(lien)
            lien.href="photographer-page.html?"+this.id;
            lien.id=this.id;

            
            const image = document.createElement("img");
            lien.appendChild(image)
            image.src="Sample Photos/Photographers ID Photos/"+this.portrait;

            //Création id pour img du profile
            const attributeProfilImage = document.createAttribute('id')
            attributeProfilImage.value = "imageProfile"
            image.setAttributeNode(attributeProfilImage);

            //Récupération et intégration dans le DOM du nom & prénom
            const nom = document.createElement("h2");
            attribution(creaFigure,nom,this.name);
            
            //Récupération et intégration dans le DOM de la ville
            const ville = document.createElement("h4");
            attribution(creaFigure,ville,this.city+", ");

            //Récupération et intégration dans le DOM du pays
            const pays = document.createElement("h4");
            attribution(creaFigure,pays,this.country);


            //Récupération et intégration dans le DOM du slogan
            const slogan = document.createElement("p");
            attribution(creaFigure,slogan,this.tagline);


            //Récupération et intégration dans le DOM  du prix
            const prix = document.createElement("h5");
            attribution(creaFigure,prix,this.price+"€/jour");


            //Récupération et intégration dans le DOM des tags un par un
            const divTags = document.createElement("div");
            creaFigure.appendChild(divTags);

            for (let j=0; j<this.tags.length; j++) {
                const tage = document.createElement("h3");
                attribution(divTags,tage,"#"+this.tags[j]);
            }
        }
        
    }

    class ImageFactory {
        constructor(id, fileName, photographerId, likes) {
            this.id=id;
            this.fileName=fileName;
            this.photographerId=photographerId;
            this.likes=likes;
        }
    }

    class VideoFactory {
        constructor(id, fileName, photographerId, likes) {
            this.id=id;
            this.fileName=fileName;
            this.photographerId=photographerId;
            this.likes=likes;
        }
    }