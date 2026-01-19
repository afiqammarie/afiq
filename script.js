// --- JS TAB SYSTEM & NAVIGATION LOGIC ---
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Navigation Tab Logic
    // Detects current page and adds the 'active' class to the matching tab
    const navLinks = document.querySelectorAll(".main-nav ul li a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        // Remove existing active classes
        link.classList.remove("active");
        
        // Add active class if the link matches the current page
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // 2. FAQ Tab/Accordion Logic (For Contact Page)
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", function() {
            // Remove 'active' class from all other FAQ tabs first
            faqItems.forEach(i => i.classList.remove("active"));
            
            // Toggle 'active' class for the clicked tab
            this.classList.toggle("active");
            
            // Optional: jQuery-style Slide Effect if linked
            console.log("Tab switched to: " + this.innerText);
        });
    });
});