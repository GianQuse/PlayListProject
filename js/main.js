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
    songList.forEach(song => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = song.title;
        link.href = "#";
        li.appendChild(link);
        songs.appendChild(li);
    })
}