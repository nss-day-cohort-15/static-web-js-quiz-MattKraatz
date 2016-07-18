// Adding event listeners to the submit button and on the return key

submit.addEventListener("click", validateForm)
treeHeight.addEventListener("keydown", returnCheck)
treeChar.addEventListener("keydown", returnCheck)

// Function to check whether both input fields are completed

function validateForm() {
  if (treeHeight.value == "" || treeChar.value === "") {
    alert("Please fill out both fields to continue.")
  } else {
    buildTree();
  }
}

// Function to check whether the enter key was pressed

function returnCheck() {
  if (event.keyCode === 13) {
    validateForm();
  }
}

// Function to build the tree

function buildTree() {
  for (i = 1; i <= treeHeight.value; i++) {
    console.log(" ".repeat(treeHeight.value - i) + treeChar.value.repeat((i * 2) - 1) + " ".repeat(treeHeight.value - i))
  }
}
