

//let body = document.querySelector(".body");
let paragraph = document.createElement("p")
paragraph.textContent = "To change language of keyboard press left Shift + left Alt"
let textArea = document.createElement('textarea');
let keyboardContainer = document.createElement('div');
keyboardContainer.classList.add("keyboard-container");

let lines1 = document.createElement("div")
lines1.classList.add("line")
lines1.innerHTML = '<div class = "key key-backquote">`</div><div class = "key">1</div><div class = "key">2</div><div class = "key">3</div><div class = "key">4</div><div class = "key">5</div><div class = "key">6</div><div class = "key">7</div><div class = "key">8</div><div class = "key">9</div><div class = "key">0</div><div class = "key">-</div><div class = "key">=</div><div class = "key-backspace">Backspace</div>'
let lines2 = document.createElement("div")
lines2.classList.add("line")
lines2.innerHTML = '<div class = "key-tab">Tab</div><div class = "key">q</div><div class = "key">w</div><div class = "key">e</div><div class = "key">r</div><div class = "key">t</div><div class = "key">y</div><div class = "key">u</div><div class = "key">i</div><div class = "key">o</div><div class = "key">p</div><div class = "key">[</div><div class = "key">]</div><div class = "key-del">Del</div>'
let lines3 = document.createElement("div")
lines3.classList.add("line")
lines3.innerHTML = '<div class = "key-capslock">CapsLock</div><div class = "key">a</div><div class = "key">s</div><div class = "key">d</div><div class = "key">f</div><div class = "key">g</div><div class = "key">h</div><div class = "key">j</div><div class = "key">k</div><div class = "key">l</div><div class = "key">;</div><div class = "key key-quote">'+'</div><div class = "key">\\</div><div class = "key-enter">Enter</div>'
let lines4 = document.createElement("div")
lines4.classList.add("line")
lines4.innerHTML = '<div class = "key-shiftleft">Shift</div><div class = "key">z</div><div class = "key">x</div><div class = "key">c</div><div class = "key">v</div><div class = "key">b</div><div class = "key">n</div><div class = "key">m</div><div class = "key">,</div><div class = "key">.</div><div class = "key">/</div><div class = "key-arrowup">&#8593</div><div class = "key-shiftright">Shift</div>'
let lines5 = document.createElement("div")
lines5.classList.add("line")
lines5.innerHTML = '<div class = "key-ctrlleft">Ctrl</div><div class = "key-win">Win</div><div class = "key-altleft">Alt</div><div class = "key-space"></div><div class = "key-altright">Alt</div><div class = "key-ctrlright">Ctrl</div><div class = "key-arrowleft">&#8592</div><div class = "key-arrowdown">&#8595</div><div class = "key-arrowright">&#8594</div>'
keyboardContainer.appendChild(lines1)
keyboardContainer.appendChild(lines2)
keyboardContainer.appendChild(lines3)
keyboardContainer.appendChild(lines4)
keyboardContainer.appendChild(lines5)
textArea.classList.add("text-input-block")
document.body.appendChild(paragraph)
document.body.appendChild(textArea)
document.body.appendChild(keyboardContainer)

let keys = document.querySelectorAll(".key");
let backQuote = document.querySelector(".key-backquote")
let quote = document.querySelector(".key-quote")
let spaceKey = document.querySelector(".key-space");
let backSpace = document.querySelector(".key-backspace")
let tabKey = document.querySelector(".key-tab")
let shiftLeft = document.querySelector(".key-shiftleft");
let capsLock = document.querySelector(".key-capslock")
let shiftRight = document.querySelector(".key-shiftright")
let altLeft = document.querySelector(".key-altleft");
let altRight = document.querySelector(".key-altright")
let winKey = document.querySelector(".key-win");
let ctrlLeft = document.querySelector(".key-ctrlleft");
let ctrlRight = document.querySelector(".key-ctrlright");
let arrowUp = document.querySelector(".key-arrowup")
let arrowDown = document.querySelector(".key-arrowdown");
let arrowLeft = document.querySelector(".key-arrowleft");
let arrowRight = document.querySelector(".key-arrowright");
let delKey = document.querySelector(".key-del")
let keyEnter = document.querySelector(".key-enter")


let engKeysLayout = {
  upperCase: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'],
  lowerCase: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
  switch: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'],

}

let rusKeysLayout = {
  upperCase: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.'],
  lowerCase: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'],
  switch: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", '/', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ','],

}


let arr =[];



console.log(arr)



window.addEventListener('keydown', function(e){
    for (let i = 0; i<keys.length; i++){
      if(e.key == keys[i].textContent){
         keys[i].classList.add('active');
      }if (e.code == "Backquote"){
         backQuote.classList.add('active');
     }if (e.code == "Quote"){
      quote.classList.add('active');
     } 
      if (e.code == "Space"){
      spaceKey.classList.add('active');
    } if (e.code == "Tab"){
      tabKey.classList.add('active')
    } 
    if (e.code == "Delete"){
      delKey.classList.add('active')
    } if (e.code == "AltLeft"){
      altLeft.classList.add('active')
    }if (e.code == "AltRight"){
      altRight.classList.add('active')
    }if (e.code == "MetaLeft"){
      winKey.classList.add('active')
    }if (e.code == "ControlLeft"){
      ctrlLeft.classList.add('active')
    }if (e.code == "ControlRight"){
      ctrlRight.classList.add('active')
    }if (e.code == "ArrowUp"){
      arrowUp.classList.add('active')
    }if (e.code == "ArrowDown"){
      arrowDown.classList.add('active')
    }if (e.code == "ArrowLeft"){
      arrowLeft.classList.add('active')
    }if (e.code == "ArrowRight"){
      arrowRight.classList.add('active')
    }if (e.code == "Backspace"){
      backSpace.classList.add('active')
    }if (e.code == "Enter"){
      keyEnter.classList.add('active')
    }
    }
    if (e.code == "CapsLock"){
      capsLock.classList.toggle('active')
      if (capsLock.classList.contains('active')){
        for (let i = 0; i<keys.length; i++){
          keys[i].textContent = keys[i].getAttribute('uppercase')
        }
      } else {
        for (let i = 0; i<keys.length; i++){
          keys[i].textContent = keys[i].getAttribute('lowercase')
        }
      }
    }

    if (e.code == "ShiftLeft"){
      shiftLeft.classList.add('active')
      if(shiftLeft.classList.contains("active")){
        for (let i = 0; i<keys.length; i++){
          keys[i].textContent = keys[i].getAttribute('switch')
        }
      }
    }if (e.code == "ShiftRight"){
      shiftRight.classList.add('active')
      if(shiftRight.classList.contains("active")){
        for (let i = 0; i<keys.length; i++){
          keys[i].textContent = keys[i].getAttribute('switch')
        }
      }
    }

   
    if (e.shiftKey && e.altKey){
      shiftLeft.classList.toggle("rus");
      altLeft.classList.toggle("rus");

      if (shiftLeft.classList.contains("rus") && altLeft.classList.contains("rus")){
        localStorage.setItem("language", "rus");
        let lang = localStorage.getItem("language")
        changeLanguage(lang)
      } if (!shiftLeft.classList.contains("rus") && !altLeft.classList.contains("rus")){
        localStorage.setItem("language", "en");
        let lang = localStorage.getItem("language")
        changeLanguage(lang)
      }
    }
  

})

function changeLanguage(lang){

    if (lang == "en"){
        for (let i = 0; i< keys.length; i++){
            keys[i].setAttribute('uppercase', engKeysLayout.upperCase[i])
            keys[i].setAttribute('lowercase', engKeysLayout.lowerCase[i])
            keys[i].setAttribute('switch', engKeysLayout.switch[i])
            keys[i].textContent = keys[i].getAttribute("lowercase")
         } 
    } if (lang == "rus"){
        for (let i = 0; i< keys.length; i++){
            keys[i].setAttribute('uppercase', rusKeysLayout.upperCase[i])
            keys[i].setAttribute('lowercase', rusKeysLayout.lowerCase[i])
            keys[i].setAttribute('switch', rusKeysLayout.switch[i])
            keys[i].textContent = keys[i].getAttribute("lowercase")
         } 
    }
}

function loadKeys(){
   let lang = localStorage.getItem("language")
   if (lang == "en"){
        for (let i = 0; i< keys.length; i++){
            keys[i].setAttribute('uppercase', engKeysLayout.upperCase[i])
            keys[i].setAttribute('lowercase', engKeysLayout.lowerCase[i])
            keys[i].setAttribute('switch', engKeysLayout.switch[i])
            keys[i].textContent = keys[i].getAttribute("lowercase")
         } 
    } if (lang == "rus"){
        for (let i = 0; i< keys.length; i++){
            keys[i].setAttribute('uppercase', rusKeysLayout.upperCase[i])
            keys[i].setAttribute('lowercase', rusKeysLayout.lowerCase[i])
            keys[i].setAttribute('switch', rusKeysLayout.switch[i])
            keys[i].textContent = keys[i].getAttribute("lowercase")
         } 
     } if (lang == undefined){
      for (let i = 0; i< keys.length; i++){
        keys[i].setAttribute('uppercase', engKeysLayout.upperCase[i])
        keys[i].setAttribute('lowercase', engKeysLayout.lowerCase[i])
        keys[i].setAttribute('switch', engKeysLayout.switch[i])
        keys[i].textContent = keys[i].getAttribute("lowercase")
     } 
     }
    }
loadKeys()
//localStorage.setItem("language", "en")
//let eng = localStorage.getItem("language")
//console.log(eng)
//changeLanguage(eng)




window.addEventListener('keyup', function(e){
    for (let i = 0; i<keys.length; i++){
      if(e.key == keys[i].textContent){
         keys[i].classList.remove('active');
      }if (e.code == "Backquote"){
         backQuote.classList.remove('active');
     }if (e.code == "Quote"){
      quote.classList.remove('active');
     } if (e.code == "Space"){
      spaceKey.classList.remove('active');
    } if (e.code == "Tab"){
      tabKey.classList.remove('active')
    } if (e.code == "Delete"){
      delKey.classList.remove('active')
    }if (e.code == "AltLeft"){
      altLeft.classList.remove('active')
    }if (e.code == "AltRight"){
      altRight.classList.remove('active')
    }if (e.code == "MetaLeft"){
      winKey.classList.remove('active')
    }if (e.code == "ControlLeft"){
      ctrlLeft.classList.remove('active')
    }if (e.code == "ControlRight"){
      ctrlRight.classList.remove('active')
    }if (e.code == "ArrowUp"){
      arrowUp.classList.remove('active')
    }if (e.code == "ArrowDown"){
      arrowDown.classList.remove('active')
    }if (e.code == "ArrowLeft"){
      arrowLeft.classList.remove('active')
    }if (e.code == "ArrowRight"){
      arrowRight.classList.remove('active')
    }if (e.code == "Backspace"){
      backSpace.classList.remove('active')
    }if (e.code == "Enter"){
      keyEnter.classList.remove('active')
    }
    if (e.code == "ShiftLeft"){
      shiftLeft.classList.remove('active')
      if(!shiftLeft.classList.contains("active")){
        for (let i = 0; i<keys.length; i++){
          keys[i].textContent = keys[i].getAttribute('lowercase')
        }
      }
    }if (e.code == "ShiftRight"){
      shiftRight.classList.remove('active')
      if(!shiftRight.classList.contains("active")){
        for (let i = 0; i<keys.length; i++){
          keys[i].textContent = keys[i].getAttribute('lowercase')
        }
      }
    }
       }
})
