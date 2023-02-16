var bg = $("#particles-js");
$(document).on("keydown", function(event){
    // console.log(event.key);  == voir si fonctionne bien 
    $(bg).css("background-color",getRandomColor);
});
    
$(".img").on("click", function(){
    //PREMIERE ACTION
    var name = $(this).attr("name"); // on recup le nom de l'artiste qui est sur l'image
    const initiale = name.charAt(0).toUpperCase(); // récupére la premiere lettre du nom pour la mettre en majuscule
    const nameCapitalized = initiale + name.slice(1); // addition de la lettre en majuscule + le reste du nom
    $("#titre").text(nameCapitalized);

    //DEUXIEME ACTION
    // $(this).addClass("flash");
    $(this).toggleClass("flash");

    //TROISIEME ACTION
    var music = $(this).attr("name");
    music += ".mp3";
    playMusic(music);
});

$("#btn").click(function(){
    var artiste = $('#input').val();
    var music = artiste + ".mp3";
    playMusic(music);
});

function playMusic(music){
    var audio = new Audio(music);
    audio.play();
}

function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (let i = 0; i < 6; i++) {
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}