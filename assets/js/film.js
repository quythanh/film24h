const renderFilm = (listFilm, className) => {
    root = document.querySelector(className)
    root.innerHTML = listFilm.map(film => `
        <div class="listPrev"><i class="far fa-chevron-left"></i></div>
        <div class="film" id="film-${film.id}">
            <div class="film__img">
                <img src="${film.image}" alt="${film.name}">
            </div>
            <div class="film__name">${film.name}</div>
            <div class="film__view">
                <i class="fal fa-eye"></i>
                ${new Intl.NumberFormat().format(film.view)}
            </div>
        </div>
        <div class="listNext"><i class="far fa-chevron-right"></i></div>
    `).join("")

    document.querySelectorAll('.film').forEach(f => f.addEventListener('click', () => {
        localStorage.setItem('curID', (f.id.split('-')[1] - 1))
        window.location.href = './info.html'
    }))

    document.querySelector(className + ' .far.fa-chevron-left').addEventListener('click', () => renderFilm(t(listFilm), className))
    document.querySelector(className + ' .far.fa-chevron-right').addEventListener('click', () => renderFilm(next(listFilm), className))
}

const next = listFilm => listFilm.push(listFilm[0]).shift()
const prev = listFilm => listFilm.unshift(listFilm[listFilm.length - 1]).pop()

renderFilm(listFilm, '.content__suggest')

renderFilm(sortView(listFilm), '.content__top-view')

window.addEventListener('click', e => console.log(e.target))