document.querySelector('#premium').addEventListener('click', () => toggle('.modal', 'hide'))
document.querySelector('.fas.fa-times').addEventListener('click', () => toggle('.modal', 'hide'))
document.querySelector('.modal').addEventListener('click', e => e.target == e.currentTarget ? toggle('.modal', 'hide') : e.preventDefault())

const radios = document.querySelectorAll('.modal__radio')
radios.forEach(radio => radio.addEventListener('click', () => {
    radios.forEach(element => element.classList.remove('checked'))
    radio.classList.add('checked')
}))
