const projectContainer = document.querySelector('.profile-container');

//database place holder
customer = {
    0: {
        first_name: "billy",
        last_name: "Blob",
        phone: 115432541,
        email: "bob@moon.com",
    },
    1: {
        first_name: "jeb",
        last_name: "craft",
        phone: 152314311,
        email: "minecraft@moon.com",
    },
    2: {
        first_name: "steve",
        last_name: "ear",
        phone: 284563829,
        email: "flyingpigs@moon.com",
    },
    3: {
        first_name: "jeff",
        last_name: "stone",
        phone: 734753479,
        email: "mynameisjeff@moon.com",
    },
    4: {
        first_name: "billy",
        last_name: "Blob",
        phone: 115432541,
        email: "bob@moon.com",
    },
    5: {
        first_name: "jeb",
        last_name: "craft",
        phone: 152314311,
        email: "minecraft@moon.com",
    },
    6: {
        first_name: "steve",
        last_name: "ear",
        phone: 284563829,
        email: "flyingpigs@moon.com",
    },
    7: {
        first_name: "jeff",
        last_name: "stone",
        phone: 734753479,
        email: "mynameisjeff@moon.com",
    },
}

const profileCardHtml = `<div class="profile-card"></div>`

for (i=0;i<Object.keys(customer).length;i++){
    const profileCard = document.createRange().createContextualFragment(profileCardHtml);
    const profileHtml = `
    <div class="profile-description">
      <h1>${customer[i].first_name + " " +customer[i].last_name}</h1>
      <p>${customer[i].email}</p>
      <p>${customer[i].phone}</p>
    </div>
    `
    projectContainer.appendChild(profileCard);
    const profileFragment = document.createRange().createContextualFragment(profileHtml);
    projectContainer.children[i].appendChild(profileFragment);
};