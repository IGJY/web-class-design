const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.search-btn');

btn.addEventListener('click' , () => {
    search.classList.toggle('active')
    // input.focus()//可以不用点一下输入框再输入，差不太多
} )