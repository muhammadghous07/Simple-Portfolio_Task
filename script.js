function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Thank you for your message, ${name}!`);
}

// Scroll to top button logic
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
