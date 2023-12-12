# Interactive rating component

## Live Website

[https://interactive-rating-component-neon.vercel.app/](https://interactive-rating-component-neon.vercel.app/)

## Screenshot

![Screenshot](/design/desktop-design.jpg)

## Tech Stack

- HTML
- CSS
- JavaScript
- 
=================================================================================
This code represents a basic structure for an interactive rating component, including HTML markup for the rating card and the thank you card. The interactivity and functionality would depend on the associated CSS styles and JavaScript code, which are linked externally in the provided code.

Head Section:

Meta tags for character set and viewport.
Favicon for the website.
Preconnect and link to Google Fonts for the "Overpass" font.
Links to external CSS and JavaScript files.
Title of the document.
Body Section:

Main container with two div elements: "rating-card" and "feedback-card."
Rating Card:

Star icon using SVG.
Heading and description.
Rating buttons (1 to 5).
Submit button.
Thank You Card:

Thank you illustration.
Badge displaying the selected rating.
Thank you message.
=============================================================

Responsive styles for screens with a maximum width of 375px, adjusting padding for the rating card and feedback card.
This CSS code provides a well-organized and styled structure for an interactive rating component, with flexibility for responsive design.

Root Variables:

Defines color variables using HSL values for white, light grey, medium grey, dark blue, very dark blue, and orange.
Global Reset:

Applies box-sizing to all elements as border-box.
Removes default margin and padding.
Sets the font family to "Overpass."
HTML and Body Styles:

Sets the height of the HTML and body to 100%.
Defines the base font size for responsive design.
Container Styles:

Defines styles for the main container, which is a flex container with specific padding and maximum width.
Rating Card Styles:

Styles for the rating card, including background, padding, and border-radius.
Styles for the star icon within the rating card.
Button and Vote Button Styles:

General styles for buttons and specific styles for the vote buttons, including size, border-radius, and color transitions.
Feedback Card Styles:

Styles for the feedback card, including background, padding, text alignment, flex layout, and border-radius.
Styles for images, the badge displaying the selected rating, and the title within the feedback card.
Hidden Class:

Styles for hiding elements using the display: none property.
Key frames Animation:

Defines a fadeIn animation using key frames for opacity and scale.
Media Query:

============================================================================
This JavaScript code handles the interactivity of the rating component, ensuring that the selected rating is visually highlighted and can be submitted for further processing.

Selecting DOM Elements:

The code uses document.querySelectorAll and document.getElementById to select various DOM elements such as number buttons, submit button, rating card, feedback card, and the element displaying the selected rating.
Event Handler for Number Buttons (handleClickNumberBtn):

This function is triggered when a number button is clicked.
It removes the "active" class from all number buttons using removeAllActiveClass.
Adds the "active" class to the clicked button.
Updates the selectedRating variable with the value of the clicked button.
Function to Remove "Active" Class (removeAllActiveClass):

Iterates through all number buttons and removes the "active" class.
Event Handler for Rating Submission (handleRatingSubmit):

Checks if a rating is selected. If not, it displays an alert message.
Updates the feedback card with the selected rating.
Shows the feedback card and hides the rating card.
Event Listeners:

Iterates through each number button and adds a click event listener to trigger handleClickNumberBtn when a button is clicked.
Adds a click event listener to the submit button to trigger handleRatingSubmit when clicked.
==================================================================
