const title = (titleOfForm) => {
    return `
        <h1>
            ${titleOfForm}
        </h1>
    `
}


const inputElement = (type, id, placeholder) => {
    return `
        <div class="${id}">
            <input type="${type}" id="${id}" name="${id}" placeholder="${placeholder}">
        </div>
    `
}


const inputElCheck= (type, id, label, span) => {
    return `
        <div class="${id}">
            <input type="${type}" id="${id}" name="${id}">
            <label for="${id}">${label}<a href="#">${span}</a></label>
        </div>
    `
}


const formElement = `
    <form id="form">
        ${title("Visszajelzés")}
        ${inputElement("text", "subject", "Tárgy")}
        ${inputElement("text", "comment", "Megjegyzés")}
        ${inputElCheck("checkbox", "terms", "Elolvastam és elfogadom az ", "adatkezelési tájékoztatót.")}
        <button>MENTÉS</button>
    </form>
`

function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", formElement);
}

window.addEventListener("load", loadEvent);