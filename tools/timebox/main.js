function saveEverything() {

    let inputs = document.getElementsByTagName("input");
    let data = {};
    for (const inp of inputs) {
        let id = inp.id;
        let value = inp.value;
        data[id] = value;
    }
    localStorage.setItem('timeBoxData', JSON.stringify(data));
}

function loadEverything() {
    let saveData = JSON.parse(localStorage.getItem("timeBoxData") || null) || {};
    for (const key in saveData) {
        let value = saveData[key];
        document.getElementById(key).value = value;
    }
}

document.addEventListener('focusout', function () {
    saveEverything();
});

document.addEventListener('DOMContentLoaded', function () {
    loadEverything();
});

