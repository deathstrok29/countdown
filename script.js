
// Set the date for Saniya's birthday (November 9th)
const birthday = new Date('November 9, 2024 00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = birthday - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the results in their respective HTML elements
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    // If the countdown is finished, display a birthday message
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "Happy Birthday, Saniya!";
    }
}, 1000);
