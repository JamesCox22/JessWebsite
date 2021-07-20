"use strict";

function getContent(pageId) {
    if (pageId === 'Home') {
        page.innerHTML = "<p>My name is <strong>Jessica Cox</strong> and I am a <strong>Certified Life Coach!</strong>";
}   else if (pageId === 'MeetJess') {
        page.innerHTML = "<p>Hi! My name is Jessica Robyn Cox!</p>";
}   else if (pageId === 'WorkWithMe') {
        page.innerHTML = "<p>I am currently accepting applications for new clients...</p>";
}   else if (pageId === 'Contact') {
        page.innerHTML = "<p>Here is my number 780-555-2139</p>";
}
}
