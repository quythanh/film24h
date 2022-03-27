const renderFilm = (page, listFilm, root) => {
    root.innerHTML = listFilm.slice(page*4, page*4+4).map(film => `
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
    `).join("")

    document.querySelectorAll('.film').forEach(f => f.addEventListener('click', () => {
        localStorage.setItem('curID', (f.id.split('-')[1] - 1))
        window.location.href = './info.html'
    }))
}

renderFilm(curPage, listFilm, document.querySelector('.content__suggest'))

renderFilm(0, sortView(listFilm), document.querySelector('.content__top-view'))
