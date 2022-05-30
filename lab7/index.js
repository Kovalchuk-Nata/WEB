const button = document.getElementById('btn');
const users = document.getElementById('users');

button.addEventListener("click", download)

function download() {
    fetch("https://randomuser.me/api/?results=5").then(response => {
        return response.json()
    }).then(data => {
        users.innerHTML = '';
        for (const result of data.results) {
            const userCard = `<div class="user-card">
        <div>
        <img src="${result.picture.large}">
        </div>
        <div>
                <p>Location: ${result.location.country}, ${result.location.state}, ${result.location.postcode}</p>
                <p>City: ${result.location.city}</p>
                <p>Name: ${result.name.first} ${result.name.last}</p>
                <p>Phone: ${result.phone}</p>
            </div>
        </div>`
            users.insertAdjacentHTML('beforeend', userCard);
        }
    })
}