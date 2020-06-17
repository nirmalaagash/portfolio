var glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 1,
    perView: 3,
    gap: 20,
    focusAt: 1,
    autoplay: 3000,
    hoverpause: true,
    bound: true,
    breakpoints: {
        1000: {
            perView: 2
        },
        800: {
            perView: 1
        }
    }
})

var testimonial_glide = new Glide('.testimonial_glide', {
    type: 'carousel',
    startAt: 1,
    perView: 1,
    gap: 20,
    focusAt: 1,
    autoplay: 5000,
    hoverpause: true,
    bound: true,
    breakpoints: {
        1000: {
            perView: 1
        },
        800: {
            perView: 1
        }
    }
})

glide.mount()
testimonial_glide.mount()