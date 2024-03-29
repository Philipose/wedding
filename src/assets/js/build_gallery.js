const numberOfImages = 15;

function populateGallery() {
    for (let i = 0; i <= numberOfImages; i++) {
        document.getElementById('Gallery-Wheel').innerHTML +=`
        <div>
        <a class="spotlight" href="assets/img/gallery/full/${i}.webp" aria-label="Fullscreen Gallery Image ${i+1}">
        <img class="gallery-image" src="assets/img/gallery/thumb/${i}.webp" alt="Image ${i+1}"/>
        </a>
        </div>`;
    }
    $('.gallery-wheel').slick({
        dots: false,
        infinite: false,
        initialSlide: 1,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        lazyLoad: 'ondemand',
        mobileFirst: true,
      });    
}
