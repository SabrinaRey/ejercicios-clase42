let alumnas = ["lili", "Maria", "Nil", "Sabri", "Sol", "Tefi"]


for (let i = 0; i < alumnas.length; i++) {
    let nombreEnMinusculas = alumnas[i].toLowerCase();
    let primeraLetra = nombreEnMinusculas.charAt(0).toUpperCase();
    let restoDelNombre = nombreEnMinusculas.slice(1, nombreEnMinusculas.length)

    console.log(primeraLetra.concat(restoDelNombre));

}

let playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly', 'Best of You', 'All My Life', 'Monkey Wrench', 'The Sky is a Neighborhood']

console.log(playlistFoo[1])

console.log(playlistFoo[4])

let bandas = ["Foo Fighters", "BSB" , "Spice Girls" , "Madonna" , "Red Hot Chilli Peppers", "J Balvin" , "Lady Gaga" , "Beyonce" , "The Chainsmokers" , "Queen"]

let primerBanda = bandas[0]

let tercerBanda = bandas[2]

let sextaBanda = bandas[5]

console.log("La banda en primer lugar es: "+ primerBanda)

console.log("La banda en tercer lugar es: "+ tercerBanda)

console.log("La banda en sexto lugar es: "+ sextaBanda);

let alumnasUno = [""]

alumnasUno[0]="Ada"

alumnasUno[1]="Grace"

alumnasUno[2]="Radia"

alumnasUno[3]="Janie"

alumnasUno[4]="Sheryl"

alumnasUno[5]="Hedy"

console.log(alumnasUno)

let etiquetasHtml = ["body" , "form" , "header", "footer" , "h1", "button", "label" , "p"]

console.log(etiquetasHtml[1].toUpperCase())

console.log(etiquetasHtml[4].toLowerCase())

console.log(etiquetasHtml.length)

let ganadorasRupaul = ['BeBe Zahara Benet', 'Tyra Sanchez', 'Raja', 'Sharon Needles', 'Jinkx Monsoon', 'Bianca del Rio', 'Violet Chachki', 'Bob the Drag Queen', 'Sasha Velour', 'Aquaria']

console.log(ganadorasRupaul[1])

console.log(ganadorasRupaul[ganadorasRupaul.length -1])

let playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];

let playlistFooUno = ['Everlong', 'The Pretender', 'Learn to Fly'];

if(playlistNirvana.length > playlistFooUno.length){
    console.log("La playlist de Nirvana tiene más canciones")
}
else {
    console.log("La playlist de Foo Fighters tiene más canciones")
}
