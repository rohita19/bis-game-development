<script>
let budget = 1000;
function buyItem(price) {
    if (budget >= price) {
        budget -= price;
        document.getElementById("budget").textContent = budget;
        if (budget === 0) {
            document.getElementById("message").textContent = "Congrats! You spent all wisely!";
        }
    } else {
        document.getElementById("message").textContent = "Not enough money!";
    }
}
</script>