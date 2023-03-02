let px = 0
let py = 0
basic.forever(function () {
    basic.clearScreen()
    px = Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 4)
    py = Math.map(input.acceleration(Dimension.Y), -1023, 1023, 0, 4)
    led.plot(px, py)
    if (py < 0 || py > 4 || (px < 0 || px > 4)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    serial.writeValue("x", px)
    serial.writeValue("y", py)
})
