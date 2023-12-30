function build_bridal_party() {
    const bridal_party_data = {
        'filter-bridesmaid': [
          ['Kesia', 'George'],
          ['Rebecca', 'Chacko'],
          ['Christina', 'George'],
          ['Celia', 'George'],
          ['Supriya', 'Paidemarry'],
          ['Minu', 'Pitchiah'],
          ['Reena', 'Mathew'],
          ['Shalini', 'Tummala'],
          ['Jocelyn', 'Augustine'],
          ['Erika', 'Malana']
        ],
        'filter-groomsman': [
          ['Michael', 'Joshua'],
          ['Stephen', 'Chacko'],
          ['Nebu', 'John'],
          ['Haris', 'Ahmad'],
          ['George', 'Teodorescu'],
          ['Jeremy', 'Abraham']
        ],
    }
    const honoured_attendants = {
      'Kesia': "Maid of Honour",
      'Rebecca': "Matron of Honour",
      'Michael': "Best Man",
      'Stephen': "Best Man",
    }
    for (const [role, person] of Object.entries(bridal_party_data)) {
        for (const name of person) {
          first_name = name[0];
          last_name = name[1];
          document.getElementById('BridalPartyTable').innerHTML += `          <div id=${first_name} class="col-6 col-lg-3 col-md-6 portfolio-item ${role}">
          <div class="portfolio-wrap">
            <img loading="lazy" src="assets/img/portfolio/${first_name}.webp" class="img-fluid" alt="">
            <div class="portfolio-links">
              <a id=${first_name}_label>${first_name} ${last_name}</a>
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
    document.getElementById(person.toString() + '_label').innerHTML += "<br/>" + title.toString();
}

function clear_bridal_party(){
    document.getElementById('BridalPartyTable').innerHTML = '';
} 
document.addEventListener('DOMContentLoaded', function () {
  clear_bridal_party();
  build_bridal_party();
});