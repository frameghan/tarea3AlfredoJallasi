const Tarea=require('./tarea');

class Tareas {
    _listado={
        'abc':123
    };
    get listadoArr(){
        const listado=[];
        Object.keys(this._listado).forEach(key => {
           const tarea =this._listado[key];
           listado.push(tarea);
           });
        return listado;
    }
    
    constructor(){
        this._listado={};
    }
borrarTarea(id=''){
    if(this._listado[id]){
        delete this._listado[id];
    }
}

    crearTareaFromArray(tareas=[]){
        tareas.forEach(tarea=>{
            this._listado[tarea.id]=tarea;
        })
    }
    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
    listadoCompleto(){
        console.log();
        this.listadoArr.forEach((tarea,i)=>{
                const idx=`${i+1}`.green;
                const {desc, completadoEn}=tarea;
                const estado=(completadoEn)
                ?' completado'.green
                :'pendiente'.red;
                console.log(`${idx} ${desc} :: ${estado}`);
        })
    }

    listarPendientesCompletadas(completadas=true){
            console.log();
            let contador=0;
            this.listadoArr.forEach(tarea=>{
                const {desc, completadoEn}=tarea;
                const estado =(completadoEn)
                                    ?'completada'.green
                                    :'pendiente'.red;

                if(completadas){
                    if(completadoEn){
                        contador +=1;
                        console.log(`${(contador+'. ').green} ${desc}::${completadoEn.green}`);
                    }
                }else{
                    if(!completadoEn){
                        contador+=1;
                        console.log(`${(contador+'. ').green} ${desc}::${estado}`);
                    }
                }
            });



    }
    listarPendientesCompletadas(pendientes = true) {
        console.log();
        let contador = 0;
        this.listadoArr.forEach(tarea => {
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                ? 'completada'.green
                : 'pendiente'.red;
    
            if (pendientes) { // Si pendientes es true, listar tareas pendientes
                if (!completadoEn) {
                    contador += 1;
                    console.log(`${(contador + '. ').green} ${desc} :: ${estado}`);
                }
            } else { // Si pendientes es false, listar tareas completadas
                if (completadoEn) {
                    contador += 1;
                    console.log(`${(contador + '. ').green} ${desc} :: ${completadoEn.green}`);
                }
            }
        });
    }
    


}
module.exports = Tareas;