var request = new XMLHttpRequest();

request.open('POST', '/customer_list', true);

request.onload = function() {

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

request.send();