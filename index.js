let countEl = document.getElementById("count-el")

let welcomeEl = document.getElementById("welcome-el")

let saveEl = document.getElementById("save-el")

// let name = prompt("What is your name?")
let name = "Vaikunthe"
let greeting = `Hi ${name}! 👋 Hope you enjoy using the counter!`

welcomeEl.innerText = greeting

console.log(greeting)

let count = 0

function increment () {
    count += 1
    countEl.innerText = count
    // console.log(count)
}

function decrease () {
    count -= 1
    countEl.innerText = count
}

function save() {
    let currentSave = " " + count + " | "
    saveEl.textContent += currentSave
    count = 0
    countEl.innerText = 0


}

function reset() {
    count = 0
    countEl.innerText = count
    saveEl.innerText = ""
}


