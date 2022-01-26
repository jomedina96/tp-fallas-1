async function getResult() {
    console.log('get result')
    color_value = document.querySelector('input[name="color"]:checked').value;
    difficulty = document.querySelector('input[name="difficulty"]:checked').value;
    position = document.querySelector('input[name="position"]:checked')  === null ? "" : document.querySelector('input[name="position"]:checked').value;
    style = document.querySelector('input[name="style"]:checked') === null ? "" : document.querySelector('input[name="style"]:checked').value;
    minimum_time = document.querySelector('input[name="minimum_time"]:checked') === null ? "" : document.querySelector('input[name="minimum_time"]:checked').value;
    objective = document.querySelector('input[name="objective"]:checked') === null ? "" : document.querySelector('input[name="objective"]:checked').value;
    body_obj = {
        color: color_value,
        position,
        difficulty,
        style: style,
        minimum_time: minimum_time,
        objective: objective
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
    
    var data = await response.json();
    console.log(data);
    
    if (data["name"] == ""){
        document.getElementById('opening-name').innerHTML = "No pudimos encontrar una apertura en base a los criterios que eligió"
    }
    else{
        document.getElementById('opening-name').innerHTML = data["name"]
        document.getElementById('opening-image').src = "static/imgs/" + data["img"]
        document.getElementById('opening-link').href = data["link"]
        document.getElementById('opening-link').target = "_blank"
    }
}

var q0 = document.getElementById("q0");
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
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
var back4 = document.getElementById('back4')
var next5 = document.getElementById('next5')
var back5 = document.getElementById('back5')

var next6 = document.getElementById('next6')
var next10 = document.getElementById('next10')
var next11 = document.getElementById('next11')
var next12 = document.getElementById('next12')

const showResult = function() {
    console.log('enviar 1')
    q6.style.left = "-650px";
    q5.style.left = "-650px";
    q4.style.left = "-650px";
    q3.style.left = "-650px";
    result.style.left = "15px";
    getResult()
}

const showResultTwo = function() {
    console.log('enviar 2')
    q6.style.left = "-650px";
    q5.style.left = "-650px";
    q4.style.left = "-650px";
    q3.style.left = "-650px";
    result.style.left = "50px";

    getResult()
}

document.addEventListener('DOMContentLoaded', function() {
    let query = window.matchMedia("(max-width: 767px)");
    console.log('DOMContentLoaded')
    if (query.matches) {
        console.log('match')
        
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
            getResult()
        }
        next3.onclick = function() {
            q3.style.left = "-650px";
            q4.style.left = "15px";
            getResult()
        }
        next4.onclick = function() {
            q4.style.left = "-650px";
            q5.style.left = "15px";
            getResult()
        }
        next5.onclick = function() {
            q5.style.left = "-650px";
            q6.style.left = "15px";
            getResult()
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
        back4.onclick = function() {
            q4.style.left = "15px";
            q5.style.left = "650px";
        }
        back5.onclick = function() {
            q5.style.left = "15px";
            q6.style.left = "650px";
        }

        next6.onclick = showResult
        next10.onclick = showResult
        next11.onclick = showResult
        next12.onclick = showResult
    } else {
        console.log('not match')
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
            console.log('')
            getResult()
        }
        next4.onclick = function() {
            q4.style.left = "-650px";
            q5.style.left = "50px";
            getResult()
        }
        next5.onclick = function() {
            q5.style.left = "-650px";
            q6.style.left = "50px";
            getResult()
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
        back4.onclick = function() {
            q4.style.left = "50px";
            q5.style.left = "650px";
        }
        back5.onclick = function() {
            q5.style.left = "50px";
            q6.style.left = "650px";
        }
        
        next6.onclick = showResultTwo
        next10.onclick = showResultTwo
        next11.onclick = showResultTwo
        next12.onclick = showResultTwo
    }
});