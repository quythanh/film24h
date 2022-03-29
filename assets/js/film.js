const renderFilm = (listFilm, className) => {
    root = document.querySelector(className)
    root.innerHTML = listFilm.map(film => `
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

listFilm.then(res => {
    renderFilm(res.splice(0, 4), '.content__suggest')
    renderFilm(res.sort( compare ), '.content__top-view')
})