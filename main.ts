input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eBackward, 100)
    music.playMelody("C D E F G A B C5 ", 305)
    for (let index = 0; index < 100; index++) {
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
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 B A G F B D C ", 307)
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eBackward, 100)
})
for (let index = 0; index < 10; index++) {
    basic.showString("PRESS A ")
    basic.showArrow(ArrowNames.West)
}
basic.forever(function () {
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 60)
    } else {
        if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 160)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 30)
        }
        if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 30)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 160)
        }
    }
})
