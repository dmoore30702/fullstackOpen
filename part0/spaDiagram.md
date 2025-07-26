Sequence Diagram of SPA: https://studies.cs.helsinki.fi/exampleapp/spa 

'''
mermaid
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    server->>browser: HTML Document
    
    browser-->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: CSS Document
    browser-->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server-->>browser: JS Code

    Note: The html document calls for a CSS and JS document which the browser sends a GET request to the server for.

    browser-->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser: JSON Data

    Note: The JS code than runs which sends a GET request for JSON data. Once the data is recieved the DOM is edited through the client.

    Note: Now when adding a new note

    browser-->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa 

    Note: Server does not have to send anything back as the JS handles the updated data
'''