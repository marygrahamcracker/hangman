document.addEventListener('DOMContentLoaded', e => {
drawGallows();
});


const drawGallows = () => {
    const canvas = document.getElementById('gallow');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
   
    //verticle line
    context.moveTo(35, 10);
    context.lineTo(35, 300);

    //top horizontal line
    context.moveTo(33.5, 10);
    context.lineTo(200, 10);

    //connector line
    context.moveTo(198.5, 10);
    context.lineTo(198.5, 20);

    //bottom horizontal line
    context.moveTo(2, 298);
    context.lineTo(80, 298);

    context.stroke();
};