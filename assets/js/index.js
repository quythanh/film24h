var listFilm = fetch('./assets/data/films.json').then(res => res.json())

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

function compare( a, b ) {
    if ( a.view < b.view ){
      return 1;
    }
    if ( a.view > b.view ){
      return -1;
    }
    return 0;
  }

const toggle = (e, className) => document.querySelector(e).classList.toggle(className)