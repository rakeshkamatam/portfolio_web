 


 
 document.addEventListener('DOMContentLoaded', function() {
    const eduDivs = document.querySelectorAll('.edu-div');
    eduDivs.forEach(div => {
        div.addEventListener('click', function() {
            this.style.backgroundColor = getRandomColor();
        });
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var typed =new Typed(".Type2",{
    strings : ["Web developer","Java developer","Software developer","Research Analyst","Frontend developer"],
    TypeSpeed :100,
    backSpeed :60,
    loop :true

 });


