bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Fullstop), function () {
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 50)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Comma), function () {
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 50)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Colon), function () {
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 50)
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 50)
})
basic.forever(function () {
	
})
