// Adding event listeners to the submit button and on the return key

submit.addEventListener("click", validateForm)
treeHeight.addEventListener("keydown", returnCheck)
treeChar.addEventListener("keydown", returnCheck)

// Assigning input values to an object after event validation

function treeCapture() {
  var tree = {
    height: treeHeight.value,
    char: treeChar.value
  };
  buildTree(tree);
}

// Function to check whether both input fields are completed

function validateForm() {
  if (treeHeight.value == "" || treeChar.value === "") {
    alert("Please fill out both fields to continue.")
  } else {
    treeCapture();
  }
}

// Function to check whether the enter key was pressed

function returnCheck() {
  if (event.keyCode === 13) {
    validateForm();
  }
}

// Function to build the tree

function buildTree(tree) {
  for (i = 1; i <= tree.height; i++) {
    console.log(" ".repeat(tree.height - i) + tree.char.repeat((i * 2) - 1) + " ".repeat(tree.height - i))
  }
}
