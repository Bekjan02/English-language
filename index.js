const select = document.getElementById("select-color");
const option = document.getElementById("option");

select.addEventListener('click', ()=>{
    select.classList.toggle('active')
    option.classList.toggle('active')
})
