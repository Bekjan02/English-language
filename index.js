const select = document.getElementById("select-flag");
const option = document.getElementById("option");

select.addEventListener('click', ()=>{
    select.classList.toggle('active')
    option.classList.toggle('active')
})