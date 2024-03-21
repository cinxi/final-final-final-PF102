const rightDiv = (doggieImage) =>{
    let div = document.createElement("div")
    div.className ="classright"
    div.innerHTML = `<img src="./pic/${doggieImage}">`
    return div
}
export {rightDiv}