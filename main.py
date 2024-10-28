# Posicionamos la gota en el centro, inicialmente
gota = False
x=2
y=2

def on_forever():
    if gota == False:
        # Gràfic de temperatura
        led.plot_bar_graph(input.temperature(), 50)

    else:
        # Moure gota a la pantalla
        global x
        global y
        led.plot(x, y)
        basic.pause(50)
        led.unplot(x, y)
        accX = input.acceleration(Dimension.X)
        accY = input.acceleration(Dimension.Y)

        if accX <= 150 and x > 0:
            x=x-1
        if accX > 150 and x < 4:
            x=x+1
        if accY <= 150 and x < 0:
            y=y-1
        if accY > 150 and y < 4:
            y=y+1
    pass
basic.forever(on_forever)

def on_button_pressed_b(): # Si l'usuari prem el botó B, s'activa el mode de gota (REPTE 7)
    global gota
    if gota == False:
        gota = True
        # Ocultem tots els leds si volem activar el mode de gota
        for i in range(0,5):
            for j in range(0,5):
                led.unplot(i, j)
    else: # Si l'usuari torna a prèmer el botó B, es torna a posar el mode de estació meteorologica  (REPTE 6)
        gota = False
input.on_button_pressed(Button.B, on_button_pressed_b)