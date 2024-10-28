//  Posicionamos la gota en el centro, inicialmente
let gota = false
let x = 2
let y = 2
basic.forever(function on_forever() {
    let accX: number;
    let accY: number;
    if (gota == false) {
        //  Gràfic de temperatura
        led.plotBarGraph(input.temperature(), 50)
    } else {
        //  Moure gota a la pantalla
        
        
        led.plot(x, y)
        basic.pause(50)
        led.unplot(x, y)
        accX = input.acceleration(Dimension.X)
        accY = input.acceleration(Dimension.Y)
        if (accX <= 150 && x > 0) {
            x = x - 1
        }
        
        if (accX > 150 && x < 4) {
            x = x + 1
        }
        
        if (accY <= 150 && x < 0) {
            y = y - 1
        }
        
        if (accY > 150 && y < 4) {
            y = y + 1
        }
        
    }
    
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    //  Si l'usuari prem el botó B, s'activa el mode de gota (REPTE 7)
    
    if (gota == false) {
        gota = true
        //  Ocultem tots els leds si volem activar el mode de gota
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                led.unplot(i, j)
            }
        }
    } else {
        //  Si l'usuari torna a prèmer el botó B, es torna a posar el mode de estació meteorologica  (REPTE 6)
        gota = false
    }
    
})
