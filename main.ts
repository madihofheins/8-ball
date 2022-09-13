input.onButtonPressed(Button.A, function () {
    if (randomnumber == 2) {
        basic.showString("maybe")
    } else if (randomnumber == 2) {
        basic.showString("YES")
    } else {
        basic.showString("NO")
    }
    basic.showNumber(randomnumber)
})
input.onButtonPressed(Button.B, function () {
    if (age >= 18) {
        basic.showString("Vote")
    } else if (age >= 16) {
        basic.showString("Drive")
    } else {
        basic.showString("Too Young")
    }
})
let randomnumber = 0
let age = 0
age = 17
randomnumber = randint(0, 5)
basic.forever(function () {
	
})
