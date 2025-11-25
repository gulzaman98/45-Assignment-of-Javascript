//  New Guest List 

let guest = ["Saad" , "Hasnain" ,"Ayan" ,  "Gulzaman"]



document.write(`Dear Fallows ${guest[1]} can’t make it to dinner.`)

guest.splice(1, 1, "Waleed")


// Ound a Big table 

document.write( "<br>" ,"“Good news! We found a bigger dinner table.”")

guest.unshift("Mustafa")
guest.push("Zeshan")
guest.splice(3 , 0 , "Hassan")

document.write(  "<br>" ,"Current guest list:<br>");

document.write(guest.join("<br>"))

document.write("<br><br>");


// Dinner cancell can dinner 2 people 

document.write("Sorry! I can invite only two people for dinner.<br><br>");

let removed1 = guest.pop()
document.write(` Sorry ${removed1},  you can’t come to dinner.<br>`)

let removed2 = guest.pop()
document.write(` Sorry ${removed2},  you can’t come to dinner.<br>`)

let removed3 = guest.pop()
document.write(` Sorry ${removed3},  you can’t come to dinner.<br>`)

let removed4 = guest.pop()
document.write(` Sorry ${removed4},  you can’t come to dinner.<br>`)

let removed5 = guest.pop()
document.write(` Sorry ${removed5},  you can’t come to dinner.<br>`)

// Current guest list

document.write("Current guest list" , "<br>")

document.write(`${guest[0]} you are still invited.<br>`)
document.write(`${guest[1]} you are still invited.<br><br>`)

// Remove both guest 

guest.pop()
guest.pop()

document.write("Final guest list" , "<br>")
document.write(guest)