async function getResult() {
    position_value = document.querySelector('input[name="position"]:checked').value;
    color_value = document.querySelector('input[name="color"]:checked').value;
    difficulty_value = document.querySelector('input[name="difficulty"]:checked').value;
    body_obj = {
        color: color_value,
        position: position_value,
        difficulty: difficulty_value
    };
    
    var request = new Request('/result', {
                headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                        },
                method: 'POST',
                body: JSON.stringify(body_obj)
                });

    const response = await fetch(request);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    document.getElementById('best-opening').innerHTML = data["opening"]
}

var q0 = document.getElementById("q0");
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var result = document.getElementById("result");

var next0 = document.getElementById('next0')
var back0 = document.getElementById('back0')
var next1 = document.getElementById('next1')
var back1 = document.getElementById('back1')
var next2 = document.getElementById('next2')
var back2 = document.getElementById('back2')
var next3 = document.getElementById('next3')
var back3 = document.getElementById('back3')

var next4 = document.getElementById('next4')

document.addEventListener('DOMContentLoaded', function() {
    let query = window.matchMedia("(max-width: 767px)");
    if (query.matches) {
        
        next0.onclick = function() {
            q0.style.left = "-650px";
            q1.style.left = "15px";
        }
        next1.onclick = function() {
            q1.style.left = "-650px";
            q2.style.left = "15px";
        }
        next2.onclick = function() {
            q2.style.left = "-650px";
            q3.style.left = "15px";
        }
        next3.onclick = function() {
            q3.style.left = "-650px";
            q4.style.left = "15px";
        }
        back1.onclick = function() {
            q1.style.left = "15px";
            q2.style.left = "650px";
        }
        back2.onclick = function() {
            q2.style.left = "15px";
            q3.style.left = "650px";
        }
        back3.onclick = function() {
            q3.style.left = "15px";
            q4.style.left = "650px";
        }

        next4.onclick = function() {
            q4.style.left = "-650px";
            result.style.left = "15px";

            getResult()
        }
    } else {
        
        next0.onclick = function() {
            q0.style.left = "-650px";
            q1.style.left = "50px";
        }
        next1.onclick = function() {
            q1.style.left = "-650px";
            q2.style.left = "50px";
            
        }
        next2.onclick = function() {
            q2.style.left = "-650px";
            q3.style.left = "50px";
        }
        next3.onclick = function() {
            q3.style.left = "-650px";
            q4.style.left = "50px";
        }
        back1.onclick = function() {
            q1.style.left = "50px";
            q2.style.left = "650px";
        }
        back2.onclick = function() {
            q2.style.left = "50px";
            q3.style.left = "650px";
        }
        back3.onclick = function() {
            q3.style.left = "50px";
            q4.style.left = "650px";
        }
        
        next4.onclick = function() {
            q4.style.left = "-650px";
            result.style.left = "50px";

            getResult()
        }
    }
});