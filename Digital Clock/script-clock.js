
const clockDisplay = document.getElementById('clockDisplay');

function updateClock() {
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Pad single digits with a leading zero
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    
    clockDisplay.textContent = timeString;
}


updateClock();
setInterval(updateClock, 1000);