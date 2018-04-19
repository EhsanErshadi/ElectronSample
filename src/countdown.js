console.log('module countdoun');
module.exports = function countdown() {
    console.log('module countdoun:FUNCTION');
    let count = 10;
    let timer = setInterval(_ => {
        count--;
        console.log(count);
        if (count === 0)
            clearInterval(timer);
    }, 1000);
}