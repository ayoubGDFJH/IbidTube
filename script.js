const btn_toggle = document.querySelector('.btn-toggle');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');


btn_toggle.addEventListener("click",() =>{
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
})