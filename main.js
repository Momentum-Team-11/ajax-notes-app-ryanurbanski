console.log('javascript connected.')

// GLOBAL VARIABLES ===============================
const url = "http://localhost:3000/notes"
const form = document.getElementById('notes-form')
const notesList = document.getElementById('notes-list')

// EVENT LISTENERS ================================
form.addEventListener('submit', noteSubmit)

// EL FUNCTIONS
function noteSubmit(event) {
  event.preventDefault()
  form.reset()
  console.log('Save button was pressed!')
}

// GENERAL FUNCTIONS
function main() {
}

function printNoteToPage (dbObject) {
  let note = dbObject
  notesList.innerHTML += `ID: ${note.id} <br> Title: ${note.title} <br> Body: ${note.body} <hr> <button>Delete</button><button>Edit</button><br><br><br>`
}

// CRUD FUNCTIONS =================================
// Create
// Read
function getNotes () {
  console.log('Get notes function was called.');
  fetch(url)
  .then ((response) => response.json())
  .then ((data)=> {
    console.log('The data retrieve from db was: ', data);
    for (let i of data) {
      console.log(i)
      console.log(typeof i)
      printNoteToPage(i)
    }
  })
}
// Update
// Delete

// DOM FUNCTIONS ==================================


// CALL MAIN FUNCTION =============================
getNotes()
main()
