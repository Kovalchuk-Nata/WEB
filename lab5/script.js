
// 1 завдання
const educ = document.getElementById('educ');
const kpi = document.querySelectorAll('.kpi');

educ.addEventListener('click', () => {
    educ.classList.toggle('violetcolor');
})

kpi[0].addEventListener('click', () => {
    kpi[0].classList.toggle('yellowcolor');
})

// 2 завдання
const add = document.getElementById('add');
const large = document.getElementById('large');
const lower = document.getElementById('lower');
const deleteimg = document.getElementById('delete');
const image = document.getElementById('image');
const imaging = document.getElementById('imaging');


add.addEventListener('click', () => {
    image.classList.add('visible');
})

deleteimg.addEventListener('click', function () {
    image.classList.remove('visible');
    imaging.classList.remove('large');
    imaging.classList.remove('lower');
})

large.addEventListener('click', () => {
    imaging.classList.add('large');
})

lower.addEventListener('click', () => {
    imaging.classList.add('lower');
})