function checkLimit() {
    let id = document.getElementById("id").value;
    let httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let data = JSON.parse(httpRequest.responseText);
                document.getElementById("result").innerHTML = "<p>Result: " + JSON.stringify(data) + "</p>";
            } else if (httpRequest.status === 404) {
                document.getElementById("result").innerHTML = "<p>Error: ID not found</p>";
            } else {
                document.getElementById("result").innerHTML = "<p>Error: Failed to check limit</p>";
            }
        }
    };

    httpRequest.open("POST", 'http://localhost:8080/api/lottery/check-limit/' + id);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send();
}
