var languagesSupported = [  'c'  ,'cpp' ,'c#'  ,'css'  ,'dart'  ,'docker', 'html'  ,'java'  ,'javascript' ,'json'  ,'jsx'  ,'kotlin'  ,'lua'  ,'markdown'  ,'php' ,'python' ,'sass'  ,'shell' ,'bash'  ,'sql' ,'swift' ,'typescript', 'vue', 'xml'];
var nightMode = 0;

startParticles('#2b2b2b');
languageAdder();

document.getElementById('sun').addEventListener("click",function(){
    if(nightMode == 0 ){
        nightMode = 1;
    startParticles('#ECEFF1');
    document.querySelector('body').classList.add('nightMode');
    document.getElementById('sun-svg').classList.add('nightMode');
    document.getElementById('hand-svg').classList.add('nightMode');
    document.getElementById('about-toolcave').setAttribute("style","background:#ECEFF1;")
    document.getElementById('about-toolcave').children[0].setAttribute("style","color:#2b2b2b");
    }else{
        nightMode = 0;
        startParticles('#2b2b2b');
    document.querySelector('body').classList.remove('nightMode');
    document.getElementById('sun-svg').classList.remove('nightMode');
    document.getElementById('hand-svg').classList.remove('nightMode');
    document.getElementById('about-toolcave').setAttribute("style","background:#2b2b2b;");
    document.getElementById('about-toolcave').children[0].setAttribute("style","color:#ECEFF1");
    }
});

function setScale() {
    var scale;
    if (screen.width > 900 || screen.height > 900) {
        var scale = 1;
    } else {
        if (screen.width > screen.height) {
            scale = 0.5;
        } else {
            if (screen.width > 400) {
                scale = 0.9;
            } else if (screen.width <= 400 && screen.width > 350) {
                scale = 0.8;
            } else if (screen.width <= 350 && screen.width > 290) {
                scale = 0.7;
            } else {
                scale = 0.65;
            }
        }
    }
    var viewportmeta = document.querySelector('meta[name="viewport"]');
    viewportmeta.content = "width=device-width, initial-scale=" + scale;
}

window.addEventListener('orientationchange', function () {
    setScale();
});

window.addEventListener('resize', function () {
    setScale();
});

setScale();

function startParticles(color){
    particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": color
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "black"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 0,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 80,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            //"direction": "top-right",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
    }
});
}

function languageAdder(){
    for(let index = 0; index<languagesSupported.length;index++){
        var option =  document.createElement('option');
        option.setAttribute("value",languagesSupported[index]);
        option.innerHTML = languagesSupported[index];
        document.getElementById('language').appendChild(option);
     }
}


var modal = document.getElementById("codeModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}