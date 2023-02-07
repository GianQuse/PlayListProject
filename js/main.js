// Song data
const songList = [
    {
        title: "#",
        file: "#",
        cover: "#"

    },
    {
        title: "#",
        file: "#",
        cover: "#"
    },
    {
        title: "#",
        file: "#",
        cover: "#"
    },
]

//CAPTURAR ELEMENTOS DEL DOM.-
const songs = document.getElementById("songs")

//CARGAR CANCIONES Y MOSTRAR LISTADO.-
function loadSongs() {
    songList.forEach((song, index) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = song.title;
        link.href = "#";
        link.addEventListener("click", () => loadSongs(index))
        li.appendChild(link);
        songs.appendChild(li);
    })
}

//CARGAR CANCION SELECCIONADA.-
function loadSong(songIndex) {
    
}

//INICIOS FUNCIONES.-
loadSongs()