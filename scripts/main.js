"use strict";

function getContent(pageId) {
  switch (pageId) {
    case 'Home':
      page.innerHTML = "<p>My name is Jessica Cox and I am a Certified Confidence and Success Coach!</p>"
      break;
    case 'MeetJess':
      page.innerHTML = "<p>Hi! My name is Jessica Cox! I am a Jay Shetty Certified Confidence and Success Coach. I help unfulfilled women, who want more in life, to step into their confidence and create success on their own terms.</p>"
      break;
    case 'WorkWithMe':
      page.innerHTML = "<p>I am currently accepting applications for new clients...</p>"
      break;
    case 'Contact':
      page.innerHTML = "<p>Here is my number 780-555-2139</p>"
      break;
    default:
      page.innerHTML = "Page not found.";
  }

}
