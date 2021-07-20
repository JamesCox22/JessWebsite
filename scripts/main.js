"use strict";

function getContent(pageId) {
  switch (pageId) {
    case 'Home':
      page.innerHTML = "<p>My name is <strong>Jessica Cox</strong> and I am a <strong>Certified Life Coach!</strong>"
      break;
    case 'MeetJess':
      page.innerHTML = "<p>Hi! My name is Jessica Robyn Cox!</p>"
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
