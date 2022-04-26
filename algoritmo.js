var numeroIngresado = prompt("ingrese un numero","0");
if( numeroIngresado==3 ){//primera condicion
    document.write(`
    <h2> si es igual</h2>
    `);
    
} else if (numeroIngresado != 3) {//segunda condicion 
    document.write(`
    <h2> No es igual</h2>
    `)
}
else{//condicion por defecto siempre al final
    document.write(`
    <h2> NO es igual </h2>
    `);

}