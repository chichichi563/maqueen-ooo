function stop () {
    // This controls the Maqueen's ultrasonic sensor
    while (DFRobotMaqueenPlusV2.readUltrasonic(DigitalPin.P11, DigitalPin.P14) < 10) {
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
        // This allows you to put colours on the rgb lights 
        DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eOpen)
        // This controls the colour of the LED lights at the bottom of the maqueen.
        DFRobotMaqueenPlusV2.setIndexColor(1, NeoPixelColors.Red)
        DFRobotMaqueenPlusV2.setIndexColor(2, NeoPixelColors.Red)
    }
    DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eClose)
    // Turns off all RGB
    DFRobotMaqueenPlusV2.ledBlank()
}
input.onButtonPressed(Button.A, function () {
    // This controls the LEDs on the front of the Maqueen and gives them a smile face.
    basic.showIcon(IconNames.Happy)
    // This controls the motors and makes the maqueen drive forward
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eBackward, 100)
    music.playMelody("C D E F G A B C5 ", 305)
    for (let index = 0; index < 100; index++) {
        // These control the notes that are played from Maqueen
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
})
for (let index = 0; index < 10; index++) {
    // This displays text on the front of the MAQUEEN
    basic.showString("PRESS A ")
    basic.showArrow(ArrowNames.West)
}
basic.forever(function () {
    // When the sensor L1 and R1 detected the black line, Maqueen Plus car moves forward.
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 60)
    } else {
        // When only the right sensor R1 detected the black line, Maqueen Plus car turns right
        if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 160)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 30)
        }
        // When only the left sensor (L1) detected the black line, Maqueen Plus car turns left
        if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 30)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 160)
        }
    }
    stop()
})
