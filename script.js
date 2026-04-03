// Greeting message
var hour = new Date().getHours();

if (hour < 12) {
    alert("Good Morning!");
} else if (hour < 18) {
    alert("Good Afternoon!");
} else {
    alert("Good Evening!");
}

// Button click function
function sendMessage() {
    alert("Your message has been sent!");
}