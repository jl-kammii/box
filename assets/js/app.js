const playlist = document.getElementById("playlist");

const lecteur = document.querySelector("#lecteur");


const config = {
    urlCover : "upload/cover/",
    urlSound : "upload/music/",
}

const dbMusic = [
    {
        id : 1,
        cover:  "oui_oui.jpg",
        sound: "OUI_OUI_FRANCAIS.mp3",
        title : "Oui Oui",
        category : "dessin animé",
    },
    {
        id : 2,
        cover : "code_lyoko.jpg",
        sound :"code_lyoko.mp3",
        title : "Code Lyoko",
        category : "animé",
    },
    {
        id : 3,
        cover :  "tchoupi.jpg",
        sound : "Tchoupi.mp3",
        title : "Tchoupi",
        category : "dessin animé",
    }
]


dbMusic.forEach((music) => { playlist.innerHTML += 
`<li id=${music.id}><h2>${music.title}</h2><img src='${config.urlCover}${music.cover}'><div><small>${music.category}</small></div></li>`
});

const allLi = document.querySelectorAll("li");
allLi.forEach((li)=>{
    li.addEventListener("click", function(elem){
        const id = parseInt (li.id);
        const searchById = dbMusic.find((element) => element.id === id);
        console.log(searchById);
        alert(`Veux tu écouter le titre : ${searchById.title}`);
        lecteur.src = `${config.urlSound}${searchById.sound}`;
        lecteur.play();
    });
})



/*
<li id="music1"> 
            <h2> Title </h2>
            <img src="...">
            <div><small>Category</small></div>    
        </li>
        */
