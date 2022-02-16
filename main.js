console.log('javascript connected.')

// GLOBAL VARIABLES ===============================
const url = "http://localhost:3000/notes"
const form = document.getElementById('notes-form')

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

// CRUD FUNCTIONS =================================
// Create
// Read
function getNotes () {
  console.log('Get notes function was called.');
  fetch(url)
  .then ((response) => response.json())
  .then ((data)=> {
    console.log('The data retrieve from db was: ', data);
  })
}
// Update
// Delete

// DOM FUNCTIONS ==================================


// CALL MAIN FUNCTION =============================
getNotes()
main()
