console.log('javascript connected.')

// GLOBAL VARIABLES ===============================
const url = "http://localhost:3000/notes"
const form = document.getElementById('notes-form')

// EL FUNCTIONS
function noteSubmit(event) {
  event.preventDefault()
  console.log('Save button was pressed!')
}

// EVENT LISTENERS ================================
form.addEventListener('submit', noteSubmit)


// CRUD FUNCTIONS =================================
// Create
// Read
// Update
// Delete

// DOM FUNCTIONS ==================================


// CALL MAIN FUNCTION =============================