const leftDiv = (title, title2, para1, para2, btn1, btn2, btn3, btn4) => {
    let div = document.createElement("div")
    div.className = "classleft"
    div.innerHTML = `<h1>${title}</h1>
                    <p>${para1}</p>
                    <br>
                     <h1>${title2}</h1>
         git add           <p>${para2}</p>
                    <br>
                     <button>${btn1}</button>
                     <button>${btn2}</button>                   
                     <button>${btn3}</button>
                     <button>${btn4}</button>    
    `
    return div
}
export {leftDiv}