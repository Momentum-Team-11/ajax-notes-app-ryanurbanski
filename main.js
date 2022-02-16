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


// CRUD FUNCTIONS =================================
// Create
// Read
// Update
// Delete

// DOM FUNCTIONS ==================================


// CALL MAIN FUNCTION =============================