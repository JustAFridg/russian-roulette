let random = 0
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        random = randint(0, 2)
        if (random == 0) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            basic.showLeds(`
                # . . . .
                . # . . #
                . . # . #
                . . . # #
                . # # # #
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # .
                # . # . .
                # # . . .
                # # # # .
                `)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.showLeds(`
                # # # # .
                # # . . .
                # . # . .
                # . . # .
                . . . . #
                `)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            basic.showLeds(`
                . # # # #
                . . . # #
                . . # . #
                . # . . #
                # . . . .
                `)
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else if (random == 1) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            basic.showLeds(`
                # . . . .
                . # . . #
                . . # . #
                . . . # #
                . # # # #
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # .
                # . # . .
                # # . . .
                # # # # .
                `)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.showLeds(`
                # # # # .
                # # . . .
                # . # . .
                # . . # .
                . . . . #
                `)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            basic.showLeds(`
                . # # # #
                . . . # #
                . . # . #
                . # . . #
                # . . . .
                `)
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            basic.showLeds(`
                # . . . .
                . # . . #
                . . # . #
                . . . # #
                . # # # #
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else if (random == 2) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            basic.showLeds(`
                # . . . .
                . # . . #
                . . # . #
                . . . # #
                . # # # #
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # .
                # . # . .
                # # . . .
                # # # # .
                `)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.showLeds(`
                # # # # .
                # # . . .
                # . # . .
                # . . # .
                . . . . #
                `)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            basic.showLeds(`
                . # # # #
                . . . # #
                . . # . #
                . # . . #
                # . . . .
                `)
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            basic.showLeds(`
                # . . . .
                . # . . #
                . . # . #
                . . . # #
                . # # # #
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # .
                # . # . .
                # # . . .
                # # # # .
                `)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        }
        
    }
    
})
