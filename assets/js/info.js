var curID = localStorage.getItem('curID') || 0
var f = listFilm[curID]
document.querySelector('.info').innerHTML = `
<div class="info__banner">
    <img src="${f.image}" alt="">
</div>

<div class="info__img">
    <img src="${f.image}" alt="">
</div>

<div class="info__btn-play">
    <i class="fas fa-play"></i>
    Xem ngay
</div>

<div class="info__details">
    <div class="info__name">${f.name}</div>
    <div class="info__view">View: ${new Intl.NumberFormat().format(f.view)}</div>
    <div class="info__category">Category: ${f.category}</div>
    <div class="info__desc">${f.desc}</div>
</div>
`

{/* <div class="videofilm">
    <iframe width="1120" height="630" src="${f.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> */}