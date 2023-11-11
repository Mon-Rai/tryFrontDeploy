function checkLimits() {
    let numbers = document.getElementById("numbers").value.split(',').map(Number);
    let httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let data = JSON.parse(httpRequest.responseText);
                document.getElementById("result").innerHTML = "<p>Result: " + JSON.stringify(data) + "</p>";
            } else {
                document.getElementById("result").innerHTML = "<p>Error: Failed to check limits</p>";
            }
        }
    };

    httpRequest.open("POST", 'http://localhost:8080/api/lottery/check-limits');
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(numbers));
}
