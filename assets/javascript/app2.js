async function getUsers () {
    const resp = await fetch ("https://jsonplaceholder.typicode.com/users")
    const users = await resp.json();
    return users;
}

async function updateTable () {
    let tableBody = document.querySelector(".js-user-line")
    let users = await getUsers()
    let linhas = ""
    for(let user of users) {
        linhas += `
        <tr>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="userDetail(${user.id})">Exibir</button> 
            </td>
        </tr>
        `
    }

tableBody.innerHTML = linhas

}
async function userDetail(userId) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await resp.json()

    document.querySelector(".js-user-name").value = user.name
    document.querySelector(".js-user-username").value = user.username

}

async function getTips () {
    const respot = await fetch("https://api.adviceslip.com/advice")
    const tip = await resp.json()
    document.querySelector(".tips").computedStyleMap.display = "inline-block"
    document.querySelector(".tips").innerText = tip.slip.advice

}

setTimeout(()=> {
    document.querySelector(".tips").innerText = tip.slip.advice
    document.querySelector(".tips").style.display = "inline-block"
}
)

updateTable()

setInterval(()=> {
    console.log('teste')
}, 3000)

//https://api.adiviceslip.com/advice