import { leftDiv } from "./info.js";
import { rightDiv } from "./img.js";

let container = document.getElementById("container")

const data = {
    title1 : "Final Project | Multimedia Technologies",
    title2 : "Fragments of trust",
    para1 : "This was our last requirement for our Multimedia Technologies subject. Where as we were task to make a film with the genre of action romance. I was one fo the main cast of the film, there was only 6 people in each group.",
    para2: "This revolves around the intertwined lives of Haya, Cyrus, and Alora, amidst a backdrop of betrayal and vengeance. Haya, believing Cyrus to be dead, seeks justice for his presumed demise, while Alora pursues revenge for her mother's death. As they delve into the mysteries surrounding their pasts, they encounter Amara, the manipulative mastermind behind their suffering. Tensions escalate when Cyrus unexpectedly reemerges, leading to a confrontation fueled by misunderstandings and unresolved emotions. In a tragic climax, truths are revealed, and sacrifices are made as Haya and Cyrus confront their past and their feelings for each other. Ultimately, the bonds of trust are shattered and rebuilt amidst the chaos, leaving Haya and Alora to forge a new path forward together.",
    btn1 : "View Video",
    btn2 : "Cast",
    btn3 : "Posters",
    btn4 : "About the Film",
    doggieImage: "dogImage.jpg"
}

const { title1, title2, para1, para2, btn1, btn2, btn3, btn4, doggieImage} = data

container.append(leftDiv(title1, title2, para1, para2, btn1, btn2, btn3, btn4))
container.append(rightDiv(doggieImage))