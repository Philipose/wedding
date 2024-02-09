const numberOfImages = 14;

function populateGallery() {
    for (let i = 0; i <= numberOfImages; i++) {
        document.getElementById('Gallery-Wheel').innerHTML +=`
        <div>
        <a class="spotlight" href="assets/img/gallery/full/${i}.webp">
        <img src="assets/img/gallery/thumb/${i}.webp">
        </a>
        </div>`;
    }
    // document.getElementById('morePicturesDiv').innerHTML = '';
    $('.gallery-wheel').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
      });    
}