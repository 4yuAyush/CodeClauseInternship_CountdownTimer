const targetDate = new Date(2024, 1, 14, 18, 0, 0); // February 14, 2024, 6:00:00 PM

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    document.getElementById('countdown').innerHTML = 'Event has started!';
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the initial countdown value
updateCountdown();
