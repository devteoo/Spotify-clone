document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Henrique e Juliano', image: './Assets/artista-henrique-juliano.jpg' },
        { name: 'Jorge e Mateus', image: './Assets/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto e Cristiano', image: './Assets/artista-ze-neto.jpg' },
        { name: 'Gustavo Lima', image: './Assets/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: './Assets/artista-luan-santana.jpg' },
        { name: 'Matheus e Kauan', image: './Assets/artista-mateus-kauan.jpg' }
    ]

    const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './Assets/album-white-noise.jpg' },
        { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique e Juliano', image: './Assets/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './Assets/album-racionais.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './Assets/album-hit-me.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: './Assets/album-caju.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './Assets/album-escandalo.jpg' }
    ]

    const artistsGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src=${artist.image} alt=imagem do ${artist.name}>
            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
        `
        artistsGrid.appendChild(artistCard)

    });

    albumsData.forEach(album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src=${album.image} alt=imagem do ${album.name}>
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `
        albumsGrid.appendChild(albumCard)

    });

});

