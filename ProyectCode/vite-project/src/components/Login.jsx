import React, { useState } from "react";
import ImageProfile from '../images/profile1.jpg';
import '../styles/Login.css';
import appFirebase from '../conexion/credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase)

const Login = () => {

  const [registrando, setRegistrando] = useState(false)

  const functAutenticacion = async(e) =>{
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    if(registrando){
      try{
        await createUserWithEmailAndPassword(auth,correo,contraseña)
      }catch(error){
        alert("Asegurese que la contraseña tenga mas de 8 caractereres")
      }
    }
    else{
      try{
        await signInWithEmailAndPassword(auth,correo,contraseña)
      }catch (error){
        alert("El correo o la contraseña son incorrectos")
      }
    }
  }

  return(
    <div className="container">
    <div className="row">
      {/* mas pequeña*/}
      <div className = "col-md-4"> 
        <div className="padre">
          
          <div className="card card-body shadow-lg"> 
          
            <img src={ImageProfile} alt= "" className="estilo-profile"/>
              <form onSubmit={functAutenticacion}>
                
                <input type="text" placeholder= 'ingrese el usuario' className="cajatexto" id="email"/>
                <input type="password" placeholder= 'ingrese la contraseña' className="cajatexto" id="password"/>
                <button className="btnform">{registrando ? "Registrate" : "Inicia Sesion"}</button>
              </form>
              <h4 className="texto">{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button className="btnswitch" onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia Sesion" : "Registrate"}</button></h4>
          </div>

        </div>
      </div>
      {/* columna mas grande */}
      <div className="col-md-8">
      
      </div>
    </div>
    </div>
  )
}
export default Login