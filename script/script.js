let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let word = document.querySelector(".word");
let wordPhonetic = document.querySelector(".word__phonetic");
let audio = document.querySelector(".audio");
let icon = document.querySelector(".icon");
let wordOrigin = document.querySelector(".word__origin");
let wordDetails = document.querySelector(".word__details");

document.body.addEventListener("keyup", (e) => {
      e.preventDefault();
      if(e.key === "Enter"){
         mainCodes();
         emptyVal();
      } 
});


btn.addEventListener("click", () => {
     mainCodes();
     emptyVal();
});


function mainCodes () {

   let inpVal = input.value;
    
   fetchWords(inpVal);

}

function emptyVal () {
        input.value = "";
}

function fetchWords (value) {
     
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
    .then(res => res.json())
    .then(data => {
        data.forEach(data => {
            creatTemplateForEachWord(data);
        });
    })
    .catch(err => console.log(err))

}

function creatTemplateForEachWord (data) {
        wordDetails.innerHTML = "";
        wordDetails.insertAdjacentHTML("beforeend",`<div class="word__items">
        <div>
          <p class="word">${data.word}</p>
          <span class="word__phonetic">${data.phonetic}</span>
        </div>
        <audio src="${data.phonetics[0].audio}" class="audio"></audio>
        <?xml version="1.0" encoding="utf-8"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg
          onclick="playWordPrnounciation()"
          class="icon"
          version="1.1"
          id="svg2"
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:cc="http://creativecommons.org/ns#"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          sodipodi:docname="speaker.svg"
          inkscape:version="0.48.4 r9939"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="40px"
          height="40px"
          viewBox="0 0 1200 1200"
          enable-background="new 0 0 1200 1200"
          xml:space="preserve"
        >
          <path
            id="path21920"
            inkscape:connector-curvature="0"
            d="M0,350.411h282.787L708.197,3.688v1192.623l-425.41-346.721H0V350.411z
            M868.033,293.853c83.605,83.607,126.229,185.246,127.868,304.918c0,114.755-42.623,213.114-127.868,295.082l-86.066-88.523
            c59.018-59.018,88.525-128.688,88.525-209.018c0-81.967-29.509-153.277-88.525-213.934L868.033,293.853L868.033,293.853z
            M1015.574,148.771C1138.524,271.722,1200,420.083,1200,593.853c0,173.771-61.476,322.951-184.426,447.541l-90.984-90.982
            c98.361-96.722,147.541-215.164,147.541-355.327c0-140.164-49.18-259.427-147.541-357.788L1015.574,148.771z"
          />
        </svg>
        </div>
        <p class="word__origin"> ${data.meanings[0].definitions[0].definition} </p>`);
        console.log(data);
        wordDetails.classList.add("open");
}

function playWordPrnounciation () {
        let audioEl = document.querySelector("audio");

        if(audioEl.src.includes("http://127.0.0.1:5500/index.html")){
            alert("Not supported");
        }else{
          audioEl.play();
        }
}

