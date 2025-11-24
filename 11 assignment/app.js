let guest = ["Saad" , "Hasnain" , "Gulzaman"]

document.write(`Dear Fallows ${guest[1]} can’t make it to dinner.`)

guest.splice(1, 1, "Waleed")

document.write(` <br> Hello ${guest[0]}! Do you dinner with me .`)
document.write(` <br> Hello ${guest[1]}! Do you dinner with me .`)
document.write(` <br> Hello ${guest[2]}! Do you dinner with me .`)