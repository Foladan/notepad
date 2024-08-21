document.addEventListener('DOMContentLoaded', () => {
    const addNoteButton = document.getElementById('add');
    const notesContainer = document.getElementById('note-box');
    

    addNoteButton.addEventListener('click', () => addNewNote());

    function addNewNote() {
        const note = document.createElement('div');
        note.classList.add('note');
        
        note.innerHTML = `
        <div class="tool-bar">
        <button class="edit"><i class="fas fa-edit fa-2x"></i></button>
        <button class="delete"><i id="delete" class="fa fa-trash-alt fa-2x"></i></button>
        
        </div>
           
            <textarea></textarea>
        `;

        notesContainer.appendChild(note);

        const editButton = note.querySelector('.edit');
        const deleteButton = note.querySelector('.delete');
        const saveButton = note.querySelector('.save');
        const textarea = note.querySelector('textarea');



        editButton.addEventListener('click', () => {
            textarea.removeAttribute('disabled');
            textarea.focus();
            saveButton.style.display = 'inline';
        });


        deleteButton.addEventListener('click', () => note.remove());
    }

});
