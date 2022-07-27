
import React,{  useEffect, useState} from "react";
import { Redirect, useHistory, useParams,Link} from "react-router-dom";
import axios from "axios";
import { Toast } from "bootstrap";
import  deletePaciente from "./About";
import { FaPen, FaEye, FaTrash, FaPlus, FaArrowLeft } from "react-icons/fa";
import { render } from "@testing-library/react";

const initialPacienteModel={
  _id: "",
  cedula:"",
  nombre:"",
  fechaNacimiento:"",
  direccion:"",
  telefono:"",
  email:"",

};

const View = () => {
  const [data, setData] = useState([]);
  const [paciente, setPaciente] = useState(initialPacienteModel);
  const {
    cedula,
    nombre,
    fechaNacimiento,
    direccion,
    telefono,
    email,
  } = initialPacienteModel;
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getPaciente(id);
      console.log(id);
    }
  }, id);

  const getPaciente = async (id) => {
    const response = await axios
      .get(`http://localhost:3000/pacientes/${id}`)
      .then(
        (response) => {
          console.log(response);
          setPaciente({ ...response.data.content });
          //setPaciente(...response.data.content);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const deletePaciente = async (id) => {
    if(
        window.confirm('Estas de seguro de eliminar el elemento?')
    ){
        const response = await axios.delete(`http://localhost:3000/pacientes/${id}`).then((response) => {
            console.log(response);
            window.location = "/about";
        }, (error) => {
            console.log(error);
        });
    }
  }
  console.log("data=>", data);


  return (
          <div className="container-fluid">  
            <div className="card text-white bg-dark mb-3 p-5">  
              <h1><b>Cedula:</b> {paciente.cedula}</h1>
              <p><b>Nombre:</b> {paciente.nombre}</p>
              <p><b>Fecha Nacimiento:</b> {paciente.fechaNacimiento}</p>
              <p><b>Direccion:</b> {paciente.direccion}</p>
              <p><b>Telefono:</b> {paciente.telefono}</p>
              <p><b>email:</b> {paciente.email}</p>
            </div>
            <div className="btn-group" role="group">								
                <Link to={"/about"} className="btn btn-primary">
                    <FaArrowLeft /> Volver
                </Link>
								<button type="button" onClick={() => deletePaciente(id)} className="btn btn-danger" >
                  <FaTrash />Eliminar
                </button>
							</div>
          </div>

          

          

  )

};
export default View;
