

function build_bridal_party() {
    const bridal_party_data = {
        'filter-bridesmaid': ['Kesia', 'Rebecca', 'Christie', 'Celia', 'Supriya', 'Minu', 'Reena', 'Shalini', 'Jocelyn', 'Erika'],
        'filter-groomsman': ['Michael', 'Stephen', 'Benjamin', 'Haris', 'George', 'Jeremy'],
    }
    const honoured_attendants = ['Kesia', 'Rebecca', 'Michael', 'Stephen']
    for (const [role, person] of Object.entries(bridal_party_data)) {
        for (const name of person) {
          document.getElementById('BridalPartyTable').innerHTML += `          <div id=${name} class="col-6 col-lg-3 col-md-6 portfolio-item ${role}">
          <div class="portfolio-wrap">
            <img src="assets/img/portfolio/${name}.png" class="img-fluid" alt="">
            <div class="portfolio-links">
              <a>${name}</a>
            </div>
          </div>
        </div>
  `
        }
    }

    for (const name of honoured_attendants){
        add_honour(name)
    }
}

function add_honour(id){
    document.getElementById(id).classList.add('filter-honoured');
}

function add_bridal_property(id, role){
    const role_map = {
        'Bridesmaid': {
          'class': 'filter-bridesmaid',
    
        },
        'Groomsman': 'groomsman',
        'Honour': 'honour'
    }
    document.getElementById(id).classList.add(roles);
}

function clear_bridal_party(){
    document.getElementById('BridalPartyTable').innerHTML = '';
} 
document.addEventListener('DOMContentLoaded', function () {
  clear_bridal_party();
  build_bridal_party();
});