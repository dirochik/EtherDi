function updClock(){
    const now = new Date();
    
    let hour = now.getHours();
    if (hour < 10) hour = '0' + hour.toString();
    let minutes = now.getMinutes();
    if (minutes < 10) minutes = '0' + minutes.toString();
    let seconds = now.getSeconds();
    if (seconds < 10) seconds = '0'+seconds.toString();


    document.getElementById("clock").textContent = "Here's time for you: " + hour + ':' + minutes + ':' + seconds; 
}
updClock();
setInterval(updClock,1000);