function setClock() {
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

    const now = new Date();
    
    // Adjust for Azerbaijan time zone (UTC+4)
    const azerbaijanOffset = 4 * 60 * 60 * 1000;
    const azerbaijanTime = new Date(now.getTime() + azerbaijanOffset);

    const seconds = azerbaijanTime.getUTCSeconds();
    const minutes = azerbaijanTime.getUTCMinutes();
    const hours = azerbaijanTime.getUTCHours();

    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setClock, 1000);
setClock(); // Initial call to set the clock immediately
