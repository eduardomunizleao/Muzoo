// Animação de tooltip para curiosidades
document.querySelectorAll('.tooltip').forEach((tooltip) => {
    tooltip.addEventListener('mouseenter', () => {
        tooltip.querySelector('.tooltiptext').style.opacity = '1';
    });

    tooltip.addEventListener('mouseleave', () => {
        tooltip.querySelector('.tooltiptext').style.opacity = '0';
    });
});

function toggleinfo() {
    const open = document.querySelector('#infomobile');
    if (open) {
        if (open.classList.contains('active')) {
            open.classList.remove('active');
        } else {
            open.classList.add('active');
        }
    }
}