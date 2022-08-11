class Equipo {
    constructor (id, nombre, puntos, partidosJugados, partidosGanados, partidosEmpatados, partidosPerdidos, golesFavor, golesContra, difGol){
        this.id = id
        this.nombre = nombre
        this.puntos = parseFloat(puntos)
        this.partidosJugados = parseFloat(partidosJugados)
        this.partidosGanados = parseFloat(partidosGanados)   
        this.partidosEmpatados = parseFloat(partidosEmpatados)            
        this.partidosPerdidos = parseFloat(partidosPerdidos)
        this.golesFavor = parseFloat(golesFavor)
        this.golesContra = parseFloat(golesContra)
        this.difGol = parseFloat(difGol)
    }    

    /*Metodos*/
    totalPuntos(){
        this.puntos = this.partidosGanados*3 + this.partidosEmpatados*1 + this.partidosPerdidos*0
    }
}

const equipo1 = new Equipo (1, "Atletico Tucuman", 25, 12, 7, 4, 1, 13, 6, 7)
const equipo2 = new Equipo (2, "Gimnasia", 24, 12, 7, 3, 2, 13, 6, 7)
const equipo3 = new Equipo (3,"Union", 21, 11, 6, 3, 2, 20, 17, 3  )
const equipo4 = new Equipo (4, "Racing Club", 20, 12, 5, 5, 2, 19, 11, 8  )
const equipo5 = new Equipo (5, "Argentinos", 20, 12, 6, 2, 4, 15, 12, 3 )
const equipo6 = new Equipo (6, "Huracán", 20, 12, 5, 5, 2, 12, 9, 7 )
const equipo7 = new Equipo (7, "River Plate", 18, 12, 5, 3, 4, 17, 12, 5 )
const equipo8 = new Equipo (8, "Patronato", 18, 12, 5, 3, 4, 16, 13, 3 )
const equipo9 = new Equipo (9, "Godoy Cruz", 18, 12, 5, 3, 4, 13, 11, 2 )
const equipo10 = new Equipo (10 , "Platense", 18, 12, 4, 6, 2, 12, 10, 2  )
const equipo11 = new Equipo (11 , "Boca Juniors", 18, 12, 6, 0, 6, 18, 20, -2 )
const equipo12 = new Equipo (12 , "San Lorenzo", 17, 12, 3, 8, 1, 15, 12, 3 )
const equipo13 = new Equipo (13 , "Newells", 17, 12, 4, 5, 3, 10, 9, 1)
const equipo14 = new Equipo (14 , "Sarmiento", 17, 12, 5, 2, 5, 13, 13, 0 )
const equipo15 = new Equipo (15 , "Arsenal", 16, 12, 3, 7, 2, 14, 14, 0)
const equipo16 = new Equipo (16 , "Banfield", 15, 12, 3, 6, 3, 12, 10, 2)
const equipo17 = new Equipo (17 , "Defensa y Justicia", 14, 11, 3, 5, 3, 11, 12, -1)
const equipo18 = new Equipo (18 , "Colón", 14, 12, 3, 5, 4, 10, 12, -2)
const equipo19 = new Equipo (19 , "Barracas Central", 14, 12, 3, 5, 4, 13, 16, -3)
const equipo20 = new Equipo (20 , "Rosario Central", 14, 11, 4, 2, 5, 7, 10, -3)
const equipo21 = new Equipo (21 , "Tigre", 13, 11, 3, 4, 4, 17, 17, 0)
const equipo22 = new Equipo (22 , "Estudiantes", 13, 12, 3, 4, 5, 13, 16, -3)
const equipo23 = new Equipo (23 , "Talleres", 12, 11, 3, 3, 5, 8, 10, -2)
const equipo24 = new Equipo (24 , "C. Córdoba (SdE)", 11, 11, 3, 2, 6, 13, 17, -4)
const equipo25 = new Equipo (25 , "Independiente", 11, 12, 3, 2, 7, 11, 15, -4)
const equipo26 = new Equipo (26 , "Velez", 9, 12, 1, 6, 5, 12, 16, -4)
const equipo27 = new Equipo (27 , "Aldosivi", 8, 12, 2, 2, 8, 7, 19, -12)
const equipo28 = new Equipo (28 , "Lanús", 6, 12, 1, 3, 8, 10, 19, -9)
    
/*ARRAY DE EQUIPOS*/
const equipos = [equipo1, equipo2, equipo3, equipo4, equipo5, equipo6, equipo7, equipo8, equipo9, equipo10, equipo11, equipo12, equipo13, equipo14, equipo15, equipo16, equipo17, equipo18, equipo19, equipo20, equipo21, equipo22, equipo23, equipo24, equipo25, equipo26, equipo27, equipo28]

const tBody = document.querySelector('#tablaPosiciones')

equipos.forEach(equiposArray => {
    tBody.innerHTML += `
        <tr>
            <th scope="row">${equiposArray.id} </th>
            <td>${equiposArray.nombre}</td>
            <td>${equiposArray.puntos}</td>
            <td>${equiposArray.partidosJugados}</td>
            <td>${equiposArray.partidosGanados}</td>
            <td>${equiposArray.partidosEmpatados}</td>
            <td>${equiposArray.partidosPerdidos}</td>
            <td>${equiposArray.golesFavor}</td>
            <td>${equiposArray.golesContra}</td>
            <td>${equiposArray.difGol}</td>
        </tr>
    `
})
    `<tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
    </tr>`