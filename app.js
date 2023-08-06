//const { guardarBD } = require('./guardarArchivo');
require ('colors');
console.clear();
//const{mostrarMenu, pausa}=require('./helpers/mensaje');
//const {guardarBD}=require('./helpers/guardarArchivo');
const{inquirerMenu, pausa,leerInput, listadoTareasBorrar,confirmar }=require('./helpers/inquirer');

const Tareas=require('./models/tareas');
//const Tarea=require('./models/tarea');
const { guardarBD , leerDB} = require('./helpers/guardarArchivo');
const main =async()=>{
    //console.log("hola mundo");
    let opt="";
    const tareas =new Tareas();
    const tareasDB = leerDB(); 
      if (tareasDB) {
        tareas.crearTareaFromArray(tareasDB);
    }

do{
opt=await inquirerMenu();
switch(opt){
            case '1':
                const desc = await leerInput('descripcion:  ');
                tareas.crearTarea(desc);
                guardarBD(tareas.listadoArr); // Guardar datos aquí

                break;
            case '2':
                tareas.listadoCompleto();

                break;
            case '3':
                tareas.listarPendientesCompletadas(false);
                break;
            case '4':
                tareas.listarPendientesCompletadas(true);

                break;
            case '5':
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const ok = await confirmar('¿estas Seguro?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('tarea borrada');
                        guardarBD(tareas.listadoArr);
                    }
                }
                break;
        }

        guardarBD(tareas.listadoArr);
        await pausa();
    } while (opt !== '0');
}
main();