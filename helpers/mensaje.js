const { read } = require('fs');
const { resolve } = require('path');

require('colors');
const mostrarMenu=()=>{
    return new Promise(resolve=>{
        console.clear();
        console.log("============".green);
        console.log("selecione una opcion".green);
        console.log("============".green);
    
        console.log(`${'1'.green}. crear tarea`);
        console.log(`${'2'.green}. listar  tarea`);
        console.log(`${'3'.green}. listar tarea completas`);
        console.log(`${'4'.green}. listar  tareas  pendientes`);
        console.log(`${'5'.green}. completar tarea`);
        console.log(`${'6'.green}. borrar tarea`);
        console.log(`${'0'.green}. salir`);

        const readline=require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        
        });
        readline.question('seleccione una opcion: ',(opt)=>{
               readline.close();
               resolve(opt);
        })


    });


}


const pausa=()=>{

    return new Promise(resolve=>{

        const readline=require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        
        });
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`,(opt)=>{
            readline.close();
            
        } )

    });

}

module.exports={
    mostrarMenu,
    pausa
}