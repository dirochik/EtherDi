function updClock(){
    const now = Date.now();
    
    const hour = Math.floor(now/3600/1000) % 24;
    if (hour < 10) hour = '0' + hour.toString();
    const minutes = Math.floor(now/60/1000) % 60;
    if (minutes < 10) minutes = '0' + minutes.toString();
    const seconds = Math.floor(now/1000) % 60;
    if (seconds < 10) seconds = '0'+seconds.toString();


    const timeString = now;

    document.getElementById("clock").textContent = "Here's time for you: " + hour + ':' + minutes + ':' + seconds; 
}
updClock();
setInterval(updClock,1000);