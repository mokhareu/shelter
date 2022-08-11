const total = document.querySelector(".total")
const en = document.querySelector(".en")
const ru = document.querySelector(".ru")

total.textContent = "welcome"


const translat = {
    en: "welcome",
    ru: "привет"

}

en.addEventListener('click',translate)
ru.addEventListener('click',tran)


function translate(params) {
    total.textContent = translat.en
}
function tran(params) {
    total.textContent = translat.ru
}

