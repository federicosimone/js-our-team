const teamMembers = [
 {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const listElement = document.querySelector(".team-member")

let listHTML = "";

for (i=0 ; i<teamMembers.length; i++) {
  const teamMember = teamMembers[i] ;

  const htmlElement = `<div class="card" style="width: 18rem;">
                          <img src="${teamMember.img}" class="card-img-top" alt="Marco Bianchi">
                            <div class="card-body">
                              <h5 class="card-title">${teamMember.name}</h5>
                              <p class="card-text">${teamMember.role}</p>
                            </div>
                       </div>`;

  listHTML += htmlElement ;

  console.log(teamMember)
}

listElement.innerHTML= listHTML

