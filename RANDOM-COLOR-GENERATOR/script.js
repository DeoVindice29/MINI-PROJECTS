const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 +1);
    const g = Math.round(Math.random() * 255 +1);
    const b = Math.round(Math.random() * 255 +1);
    console.log(r, g, b)

    document.body.style.background = 'rgb('+ r +', '+ g +', '+ b +')'
});