function timeOutput() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
};
setInterval(timeOutput, 1000);