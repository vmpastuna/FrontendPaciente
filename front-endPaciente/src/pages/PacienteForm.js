import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const PacienteForm = (props) => {
const validationSchema = Yup.object().shape({
	cedula: Yup.string().required("Required"),
    nombre: Yup.string().required("Required"),
    fechaNacimiento: Yup.string().required("Required"),
    direccion: Yup.string().required("Required"),
    telefono: Yup.string().required("Required"),
	email: Yup.string().required("Required"),
	
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<Field name="cedula" type="text"
				className="form-control" />Nombre
			<ErrorMessage
			name="cedula"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <FormGroup>
			<Field name="nombre" type="text"
				className="form-control" />
			<ErrorMessage
			name="nombre"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <FormGroup>
			<Field name="fechaNacimiento" type="date"
				className="form-control" />
			<ErrorMessage
			name="fechaNacimiento"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <FormGroup>
			<Field name="direccion" type="text"
				className="form-control" />
			<ErrorMessage
			name="direccion"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <FormGroup>
			<Field name="telefono" type="text"
				className="form-control" />
			<ErrorMessage
			name="telefono"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>

		<FormGroup>
			<Field name="email" type="text"
				className="form-control" />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default PacienteForm;
