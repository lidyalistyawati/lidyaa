document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('clicl', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrolIntoview({ 
            behavior: "smooth"
        })
    })
})

