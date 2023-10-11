random = 0

def on_forever():
    global random
    if input.button_is_pressed(Button.A):
        random = randint(0, 2)
        if random == 0:
            basic.show_leds("""
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                """)
            basic.show_leds("""
                # . . . .
                . # . . #
                . . # . #
                . . . # #
                . # # # #
                """)
            basic.show_leds("""
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                """)
            basic.show_leds("""
                . . . . #
                . . . # .
                # . # . .
                # # . . .
                # # # # .
                """)
            basic.show_leds("""
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                """)
            basic.show_leds("""
                # # # # .
                # # . . .
                # . # . .
                # . . # .
                . . . . #
                """)
            basic.show_leds("""
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                """)
            basic.show_leds("""
                . # # # #
                . . . # #
                . . # . #
                . # . . #
                # . . . .
                """)
            basic.show_leds("""
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                """)
        elif random == 1:
            basic.show_leds("""
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                """)
            basic.show_leds("""
                # . . . .
                . # . . #
                . . # . #
                . . . # #
                . # # # #
                """)
            basic.show_leds("""
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                """)
            basic.show_leds("""
                . . . . #
                . . . # .
                # . # . .
                # # . . .
                # # # # .
                """)
            basic.show_leds("""
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                """)
            basic.show_leds("""
                # # # # .
                # # . . .
                # . # . .
                # . . # .
                . . . . #
                """)
            basic.show_leds("""
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                """)
            basic.show_leds("""
                . # # # #
                . . . # #
                . . # . #
                . # . . #
                # . . . .
                """)
            basic.show_leds("""
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                """)
            basic.show_leds("""
                # . . . .
                . # . . #
                . . # . #
                . . . # #
                . # # # #
                """)
            basic.show_leds("""
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                """)
        elif random == 2:
            basic.show_leds("""
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                """)
            basic.show_leds("""
                # . . . .
                . # . . #
                . . # . #
                . . . # #
                . # # # #
                """)
            basic.show_leds("""
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                """)
            basic.show_leds("""
                . . . . #
                . . . # .
                # . # . .
                # # . . .
                # # # # .
                """)
            basic.show_leds("""
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                """)
            basic.show_leds("""
                # # # # .
                # # . . .
                # . # . .
                # . . # .
                . . . . #
                """)
            basic.show_leds("""
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                """)
            basic.show_leds("""
                . # # # #
                . . . # #
                . . # . #
                . # . . #
                # . . . .
                """)
            basic.show_leds("""
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                """)
            basic.show_leds("""
                # . . . .
                . # . . #
                . . # . #
                . . . # #
                . # # # #
                """)
            basic.show_leds("""
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                """)
            basic.show_leds("""
                . . . . #
                . . . # .
                # . # . .
                # # . . .
                # # # # .
                """)
            basic.show_leds("""
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                """)
basic.forever(on_forever)
