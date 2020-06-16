// Event listener triggers when the window loads
window.addEventListener('load', () => {
    // project cards will load if(error) then a sample card is loaded instead
    try { loadProjectCards() } catch{ loadExampleProjectCard() };
});

//fetches data with a POST request
async function loadProjectCards() {
    const request = await fetch('/customer_list', { method: 'POST' })
    const data = await request.json();
    makeProjectCards(data);
};

function makeProjectCards(customerData) {
    const projectContainer = document.querySelector('.project-container');
    const profileCardHtml = `<div class="project-card"></div>`
    let key = Object.keys(customerData);
    let keyLength = key.length;
    for (let i = 0; i < keyLength; i++) {
        const projectCard = document.createRange().createContextualFragment(profileCardHtml);
        projectContainer.appendChild(projectCard);

        const projectFragment = document.createRange().createContextualFragment(projectCardElement(customerData, i));
        projectContainer.children[i].appendChild(projectFragment);
    }
    function projectCardElement(customer, i) {
        // Returns the html as a string
        projectCardHTML = `
            <div class="project-icon"></div>
            <div class="profile-description">
                <h1>${customer[key[i]].first_name + " " + customer[key[i]].last_name}</h1>
                <p>${customer[key[i]].email}</p>
                <p>${customer[key[i]].phone_number}</p>
            </div>`
        return projectCardHTML;
    }
}

function loadExampleProjectCard() {
    const container = document.querySelector('.profile-container');
    profileCardErr = `
        <div class="project-card">
        <div class="project-icon"></div>
        <div class="project-description">
        <h1>Error loading project-cards</h1>
        <p>eaxample@mail.com</p>
        <p>example</p>
        </div>
        </div>`
    const profileCardErrFrag = document.createRange().createContextualFragment(profileCardErr);
    container.appendChild(profileCardErrFrag);
}