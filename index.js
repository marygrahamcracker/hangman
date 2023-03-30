document.addEventListener('DOMContentLoaded', e => {
drawGallows();
});


const drawGallows = () => {
    const canvas = document.getElementById('gallow');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
   
    context.moveTo(35, 10);
    context.lineTo(35, 300);

    context.stroke();
};