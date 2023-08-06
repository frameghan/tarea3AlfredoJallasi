const{v4:uuidv4}=require('uuid');

class Tarea {
    is='';
    desc='';
    completadoEn=null;
    constructor(desc){
        this.id=uuidv4();
        this.desc=desc;
    }
}
module.exports=Tarea;

