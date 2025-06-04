
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 30,
    song: "Vivo por ti",
    details: {
        author: "Zarcort",
        year: 2016
    }
}

const {song: antherSong, details: Detalles, songDuration} = audioPlayer; // Destructuring to get the song property
const {author: autor} = Detalles; 

console.log('Song:', antherSong); // Vivo por ti
console.log('Author:', autor); // Zarcort // 90
console.log('Song Duration:', songDuration); // 30

const [, , p3 = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3:', p3 || 'No hay personaje 3'); // Trunks