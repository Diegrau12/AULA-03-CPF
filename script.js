 function calculaMedia(a, b, c){
     let resultado = (a, b, c)/3;
     return resultado;
 }
 
 function calcularExame(nota){
     let resultado = 10 - nota
     return resultado;
 }

 function calcularDelta(a, b, c){
     let delta = b*b - (4*a*c)
     return delta
 }

 function calcularx1(a, b, delta){
     let x1 = (-1*b + Math.sqrt(delta)) / 2 * a;
     return x1;

 }

 function calcularx2(a, b, delta){
    let x2 = (-1*b - Math.sqrt(delta)) / 2 * a;
    return x2;
 }

// function calcularCPF(cpf){


// }

 $('#btOla').click(
     function(){

        let nome = "Diego";
        let notas = [2,5,6,7,4];
        let cpf = "061221231"

        for (i=0;i<nome.length;i++){
            console.log(nome[i]);
        }

        for (i=0;i<notas.length;i++){
            console.log(notas[i]);
        }

        for (i=0; i<10; i++){

        
           
     }
    
        )
                   

    //     let nome = "Diego";
    //     let lista = [arroz,feijao,macarrao,maca,batata];

    //     for (i+0;i<=4,i++){
    //         console.log(lista[i]);
        
    //     for (i+0;i<=5,i++)
    //         console.log(nome[i]);
    //     }

        
           
    //  }
    
    //     )
                   
            
        


        // for (i=0;i<=3;i++){
        //     console.log(notas[i]);


       // for (i=0;i<=3;i++){
        //      console.log(notas[i]);
                   
        //      }

   //  }
 //)



//         formula = 
//         {
//         'a':parseInt(document.getElementById('inputA').value),
//         'b':parseInt(document.getElementById('inputB').value),
//         'c':parseInt(document.getElementById('inputC').value)
//         };
        
//     let delta = calcularDelta(formula.a, formula.b, formula.c);
//     let x1 = calcularx1(formula.a, formula.b, delta);
//     let x2 = calcularx2(formula.a, formula.b, delta);
//     alert(x1)
//     alert(x2)
//     }
//  )
