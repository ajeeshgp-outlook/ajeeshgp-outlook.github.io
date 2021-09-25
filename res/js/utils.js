// Jquery UI tooltip
$(function () {
    $(document).tooltip({
        hide: {
            effect: 'explode',
            delay: 250,
        },
    });
});

// Initializing animate on scroll
AOS.init({
    easing: 'ease-out-back',
    duration: 1000,
});

// Smooth Scroll for Anchor tag
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Setting Footer year dynamically
$('#year').text(new Date().getFullYear());

images.forEach((image) => {
    let template = `<div data-aos="zoom-out-down" class="w-full rounded-xl cursor-pointer">
                        <a href="res/images/${image.uri}" data-lightbox="${image.name}" data-title="${image.desc}"> 
                            <img class="rounded-xl" src="res/images/${image.uri}" alt="${image.name}" title="${image.desc}">
                        </a>
                        </div>`;

    $('#gallery').append(template);
});

videos.forEach((video) => {
    let template = `<iframe data-aos="zoom-in-down" class="block w-full h-64" src="${video.uri}" title="${video.name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    $('#clips').append(template);
});
