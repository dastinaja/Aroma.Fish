document.getElementById('topupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const amount = document.getElementById('amount').value;
    const game = document.getElementById('game').value;
    const messageDiv = document.getElementById('message');

    // Simulasi proses top up
    messageDiv.textContent = `Top Up sebesar Rp${amount} untuk ${username} di ${game} berhasil!`;
    messageDiv.style.color = 'green';

    // Reset form
    this.reset();
});
