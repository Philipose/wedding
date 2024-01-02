function build_bridal_party() {
    const bridal_party = [
      {'FirstName': 'Kesia', 'LastName': 'George', 'Roles': ['Bridesmaid', 'Maid of Honour']},
      {'FirstName': 'Rebecca', 'LastName': 'Chacko', 'Roles': ['Bridesmaid', 'Matron of Honour']},
      {'FirstName': 'Christina', 'LastName': 'George', 'Roles': ['Bridesmaid']},
      {'FirstName': 'Celia', 'LastName': 'John', 'Roles': ['Bridesmaid']},
      {'FirstName': 'Supriya', 'LastName': 'Paidemarry', 'Roles': ['Bridesmaid']},
      {'FirstName': 'Minu', 'LastName': 'Pitchiah', 'Roles': ['Bridesmaid']},
      {'FirstName': 'Reena', 'LastName': 'Mathew', 'Roles': ['Bridesmaid']},
      {'FirstName': 'Shalini', 'LastName': 'Tummala', 'Roles': ['Bridesmaid']},
      {'FirstName': 'Jocelyn', 'LastName': 'Augustine', 'Roles': ['Bridesmaid']},
      {'FirstName': 'Erika', 'LastName': 'Malana', 'Roles': ['Bridesmaid']},
      {'FirstName': 'Michael', 'LastName': 'Joshua', 'Roles': ['Groomsman', 'Best Man']},
      {'FirstName': 'Stephen', 'LastName': 'Chacko', 'Roles': ['Groomsman', 'Best Man']},
      {'FirstName': 'Nebu', 'LastName': 'John', 'Roles': ['Groomsman']},
      {'FirstName': 'Haris', 'LastName': 'Ahmad', 'Roles': ['Groomsman']},
      {'FirstName': 'George', 'LastName': 'Teodorescu', 'Roles': ['Groomsman']},
      {'FirstName': 'Jeremy', 'LastName': 'Abraham', 'Roles': ['Groomsman']},
    ]

    bridal_party.forEach(function(person){
      document.getElementById('BridalPartyTable').innerHTML +=
`          <div id=${person.FirstName} class="col-6 col-lg-3 col-md-5 portfolio-item">
      <div class="portfolio-wrap">
        <img src="assets/img/portfolio/${person.FirstName}.webp" loading="lazy" width="315" height= "315" class="img-fluid" alt="">
        <div class="portfolio-links">
          <a id=${person.FirstName + '_label'}>${person.FirstName} ${person.LastName}</a>
        </div>
      </div>
`
      roles = Array.from(person.Roles);
      roles.forEach(function(role){
        add_role(person.FirstName, person.LastName, role);
      });
    });
  };

function add_role(first_name, last_name, role){
    role_map = {
      'Maid of Honour': 'filter-honoured',
      'Matron of Honour': 'filter-honoured',
      'Best Man': 'filter-honoured',
      'Groomsman': 'filter-groomsman',
      'Bridesmaid': 'filter-bridesmaid',
    }
    document.getElementById(first_name).classList.add(role_map[role]);
    document.getElementById(first_name.toString() + '_label').innerHTML = `${first_name} ${last_name}<br/>` + role.toString();
}

function clear_bridal_party(){
    document.getElementById('BridalPartyTable').innerHTML = '';
} 
document.addEventListener('DOMContentLoaded', function () {
  clear_bridal_party();
  build_bridal_party();
});