let id = 0;
const addNote = document.querySelector(".noteCell");
const addNotes = document.querySelector(".note");
const remove = document.getElementsByClassName("noteCell");


document.getElementById("add").addEventListener("click", function () {
    let clone = addNote.cloneNode(true);
    clone.id = "note " + id++;
    addNotes.appendChild(clone);
    addNote.after(clone);
})

$(addNotes).on('click', '#btn', function () {
    if (remove.length  > 1) {
        $(this).closest('.noteCell').remove();
    }
})

function drag(event) {
    let style = window.getComputedStyle(event.target, null);
    let str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    event.dataTransfer.setData("Text", str);
}

function drop(event) {
    let offset = event.dataTransfer.getData("Text").split(',');
    let dm = document.getElementById(offset[2]);
    dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    return false;
}

function dragOver(event) {
    event.preventDefault();
    return false;
}