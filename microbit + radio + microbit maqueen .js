radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 50)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(num1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(num2)
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 50)
})
let num2 = 0
let num1 = 0
radio.setGroup(77)
num1 = 1
num2 = 2
basic.forever(function () {
	
})
