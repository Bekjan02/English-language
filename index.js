const select = document.getElementById("dropdown");
const option = document.getElementById("dropdown__content");

select.addEventListener('click', ()=>{
    select.classList.toggle('active')
    option.classList.toggle('active')
})