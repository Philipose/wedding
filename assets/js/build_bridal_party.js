

function build_bridal_party() {
    const bridal_party_data = {
        'filter-bridesmaid': ['Kesia', 'Rebecca', 'Christie', 'Celia', 'Supriya', 'Minu', 'Reena', 'Shalini', 'Jocelyn', 'Erika'],
        'filter-groomsman': ['Michael', 'Stephen', 'Benjamin', 'Haris', 'George', 'Jeremy'],
    }
    const honoured_attendants = {
      'Kesia': "Maid of Honour",
      'Rebecca': "Matron of Honour",
      'Michael': "Best Man",
      'Stephen': "Best Man",
    }
    for (const [role, person] of Object.entries(bridal_party_data)) {
        for (const name of person) {
          document.getElementById('BridalPartyTable').innerHTML += `          <div id=${name} class="col-6 col-lg-3 col-md-6 portfolio-item ${role}">
          <div class="portfolio-wrap">
            <img src="assets/img/portfolio/${name}.png" class="img-fluid" alt="">
            <div class="portfolio-links">
              <a id=${name}_label>${name}</a>
            </div>
          </div>
        </div>
  `
        }
    }

    for (const [person, title] of Object.entries(honoured_attendants)){
        add_honour(person, title);
    }
}

function add_honour(person, title){
    document.getElementById(person).classList.add('filter-honoured');
    document.getElementById(person.toString() + '_label').innerHTML = person.toString() + " - " + title.toString();
}

function add_bridal_property(id, role){
    document.getElementById(id).classList.add(role);
}

function clear_bridal_party(){
    document.getElementById('BridalPartyTable').innerHTML = '';
} 
document.addEventListener('DOMContentLoaded', function () {
  clear_bridal_party();
  build_bridal_party();
});