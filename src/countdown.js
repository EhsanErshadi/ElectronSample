console.log('module countdoun');
module.exports = function countdown(tick) {
    console.log('p2, module countdoun:FUNCTION');
    let count = 10;
    let timer = setInterval(_ => {
        tick(count--);
        console.log(count);
        if (count === 0)
            clearInterval(timer);
    }, 1000);
}