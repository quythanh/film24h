var listFilm = [
    {
        "id": 1,
        "name": "Avengers: Endgame",
        "view": 1215406,
        "desc": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        "image": "https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg",
        "category": "Adventure",
        "link": "https://www.youtube.com/embed/TcMBFSGVi1c"
    },
    {
        "id": 2,
        "name": "Spider-Man: No Way Home",
        "view": 415482,
        "desc": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
        "image": "https://www.cgv.vn/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/s/n/snwh_poster_bluemontage_4x5fb_1_.jpg",
        "category": "Action",
        "link": "https://www.youtube.com/embed/JfVOs4VSpmA"
    },
    {
        "id": 3,
        "name": "Joker",
        "view": 81913,
        "desc": "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
        "image": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg?w=144",
        "category": "Drama",
        "link": "https://www.youtube.com/embed/zAGVQLHvwOY"
    },
    {
        "id": 4,
        "name": "Spider-Man: Far from Home",
        "view": 45482,
        "desc": "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
        "image": "https://play-lh.googleusercontent.com/_gIJ5eszlkwDw7tWekePeapreSRDlQti4XtsivYKUOUq8I-wEqROEv8kjHm3EXyfdrvjS92d-VDQFNR-AyA",
        "category": "Action",
        "link": "https://www.youtube.com/embed/Nt9L1jCKGnE"
    },
    {
        "id": 5,
        "name": "Venom",
        "view": 12842,
        "desc": "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
        "image": "https://image.thanhnien.vn/w1024/Uploaded/2022/ygtmjz/2021_05_11/venomposter_tdet.jpg",
        "category": "Adventure",
        "link": "https://www.youtube.com/embed/u9Mv98Gr5pY"
    },
    {
        "id": 6,
        "name": "Uncharted",
        "view": 1232823,
        "desc": "Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor Sully Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.",
        "image": "https://upload.wikimedia.org/wikipedia/vi/d/d4/Uncharted_Official_Poster.jpg",
        "category": "Adventure",
        "link": "https://www.youtube.com/embed/4wCH1K-ckZw"
    },
    {
        "id": 7,
        "name": "Doctor Strange",
        "view": 152614,
        "desc": "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
        "image": "https://play-lh.googleusercontent.com/MqXH34arO8Yb0Wm8UVw99eknd1a4Oltj959fls29wlfo9xHg5oKdi9RlgliORSQGSltklw",
        "category": "Action",
        "link": "https://www.youtube.com/embed/aWzlQ2N6qqg"
    },
    {
        "id": 8,
        "name": "Inception",
        "view": 112122,
        "desc": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        "image": "https://image.thanhnien.vn/w1024/Uploaded/2022/ygtmjz/2021_05_11/venomposter_tdet.jpg",
        "category": "Drama",
        "link": "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
        "id": 9,
        "name": "The Dark Knight",
        "view": 142877,
        "desc": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "image": "https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Poster_phim_K%E1%BB%B5_s%C4%A9_b%C3%B3ng_%C4%91%C3%AAm_2008.jpg/220px-Poster_phim_K%E1%BB%B5_s%C4%A9_b%C3%B3ng_%C4%91%C3%AAm_2008.jpg",
        "category": "Drama",
        "link": "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
        "id": 10,
        "name": "Schindler's List",
        "view": 993133,
        "desc": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        "image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "category": "Honor",
        "link": "https://www.youtube.com/embed/gG22XNhtnoY"
    },
    {
        "id": 11,
        "name": "The Book of Boba Fett",
        "view": 643862,
        "desc": "Bounty hunter Boba Fett & mercenary Fennec Shand navigate the underworld when they return to Tatooine to claim Jabba the Hutt's old turf.",
        "image": "https://image.tmdb.org/t/p/w780/gNbdjDi1HamTCrfvM9JeA94bNi2.jpg",
        "category": "Action",
        "link": "https://www.youtube.com/embed/rOJ1cw6mohw"
    },
    {
        "id": 12,
        "name": "The Silence of the Lambs",
        "view": 235136,
        "desc": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        "image": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "category": "Drama",
        "link": "https://www.youtube.com/embed/W6Mm8Sbe__o"
    },
    {
        "id": 13,
        "name": "Deadpool 2",
        "view": 642124,
        "desc": "Foul-mouthed mutant mercenary Wade Wilson (a.k.a. Deadpool) assembles a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg Cable.",
        "image": "https://webcongnghe247.com/wp-content/uploads/2021/10/DP2_DP_BS-549x800.jpg",
        "category": "Comedy",
        "link": "https://www.youtube.com/embed/20bpjtCbCz0"
    },
    {
        "id": 14,
        "name": "Hawkeye",
        "view": 232486,
        "desc": "Series based on the Marvel Comics superhero Hawkeye, centering on the adventures of Young Avenger, Kate Bishop, who took on the role after the original Avenger, Clint Barton.",
        "image": "https://upload.wikimedia.org/wikipedia/vi/9/9f/HawkeyePoster.jpeg",
        "category": "Adventure",
        "link": ""
    },
    {
        "id": 15,
        "name": "Turning Red",
        "view": 134234,
        "desc": "A 13-year-old girl named Meilin turns into a giant red panda whenever she gets too excited.",
        "image": "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/t/u/turning_red-final_poster_1_.jpg",
        "category": "Comedy",
        "link": "https://www.youtube.com/embed/RYlUsUBqf_s"
    },
    {
        "id": 16,
        "name": "Breaking Bad",
        "view": 412245,
        "desc": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        "image": "https://m.media-amazon.com/images/M/MV5BOThjODMyM2QtNTNhYi00ZGM4LWIxZTAtMDAyYWNhYzYxMjJiXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
        "category": "Drama",
        "link": "https://www.youtube.com/embed/1JLUn2DFW4w"
    },
    {
        "id": 17,
        "name": "Upload",
        "view": 921232,
        "desc": "A man is able to choose his own afterlife after his untimely death, by having his consciousness uploaded into a virtual world. As he gets used to his new life and befriends his angel (real world handler), questions about his death arise.",
        "image": "https://m.media-amazon.com/images/M/MV5BYjc5OWU5NzktNTU5MS00NzhiLWE5ZGEtOTIyMjJkOGEwMzQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
        "category": "Comedy",
        "link": "https://www.youtube.com/embed/SXys2yHrRio"
    },
    {
        "id": 18,
        "name": "The Lord of the Rings: The Rings of Power",
        "view": 772312,
        "desc": "Epic drama set thousands of years before the events of J.R.R. Tolkien's 'The Hobbit' and 'The Lord of the Rings' follows an ensemble cast of characters, both familiar and new, as they confront the long-feared re-emergence of evil to Middle-earth.",
        "image": "https://m.media-amazon.com/images/M/MV5BOTUzYTMwYjAtNzMzMS00YjhmLWEwOGQtY2MxZGEyMzMwZDI0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
        "category": "Drama",
        "link": "https://www.youtube.com/embed/IVGOVokbw6Q"
    },
    {
        "id": 19,
        "name": "Free Guy",
        "view": 841422,
        "desc": "A bank teller discovers that he's actually an NPC inside a brutal, open world video game.",
        "image": "https://cly.1cdn.vn/2021/08/16/hai.jpg",
        "category": "Comdy",
        "link": "https://www.youtube.com/embed/tpHKA36qBdE"
    },
    {
        "id": 20,
        "name": "West Side Story",
        "view": 824134,
        "desc": "An adaptation of the 1957 musical, West Side Story explores forbidden love and the rivalry between the Jets and the Sharks, two teenage street gangs of different ethnic backgrounds.",
        "image": "https://pics.filmaffinity.com/West_Side_Story-808999756-large.jpg",
        "category": "Drama",
        "link": "https://www.youtube.com/embed/A5GJLwWiYSg"
    }
]

var curSuggestPage = 0, curTopviewPage = 0

const sortView = listFilm => {
    newList = [...listFilm]

    for (let i = 0; i < newList.length - 1; i++)
        for (let j = 0; j < newList.length; j++)
            if (newList[i].view > newList[j].view) {
                let tmp = newList[i]
                newList[i] = newList[j]
                newList[j] = tmp
            }

    return newList
}

const toggle = (e, className) => document.querySelector(e).classList.toggle(className)