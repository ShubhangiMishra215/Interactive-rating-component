// Get all rating buttons
const ratingButtons = document.querySelectorAll('.rating__star button');

// Get the submit button
const submitButton = document.querySelector('.rating__submit');

// Get the rating and thank you sections
const ratingCard = document.querySelector('.card__rating');
const thankYouCard = document.querySelector('.card__thankyou');

// Get the span to show selected rating
const selectedRating = document.getElementById('selected_rating');

// Store selected rating
let rating = null;

// When a rating button is clicked
ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    rating = button.textContent;

    // Remove styles from all buttons
    ratingButtons.forEach(btn => {
      btn.style.backgroundColor = "var(--color-img)";
      btn.style.color = "var(--secondary-color)";
    });

    // Highlight selected button
    button.style.backgroundColor = "var(--text-color)";

    button.style.color = "var(--background-color)";
  });
});

// When submit is clicked
submitButton.addEventListener('click', () => {
  if (rating === null) {
    alert("Please select a rating first!");
    return;
  }

  // Hide rating card and show thank you card
  ratingCard.style.display = "none";
  thankYouCard.style.display = "flex";

  // Show the selected rating
  selectedRating.textContent = rating;
});
