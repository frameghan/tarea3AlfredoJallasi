const inquirer = require('inquirer');
require('colors');

const preguntas=[
    {
        type:'list',
        name:'option',
        message:'¿que desea hacer?',
        choices:[
            {value:'1',
            name:'1. crear tarea'},
            {value:'2',
            name:'2. listar tarea'},
            {value:'3',
            name:'3. listar tarea completas'},
            {value:'4',
            name:'4. listar tarea pendientes '},
            {value:'5',
            name:'5. completar tarea'},
            {value:'6',
            name:'6. borrar tarea'},  
            {value:'0',
            name:'0. salir'}
            
        ]
    }
]

const inquirerMenu=async()=>{
        console.clear();
        console.log("============".green);
        console.log("selecione una opcion".green);
        console.log("============".green);
        const {option}=await inquirer.prompt(preguntas);
        return option;
    
    
    }

    const pausa = async()=>{
        const question =[
                {type:'input',
                name:'enter',
                message:`presione ${'enter'.red} para continuar`}
        ];
        console.log("\n");
        await inquirer.prompt(question);
    }
       
    const leerInput=async(message)=>{
        const question=[
                {
                    type:'input',
                    name:'desc',
                    message,
                    validate(value){
                        if(value.lmgth==0)
                            return "ingrese in valor"
                        return true;
                    }
                }
        ];
        const {desc}=await inquirer.prompt(question);
        return desc;
    }

    const listadoTareasBorrar = async(tareas=[])=>{
        //con este pedazo de codigo manipularemos la informacion que
        //nos esta proporcionando el sistema
        const  choices = tareas.map((tarea, i )=>{
            const idx = `${i+1}.`.green;
            return{
                value: tarea.id,
                name: `${idx} ${tarea.desc}`
            }
        });
        //ahroa recibiremos las preguntas
        choices.unshift({
            value: '0',
            name: '0.'.green+'Cancelar'
        });
        const preguntas=[
            {
                type:'list',
                name:'id',
                message:'Borrar',
                choices
            }
        ]
        const{id}=await inquirer.prompt(preguntas);
        return id;
    }
    const mostrarListadoChecklist = async(tareas=[])=>{
        // copiamos el codigo de: listadoTareasBorrar y lo modificamos
        const  choices = tareas.map((tarea, i )=>{
            const idx = `${i+1}.`.green;
            return{
                value: tarea.id,
                name: `${idx} ${tarea.desc}`,
                checked: (tarea.completadoEn)?true:false
            }
        });
        const pregunta=[
            {
                type:'checkbox',
                name:'ids',
                message:'Selecciones',
                choices
            }
        ]
        const{ids}=await inquirer.prompt(pregunta);
        return ids;
    }
    
    
    
    const confirmar = async (message)=>{
        //generamos el menu de preguntas y opciones
        const question =[
            {
                type:'confirm',
                name:'ok',
                message
            }
        ];
        const {ok} = await inquirer.prompt(question);
        return ok
    }
    module.exports={
            inquirerMenu,
            pausa,
            leerInput,
            listadoTareasBorrar,
            confirmar
        }