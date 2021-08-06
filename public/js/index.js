var languagesSupported = ['abap'  ,'actionscript-3'  ,'ada'  ,'apache'  ,'apex'  ,'apl'  ,'applescript'  ,'asm'  ,'awk'  ,'bat' ,'batch'  ,'c'  ,'clojure' ,'clj'  ,'cobol'  ,'coffee'  ,'cpp'  ,'crystal'  ,'csharp' ,'c#'  ,'css'  ,'d'  ,'dart'  ,'diff'  ,'docker'  ,'elixir'  ,'elm'  ,'erb'  ,'erlang'  ,'fsharp' ,'f#'  ,'gherkin'  ,'git-commit'  ,'git-rebase'  ,'gnuplot'  ,'go'  ,'graphql'  ,'groovy'  ,'hack'  ,'haml'  ,'handlebars' ,'hbs'  ,'haskell'  ,'hcl'  ,'hlsl'  ,'html'  ,'ini'  ,'java'  ,'javascript' ,'js'  ,'jinja-html'  ,'json'  ,'jsonc'  ,'jsonnet'  ,'jsx'  ,'julia'  ,'kotlin'  ,'latex'  ,'less'  ,'lisp'  ,'logo'  ,'lua'  ,'make' ,'makefile'  ,'markdown' ,'md'  ,'matlab'  ,'mdx'  ,'nginx'  ,'nim'  ,'nix'  ,'objective-c' ,'objc'  ,'objective-cpp'  ,'ocaml'  ,'pascal'  ,'perl'  ,'php'  ,'plsql'  ,'postcss'  ,'powershell' ,'ps' ,'ps1'  ,'prisma'  ,'prolog'  ,'pug' ,'jade'  ,'puppet'  ,'purescript'  ,'python' ,'py'  ,'r'  ,'raku' ,'perl6'  ,'razor'  ,'riscv'  ,'ruby' ,'rb'  ,'rust'  ,'sas'  ,'sass'  ,'scala'  ,'scheme'  ,'scss'  ,'shaderlab' ,'shader'  ,'shellscript' ,'shell' ,'bash' ,'sh' ,'zsh'  ,'smalltalk'  ,'solidity'  ,'sparql'  ,'sql'  ,'ssh-config'  ,'stylus' ,'styl'  ,'svelte'  ,'swift'  ,'system-verilog'  ,'tcl'  ,'tex'  ,'toml'  ,'tsx'  ,'turtle'  ,'twig'  ,'typescript' ,'ts'  ,'vb' ,'cmd'  ,'verilog'  ,'vhdl'  ,'viml'  ,'vue'  ,'wasm'  ,'wenyan' ,'文言'  ,'xml'  ,'xsl'  ,'yaml'];
var rawCodeRecieved;


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
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
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
            "enable": true,
            "distance": 80,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "top-right",
            "random": false,
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


function languageAdder(){
    for(let index = 0; index<languagesSupported.length;index++){
        var option =  document.createElement('option');
        option.setAttribute("value",languagesSupported[index]);
        option.innerHTML = languagesSupported[index];
        document.getElementById('language').appendChild(option);
        document.getElementById('loader').style.display = "none";
     }
     
}
/*document.getElementById('code').addEventListener('paste', function(e) {
    e.preventDefault();
    var text = '';
    if (e.clipboardData || e.originalEvent.clipboardData) {
      text = (e.originalEvent || e).clipboardData.getData('text/plain');
    } else if (window.clipboardData) {
      text = window.clipboardData.getData('Text');
    }
    if (document.queryCommandSupported('insertText')) {
      document.execCommand('insertText', false, text);
    } else {
      document.execCommand('paste', false, text);
    }
});*/

var codeFormatted;
async function sendCode(){
    document.getElementById('loader').style.display = "block";
    console.log(document.getElementById('code').value);
    var rawCode = document.getElementById('code').value;
    var language = document.getElementById('language').value;
    var expiry = document.getElementById('expiry').value;
        
        let json = {
            raw_code:rawCode,
            language:language,
            expiry:expiry
        }
        
        const Http = new XMLHttpRequest();
        const url = 'https://newcodecave.herokuapp.com/addCode';
        Http.open("POST", url);
        Http.setRequestHeader('Content-Type', 'application/json');
        Http.send(JSON.stringify(json));
        Http.onload = function () {
            //document.getElementById('loader').style.display = "none";
            var data = JSON.parse(this.response);
            console.log(data);
            if(data.error == ""){
                document.getElementById('loader').style.display = "none";
                document.location.href = data.url;
            }
        }
            
}

async function codeHighlight(code2,language){
    console.log('came here');
   await shiki
    .getHighlighter({
      theme: 'min-dark'
    })
    .then(highlighter => {
        console.log('came here 2');
      codeFormatted = highlighter.codeToHtml(code2, language);
      //console.log(codeFormatted);
    })
  }


  function getLinkData(){
      console.log(location.href);
      var link = location.href.split('/')[3];
      const Http = new XMLHttpRequest();
      const url = 'https://newcodecave.herokuapp.com/'+link;
      Http.open("GET", url);
      Http.setRequestHeader('Content-Type', 'application/json');
      Http.send();
      Http.onload = function () {
          //document.getElementById('loader').style.display = "none";
          var data = JSON.parse(this.response);
          console.log(data.data);
            if(data.error == ""){
                    document.getElementById('loader').style.display = "none";
                    document.getElementById('output-link').innerHTML = location.href;
                    document.getElementById('output-link').setAttribute("href",location.href);
                    document.getElementById('code-output-final').innerHTML = data.data.code.formatted_html;
            }
      }   
  }
  
  function appStatus(){
    document.getElementById('loader').style.display = "block";
    const Http = new XMLHttpRequest();
    const url = 'https://newcodecave.herokuapp.com';
    Http.open("GET", url);
    Http.setRequestHeader('Content-Type', 'application/json');
    Http.send();
    Http.onload = function () {
        //document.getElementById('loader').style.display = "none";
        var data = this.response;
        console.log(data);
        document.getElementById('loader').style.display = "none";   
    }   
  }