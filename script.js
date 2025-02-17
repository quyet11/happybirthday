const snowfalldiv = document.getElementById('snowfall');
const canvas = document.createElement('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("resize", function() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
snowfalldiv.appendChild(canvas);

const w = canvas.width;
const h = canvas.height;

const ctx = canvas.getContext('2d');
const backgroundImage = new Image();
backgroundImage.src = "th.png";

const flakes = [];
class snowfall {

    static snowFall() {
        ctx.drawImage(backgroundImage, 0, 0, w, h);
        snowfall.addFlakes();
        snowfall.addSnow();
    };

    static addFlakes() {
        const x = Math.ceil(Math.random() * w);
        const speed = Math.ceil(Math.random() * 5);
        const radius = 10 * Math.PI;

        flakes.push({
            x: x,
            y: 0,
            speed: speed,
            radius: radius
        });
    };

    static addSnow() {
        for (let i = 0; i < flakes.length; i++) {
            let oneFlake = flakes[i];

            // creating circles
            ctx.beginPath();
            // color the circles
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            // drawing circle
            ctx.arc(oneFlake.x, oneFlake.y += oneFlake.speed / 3, oneFlake.speed * 1, 0, oneFlake.radius);
            ctx.fill();
        }
    };
}

setInterval(() => snowfall.snowFall(), 20);
