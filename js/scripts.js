let isScrolling = false

const handleScroll = (event) => {
    if (isScrolling) return
    isScrolling = true

    const scrollAmount = window.innerHeight
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight

    if (event.deltaY > 0) {
        window.scrollBy({
            top: Math.min(scrollAmount, maxScrollTop - window.scrollY),
            left: 0,
            behavior: 'smooth'
        })
    } else {
        window.scrollBy({
            top: -Math.min(scrollAmount, window.scrollY),
            left: 0,
            behavior: 'smooth'
        })
    }

    setTimeout(() => {
        isScrolling = false
    }, 500) // Adjust timeout as needed
}

document.getElementById('menu-link').addEventListener('click', function(event) {
    event.preventDefault()
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' })
})

document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault()
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
})

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('wheel', handleScroll)
