// 1. Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// 2. Add an event listener for when the request loads successfully
xhr.addEventListener('load', () => {
    // xhr.response contains the data returned by the server
    console.log(xhr.response);
});

// 3. Initialize (configure) the request
// 'GET' → HTTP method
// 'https://supersimplebackend.dev' → the URL we are requesting
xhr.open('GET', "https://supersimplebackend.dev");
xhr.open('GET', "https://supersimplebackend.dev/hello");
// xhr.open('GET', "https://supersimplebackend.dev/documentation");

// 4. Send the request to the server
xhr.send();