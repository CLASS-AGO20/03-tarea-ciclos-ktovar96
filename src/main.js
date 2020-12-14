export default class App {
    obtenerDivisibles(numero) {
        let i=2;
        let primo 
        do {
            if (numero % 1 == 0 && numero% numero ==0) {
                primo = true;
            } else {
                primo= false;
            }
            i--;
        }
        while (i !=0);
    return primo;
        //1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/numero:
}
}
let app = new App();
console.log(app.obtenerDivisibles(3));


