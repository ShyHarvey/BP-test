import en from '../langs/en.json'
import es from '../langs/es.json'
import fr from '../langs/fr.json'
import ja from '../langs/ja.json'
import nl from '../langs/nl.json'
import ru from '../langs/ru.json'
import zh from '../langs/zh.json'


// переключение активных карточек
let cards = document.querySelectorAll('.card')

const cardPressed = (e) => {
    if (!e.classList.contains('activeCard')) {
        cards.forEach(i => {
            i.classList.toggle('activeCard')
        })
    }
}
cards.forEach(card => {
    card.addEventListener('click', () => cardPressed(card))
})

//переход по кнопке продолжить
let google = 'https://google.com/'
let apple = 'https://apple.com/'
let url = apple

function changeUrl() {
    if (url == google) {
        url = apple
    } else {
        url = google
    }
}

function continueButtonClick() {
    window.open(url, '_blank')

}

cards.forEach(card => {
    card.addEventListener('click', changeUrl)
})

let continueBtn = document.querySelector('.continueBtn')
continueBtn.addEventListener('click', continueButtonClick)

// функционал связанный с выбором языка
let allLang = ['ru', 'en', 'es', 'fr', 'ja', 'nl', 'zh']

let params = new URLSearchParams(document.location.search)

let systemLang = navigator.language.slice(0, 2)
if (!params.get('lang')) {
    if (allLang.includes(systemLang)) {
        // меняю параметр, но не меняю адресную строку в браузере, чтобы страница не перезагружалась,
        // если хотите сменить язык на не системный, то ?lang= придётся ввести в ручную 
        params.set('lang', systemLang)
    } else {
        params.set('lang', 'en')
    }
}

function changeLanguage(lang) {

    //для строки "Export to clouds" перевод не предоставили, просить дополнить некого, поэтому я оставил её как есть

    document.querySelector('.unlimitedAccess').innerHTML = lang["Unlimited Access<br>to All Features"]
    document.querySelector('.unlimitedDocuments').innerHTML = lang["Unlimited documents"]
    document.querySelector('.textRecognition').innerHTML = lang["Text recognition (OCR)"]
    document.querySelector('.priceInMonth').innerHTML = lang["<strong>{{price}}</strong><br>per month"].replace('{{price}}', '$9.99')
    document.querySelector('.freeDays').innerHTML = lang["3 DAYS FREE"]
    document.querySelector('.pricePerMonth').innerHTML = lang["{{price}}/month"].replace('{{price}}', '$9.99')
    document.querySelector('.pricePerMonthForYear').innerHTML = lang["{{price}}/month"].replace('{{price}}', '$1.66')
    document.querySelector('.annually').innerHTML = lang["Annually"]
    document.querySelector('.perYear').innerHTML = lang["<strong>{{price}}</strong><br>per year"].replace('{{price}}', '$19.99')
    document.querySelector('.mostPopular').innerHTML = lang["MOST POPULAR"]
    document.querySelector('.continueBtn').innerHTML = lang["Continue"]
    document.querySelector('.monthly').innerHTML = lang["Monthly"]
    document.querySelector('.message').innerHTML = lang["Auto-renewable. Cancel anytime."]
    document.querySelector('.term').innerHTML = lang["Terms of Use"]
    document.querySelector('.restore').innerHTML = lang["Restore"]
    document.querySelector('.policy').innerHTML = lang["Privacy Policy"]

}

switch (params.get('lang')) {
    case 'en':
        changeLanguage(en)
        break
    case 'es':
        changeLanguage(es)
        break
    case 'fr':
        changeLanguage(fr)
        break
    case 'ja':
        changeLanguage(ja)
        break
    case 'nl':
        changeLanguage(nl)
        break
    case 'ru':
        changeLanguage(ru)
        break
    case 'zh':
        changeLanguage(zh)
        break
    default:
        changeLanguage(en)
        break
}

