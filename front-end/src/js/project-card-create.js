var request = new XMLHttpRequest();

request.open('POST', '/customer_list', true);

//The script will try to get the data for the profile cards
// If there is an error a example card will be created with a error message
try{
    request.onload = initialCards();
    request.send();
}catch{
    const container = document.querySelector('.profile-container');
    profileCardErr = `
    <div class="profile-card">
    <div class="profile-icon"></div>
    <div class="profile-description">
    <h1>Error loading Profiles</h1>
    <p>eaxample</p>
    <p>example</p>
    </div>
    </div>`
    const profileCardErrFrag = document.createRange().createContextualFragment(profileCardErr);
    container.appendChild(profileCardErrFrag);
}


function initialCards() {

    var customer = JSON.parse(this.response);

    const projectContainer = document.querySelector('.profile-container');
    const profileCardHtml = `<div class="profile-card"></div>`

    var key = Object.keys(customer);

    for (var i=0;i<key.length;i++){
        const profileCard = document.createRange().createContextualFragment(profileCardHtml);
        const profileHtml = `
        <div class="profile-icon"></div>
        <div class="profile-description">
        <h1>${customer[key[i]].first_name + " " + customer[key[i]].last_name}</h1>
        <p>${customer[key[i]].email}</p>
        <p>${customer[key[i]].phone_number}</p>
        </div>
        `
        projectContainer.appendChild(profileCard);
        const profileFragment = document.createRange().createContextualFragment(profileHtml);
        projectContainer.children[i].appendChild(profileFragment);
    }
}