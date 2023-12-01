- we click on the app link
- This sends GET request to the App server for HTML file
- Server returns HTML file
- HTML file has two links 1. css 2. script
- Then Browser sends a GET request for the CSS file
- Server returns CSS file
- Then Browser sends another GET request for JS file
- Server returns JS file
- Browser runs the JS file code
- JS code contains a send request to fetch JSON file.
- Server then returns a JSON file
- When the data has been fetched, The browser executes an event handler
- The browser then run this event handler parses the JSON file and displays
  the JSON file in the way defined in JS code.

NOW, WE'LL SEE HOW THE NEW NOTE IS ADDED USING FORM

- After we submit a new note it goes to the xyz..url/new_note location.
- This new_note then redirects to the location xyz..url/notes where all the notes are situated.
- This way of URL is considered old fashioned and unacceptable as they don't follow the
  conventions of RESTful APIs.
- The notes page uses AJAX to fetch the notes data.
- Submitting the forms still uses traditional mechanisms to submit forms.
