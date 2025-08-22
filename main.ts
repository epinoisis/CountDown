input.onButtonPressed(Button.A, function () {
    reset = 0
    remain = 240
    while (remain > 0) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
        basic.showNumber(remain)
    }
    if (!(reset)) {
        basic.showNumber(0)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Punchline), music.PlaybackMode.InBackground)
    }
})
input.onButtonPressed(Button.B, function () {
    remain = 0
    reset = 1
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.Shake, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Heart)
})
let remain = 0
let reset = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
basic.showString("E")
loops.everyInterval(1000, function () {
    remain += -1
})
