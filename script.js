
const button = document.getElementById('btn');

const updateLSData = () =>{
      const textAreaData = document.querySelector('textarea');
      const notes = [];
      textAreaData.forEach((note)=>{
            return notes.push(note.value);
      })

      localStorage.setItem('notes', JSON.stringify(notes));
}

const addNote = (text = '') =>
{
    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
    <div class="operation">
           <button class="edit"> <i class="fas fa-edit"></i></button>
           <button class="delete"><i class="fas fa-trash-alt"></i></button> 
    </div>

    <div class="main"></div>
    <textarea class="text"></textarea>

    <div class="main ${text ? "" : "hidden"} "></div>
    <textarea class="text ${text ? "hidden" : ""}></textarea> `;
   
    note.insertAdjacentHTML('afterbegin',htmlData);
    document.body.appendChild(note);

    //getting references
    const edit = note.querySelector('.edit');
    const del = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    //delete note
    del.addEventListener('click', () =>{
        note.remove();
    });

    //edit
    edit.addEventListener('click',()=>{
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })

    textarea.addEventListener('change' , (event)=>{
         const value = event.target.value;
         updateLSData();
    })

    textarea.value=text;
    main.innerHTML=text;

}

//getting data back from local storage
const notes = JSON.parse(localStorage.getItem('notes'));
button.addEventListener('click',() => addNote());