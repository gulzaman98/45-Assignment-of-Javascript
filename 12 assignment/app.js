let guest = ["Saad" , "Hasnain" ,"Ayan" ,  "Gulzaman"]

document.write(`Dear Fallows ${guest[1]} can’t make it to dinner.`)

guest.splice(1, 1, "Waleed")


document.write( "<br>" ,"“Good news! We found a bigger dinner table.”")

guest.unshift("Mustafa")
guest.push("Zeshan")
guest.splice(3 , 0 , "Hassan")

document.write(` <br> Hello ${guest[0]}! Do you dinner with me .`)
document.write(` <br> Hello ${guest[1]}! Do you dinner with me .`)
document.write(` <br> Hello ${guest[2]}! Do you dinner with me .`)
document.write(` <br> Hello ${guest[3]}! Do you dinner with me .`)
document.write(` <br> Hello ${guest[4]}! Do you dinner with me .`)
document.write(` <br> Hello ${guest[5]}! Do you dinner with me .`)
document.write(` <br> Hello ${guest[6]}! Do you dinner with me .`)


