// Add and remove class active on nav-item
const navItem = document.querySelectorAll('.navbar-nav .nav-item');
navItem.forEach(itemNav => {
    itemNav.addEventListener('click', () => {
        navItem.forEach(itemNav => {
            itemNav.classList.remove('active');
        })
        itemNav.classList.add('active');
    });
});


// Start date picker ui by jquery 
$(function () {
    $('.date').datepicker();
});