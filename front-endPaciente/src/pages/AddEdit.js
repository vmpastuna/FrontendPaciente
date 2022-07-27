import React,{  useEffect, useState} from "react";
import { Redirect, useHistory, useParams} from "react-router-dom";
import axios from "axios";
import { Toast } from "bootstrap";
//import { Toast } from "react-toastify";


const initialPacienteModel={
        _id: "",
        cedula:"",
        nombre:"",
        fechaNacimiento:"",
        direccion:"",
        telefono:"",
        email:"",

};
const AddEdit=()=>{

    const [paciente, setPaciente]=useState(initialPacienteModel);

    const {cedula, nombre, fechaNacimiento , direccion , telefono, email }=initialPacienteModel;

    const history =useHistory();
    const {id} = useParams();
    useEffect(() => {
        if(id){
            getPaciente(id);
            console.log(id);
        }
    }, id);

    const getPaciente = async (id) => {
        const response = await axios.get(`http://localhost:3000/pacientes/${id}`).then((response) => {
            console.log(response);
            setPaciente({...response.data.content});
            //setPaciente(...response.data.content);
        }, (error) => {
            console.log(error);
        });
    }


    const updatePaciente=async (data,id)=>{
        console.log(`http://localhost:3000/pacientes/${id}`);
            const response = await axios.put(`http://localhost:3000/pacientes/${id}`,data).then((response) => {
            console.log(response);
            window.location = "/about";
        }, (error) => {
            console.log(error);
        });
    
    }

    const addPaciente = async (data) =>{
        const response = await axios.post("http://localhost:3000/pacientes",data).then((response) => {
            console.log(response);
            window.location = "/about";
        }, (error) => {
            console.log(error);
        } );
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!id){
            addPaciente(paciente);
        }else{
            console.log("id:"+id);
            console.log("Datos:"+paciente.cedula);
            updatePaciente(paciente,id);
        }
        console.log('Submit')
    }

    const handleInputChange=(e)=>{
        let{name,value}=e.target;
        setPaciente({...paciente,[name]:value});
        //console.log('Valor cambio')
    }


    return(
    <div className="row justify-content-center mt-5">
       
           <div className="submit-form"> 
            <form onSubmit={handleSubmit}>
                    <label className="mb-1" htmlFor="cedula">Cédula</label>
                        <input 
                        className="form-control mb-1"
                        type="text"
                        id="cedula"
                        name="cedula"
                        placeholder="Ingrese Numero de cedula"
                        onChange={handleInputChange}
                        value = {paciente.cedula}
                        />

                    <label className="mb-1" htmlFor="nombre" >Nombre</label>
                        <input 
                        className="form-control mb-1"
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ingrese Nombre"
                        onChange={handleInputChange}
                        value={paciente.nombre}
                        />
                
                    <label className="mb-1" htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                        <input 
                        className="form-control mb-1"
                        type="date"
                        id="fechaNacimiento"
                        name="fechaNacimiento"
                        placeholder="Ingrese Fecha Nac."
                        onChange={handleInputChange}
                        value={paciente.fechaNacimiento}
                        />
                
                    <label className="mb-1" htmlFor="direccion">Dirección</label>
                        <input 
                         className="form-control mb-1"
                         type="text"
                         id="direccion"
                         name="direccion"
                         placeholder="Ingrese Direccion"
                         onChange={handleInputChange}
                         value={paciente.direccion}
                        />
                
                    <label className="mb-1" htmlFor="telefono">Telefono</label>
                        <input 
                         className="form-control mb-1"
                         type="telf"
                         id="telefono"
                         name="telefono"
                         placeholder="Ingrese Numero de cedula"
                         onChange={handleInputChange}
                         value={paciente.telefono}
                        />
                
                    <label className="mb-1" htmlFor="email">Email</label>
                        <input 
                         className="form-control mb-1"
                         type="email"
                         id="email"
                         name="email"
                         placeholder="Ingrese Correo"
                         onChange={handleInputChange}
                         value={paciente.email}
                    />
                    <input type="submit" className="btn btn-success" value={!paciente._id ?  "Guardar" : "Editar"}/>
                </form>
                </div>
      
  </div>
  
    );  
    
};
export default AddEdit;
         