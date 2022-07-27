import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { FaPen, FaEye, FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from 'react-paginate';

const About = () => {
  
  let num = 1;
  const [pacientesPerPage] = useState(num);//pacientes
  const [offset, setOffset] = useState(1);
  const [pacientes, setPacientes] = useState([]);
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    listPacientes();
  }, []);

  const getPacientesData = (data) => {
      return data;
  }
  
  const getNum = (event) => {
    num = event.target.value;
    console.log(num);
  }

  const listPacientes = async () => {
    const response = await axios.get("http://localhost:3000/pacientes");
    
    if (response.status === 200) {      
      const data =  response.data.content;
      const slice = data.slice(offset - 1 , offset - 1 + pacientesPerPage);
      setPacientes(response.data.content);
      //setPacientes(slice);
      setPageCount(Math.ceil(data.length / pacientesPerPage))
      console.log(response.data.content)
    }
  };

  const handlePageClick = (pacientes) => {
    console.log(pacientes.selected);
    const selectedPage = pacientes.selected;
    setOffset(selectedPage + 1)
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
  console.log("pacientes=>", pacientes);

  return (
    <div className="col-md-8">
      <select className="form-control w-25 mb-2" onChange={getNum}>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
      </select>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Fec.Nacimiento</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Email</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {pacientes && pacientes.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.cedula}</td>
                <td>{item.nombre}</td>
                <td>{item.fechaNacimiento}</td>
                <td>{item.direccion}</td>
                <td>{item.telefono}</td>
                <td>{item.email}</td>
                <td>
                  <div className="row">
                    <div className="btn-group" role="group">
                      <Link to={"/view/"+item._id} className="btn btn-warning">
                        <FaEye /> Ver
                      </Link>
                      <Link to={"/update/" + item._id} className="btn btn-primary">
                        <FaPen /> Editar
                      </Link>
                    <button className="btn btn-danger" onClick={() => deletePaciente(item._id)}>
                      <FaTrash /> Eliminar
                    </button>
                    </div>

                    
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ReactPaginate 
        previousLabel={'Anterior'}
        nextLabel={'Siguiente'}
        breakLabel={'...'}
        pageCount={5}
        marginPagesDisplayed={3}
        pageRangeDisplayed={6}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
};


export default About 
 