let id = 0;

(() => {
    document.getElementById("addButton").addEventListener("click", function () {
        createElement();
    });
    document.getElementById("save-button").addEventListener("click", saveToStorage);
    document.getElementById("load-button").addEventListener("click", loadFromStorage);
})();



function createElement(elementTitle="", elementNote="") {
    id++;
    let elementId = "element" + id;
    let titleId = "title" + id;
    let noteId = "note" + id;
    let buttonId = "button" + id;

    let newNote = document.createElement("DIV");
    newNote.setAttribute("class", "newNote");
    newNote.setAttribute("id", elementId);

    let title = document.createElement("TEXTAREA");
    title.setAttribute("class", "title");
    title.setAttribute("id", titleId);
    title.setAttribute("placeholder", "title");
    title.innerHTML = elementTitle;

    let note = document.createElement("TEXTAREA");
    note.setAttribute("class", "note");
    note.setAttribute("id", noteId);
    note.setAttribute("placeholder", "your note");
    note.innerHTML = elementNote;

    let deleteButton = document.createElement("BUTTON");
    deleteButton.setAttribute("class", "removeButton")
    deleteButton.setAttribute("id", buttonId);
    deleteButton.innerHTML = '<i class="fas fa-trash-alt fa-2x"/>';
    deleteButton.addEventListener('click', function () {
        localStorage.removeItem(this.parentElement.id);
        this.parentElement.remove();
    })
    newNote.appendChild(title);
    newNote.appendChild(note);
    newNote.appendChild(deleteButton);
    document.getElementById("noteCell").appendChild(newNote);

    $(function() {
        $(".newNote").draggable();
    });
}


function saveToStorage() {
    let elementList = document.getElementsByClassName("newNote");
    for (let index = 0; index < elementList.length; index++) {
        let element = elementList[index];
        let key = element.id;

        let elementContent = {'title': element.querySelector('.title').value,
                            'note': element.querySelector('.note').value};

        let elementToSave = JSON.stringify(elementContent);
        localStorage.setItem(key, elementToSave);
    }
}

function loadFromStorage(title, note) {
    for (let index = 0; index < localStorage.length; index++) {
        let key = localStorage.key(index);
        let elementContent = localStorage.getItem(key);
        let elementToLoad = JSON.parse(elementContent);

        title = elementToLoad.title;
        note = elementToLoad.note;
        createElement(title, note);
    }
}

