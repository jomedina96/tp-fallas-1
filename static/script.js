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

var list = document.getElementById('list')
var item1 = document.getElementById('first')
var item2 = document.getElementById('second')
var item3 = document.getElementById('third')
var item4 = document.getElementById('fourth')
var item5 = document.getElementById('fifth')
var item6 = document.getElementById('sixth')

const showResult = function() {
    console.log('enviar 1')
    list.style.display = "none";

    q6.style.left = "-650px";
    q5.style.left = "-650px";
    q4.style.left = "-650px";
    q3.style.left = "-650px";
    result.style.left = "15px";
    getResult()
}

const showResultTwo = function() {
    console.log('enviar 2')
    list.style.display = "none";

    q6.style.left = "-650px";
    q5.style.left = "-650px";
    q4.style.left = "-650px";
    q3.style.left = "-650px";
    result.style.left = "50px";

    getResult()
}

let q1_map = new Map([["white", "Blancas"], ["black", "Negras"]]);
let q2_map = new Map([["1", "Principiante"], ["3", "Avanzado"], ["5", "Experto"]]);
let q3_map = new Map([["open", "Abierta"], ["semi-open", "Semi-abierta"], ["closed", "Cerrada"]]);
let q4_map = new Map([["dinamic", "Dinámica"], ["positional", "Posicional"]]);
let q5_map = new Map([["1", "Bala"], ["2", "Blitz"], ["3", "Rápido"], ["4", "Clásico"]]);
let q6_map = new Map([["win", "Ganar"], ["stalemate", "Tratar de empatar"]]);

const clickedOption = function(question) {
    switch (question) {
        case 1:
            item1.style.display = '';
            var value = document.querySelector('input[name="color"]:checked').value;
            item1.innerHTML = '1. ' + q1_map.get(value);
            break;
        case 2:
            item2.style.display = '';
            var value = document.querySelector('input[name="difficulty"]:checked').value;
            item2.innerHTML = '2. ' + q2_map.get(value);
            break;
        case 3:
            item3.style.display = '';
            var value = document.querySelector('input[name="position"]:checked').value;
            item3.innerHTML = '3. ' + q3_map.get(value);
            break;
        case 4:
            item4.style.display = '';
            var value = document.querySelector('input[name="style"]:checked').value;
            item4.innerHTML = '4. ' + q4_map.get(value);
            break;
        case 5:
            item5.style.display = '';
            var value = document.querySelector('input[name="minimum_time"]:checked').value;
            item5.innerHTML = '5. ' + q5_map.get(value);
            break;
        case 6:
            item6.style.display = '';
            var value = document.querySelector('input[name="objective"]:checked').value;
            item6.innerHTML = '6. ' + q6_map.get(value);
            break;
    }
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