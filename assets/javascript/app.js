async function getUsers() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await resp.json();
    
    return users;
}

async function updateTable() {
    let tableBody = document.querySelector(".js-user-line")
    let users = await getUsers()

    for (let user of users) { 
        console.log(user.name)
    }
}

updateTable()


