import { imgfun } from "./img.js"
import { infofunc } from "./info.js"
import { infofunc2 } from "./info.js"
import { cardfunc } from "./card.js"

let sec1 = document.getElementById('sec1')
let sec2 = document.getElementById('sec2')

let obj1 = {
    title   : "Technopreneurship Project",
    par     : "In college, technopreneurship is a subject that combines technology and entrepreneurship. Students learn how to turn tech ideas into successful businesses by understanding both the latest innovations and the fundamentals of starting and running a company. They explore topics like software development, digital marketing, and business strategy tailored to the tech industry. Ultimately, the goal is to equip students with the skills and knowledge needed to thrive in the fast-paced world of technology startups.",
    button  : "Contact Us",
    img     : "./images/l.jpg"
}

const { title, par, button, img } = obj1

let obj2 = {
    image   : "./images/h.png",
    desc    : "EditEase is a video editing service where creativity meets precision. Unleash the full potential of your footage with our expert team, delivering seamless edits that bring your vision to life.",
    button1 : "Learn More",
    title2  : "Project Complete"
}

const { image, desc, button1, title2 } = obj2

sec1.append(infofunc(title, par, button))
sec1.append(imgfun(img))
sec3.append(infofunc2(title2))
sec2.append(cardfunc(image, desc, button1))
sec2.append(cardfunc(image, desc, button1))
sec2.append(cardfunc(image, desc, button1))

