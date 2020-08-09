const addNote = document.querySelector(".note");
let id = 0;

document.getElementById("add").addEventListener("click", function () {
    let clone = addNote.cloneNode(true);
    clone.id = "note " + id++;
    document.body.appendChild(clone);
    addNote.after(clone);
})

document.getElementById("remove").addEventListener("click", function () {
    let remove = document.getElementById("input");
    let removeNote = document.getElementById("input1");
    remove.remove();
    removeNote.remove();
})