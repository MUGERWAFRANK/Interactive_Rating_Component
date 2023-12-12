// Selecting DOM elements
const numberButtons = document.querySelectorAll(".vote-btn");
const submitRatingBtn = document.getElementById("submitRatingBtn");
const ratingCard = document.getElementById("ratingCard");
const feedbackCard = document.getElementById("feedbackCard");
const numberRating = document.getElementById("numberRating");
let selectedRating = null;

// Event handler for clicking number buttons
function handleClickNumberBtn({ target }) {
  // Remove active class from all buttons
  removeAllActiveClass();
  
  // Add active class to the clicked button
  target.classList.add("active");

  // Update selectedRating with the value of the clicked button
  selectedRating = target.value;
}

// Function to remove "active" class from all number buttons
function removeAllActiveClass() {
  numberButtons.forEach((button) => button.classList.remove("active"));
}

// Event handler for rating submission
function handleRatingSubmit() {
  // Check if a rating is selected
  if (!selectedRating) {
    return alert("Please select a number rating!");
  }

  // Update the feedback card with the selected rating
  numberRating.textContent = selectedRating;

  // Show the feedback card and hide the rating card
  feedbackCard.classList.remove("hidden");
  ratingCard.classList.add("hidden");
}

// Event listeners for number buttons and submit button
numberButtons.forEach((button) => {
  button.addEventListener("click", handleClickNumberBtn);
});

submitRatingBtn.addEventListener("click", handleRatingSubmit);
