import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	

	const [contacto, setContacto] = useState({
		full_name: "",
		email: "",
		agenda_slug: "agenda_Stalin_Narvaez",
		address: "",
		phone: ""
	});

	const crearContacto = () => {
		fetch("https://playground.4geeks.com/apis/fake/contact/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(contacto)
		})
			.then(response => response.json())
			.then(data => {
				setContacto({
					full_name: "",
					email: "",
					agenda_slug: "agenda_Stalin_Narvaez",
					address: "",
					phone: ""
				});
				console.log("Contacto creado:", data);
			})
			.catch(error => {
				
				console.error("Error al crear el contacto:", error);
			});	
	};
	const handleInputChange = event => {
		const { name, value } = event.target;
		setContacto(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	return (
		<div className="container">
			<form>
				<h1 className="text-center">Agregar nuevo contacto</h1>
				<div className="row mb-3">
					<label htmlFor="full_name" className="col-sm-2 col-form-label">Nombre completo</label>
					<div className="col-sm-10">
						<input
							onChange={handleInputChange}
							value={contacto.full_name}
							type="text"
							className="form-control"
							id="full_name"
							name="full_name"
							placeholder="Nombre completo"
						/>
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
					<div className="col-sm-10">
						<input
							onChange={handleInputChange}
							value={contacto.email}
							type="email"
							className="form-control"
							id="email"
							name="email"
							placeholder="Email"
						/>
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="phone" className="col-sm-2 col-form-label">Telefono</label>
					<div className="col-sm-10">
						<input
							onChange={handleInputChange}
							value={contacto.phone}
							type="number"
							className="form-control"
							id="phone"
							name="phone"
							placeholder="Telefono"
						/>
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="address" className="col-sm-2 col-form-label">Direccion</label>
					<div className="col-sm-10">
						<input
							onChange={handleInputChange}
							value={contacto.address}
							type="text"
							className="form-control"
							id="address"
							name="address"
							placeholder="Dirección"
						/>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm-10 offset-sm-2">
						<div className="form-check"></div>
					</div>
				</div>
				<div className="d-grid gap-2">
					<button onClick={crearContacto} type="button" className="btn btn-warning save">
						Guardar Contacto
					</button>
				</div>
			</form>
			<Link to="/">
				<a className="icon-link icon-link-hover"/>Volver
			</Link>
		</div>
	);
};