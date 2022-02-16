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

// CRUD FUNCTIONS =================================
// Create
function createNote (titleText, bodyText) {
  fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      title: titleText,
      body: bodyText,
    }),
  })
  .then((response) => response.json())
  .then((data) => {
    // Do work
  })
}
/**
 * This function will take 2 text inputs for the Note title
 * and description and then create a new database object
 */
function postRequest (titleText, bodyText) {
  method: 'POST',
  headers: {'Content-Type': 'applcation/json'},
  body: JSON.stringify({
    title: 
  })
}

// Read
function getNotes () {
  fetch(url)
  .then ((response) => response.json())
  .then ((data)=> {
    for (let i of data) {
      printNoteToPage(i)
    }
  })
}
// Update
// Delete

// DOM FUNCTIONS ==================================


// GENERAL FUNCTIONS
function main() {
}

function printNoteToPage (dbObject) {
  let note = dbObject
  notesList.innerHTML += `ID: ${note.id} <br> Title: ${note.title} <br> Body: ${note.body} <hr> <button>Delete</button><button>Edit</button><br><br><br>`
}

// CALL MAIN FUNCTION =============================
getNotes()
main()
