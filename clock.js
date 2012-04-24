function ticktack() {
    document.getElementById('clock').textContent = new Date();
    setTimeout(ticktack, 100);
} 