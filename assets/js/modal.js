const toggleModal = () => document.querySelector('.modal').classList.toggle('hide')

document.querySelector('#premium').addEventListener('click', () => toggleModal())
document.querySelector('.fas.fa-times').addEventListener('click', () => toggleModal())
document.querySelector('.modal').addEventListener('click', e => e.target == e.currentTarget ? toggleModal() : e.preventDefault())

const radios = document.querySelectorAll('.modal__radio')
radios.forEach(radio => radio.addEventListener('click', () => {
    radios.forEach(element => element.classList.remove('checked'))
    radio.classList.add('checked')
}))
