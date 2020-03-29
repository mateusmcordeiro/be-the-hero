import React from 'react';
import './styles.scss';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/svg/logo.svg';
import heroesImg from '../../assets/svg/heroes.svg';

export default function Logon() {
    return(
     <div className="logon-container">
         <section className="form">
            <img src={logoImg} alt="Be The Hero" />
             <form action="">
                 <h1>Faça seu logon</h1>

                 <input type="text" placeholder="Sua ID"/>
                 <button className="button" type="submit">Entrar</button>
                 <Link to="/register" className="back-link">
                     <FiLogIn size={20} color="#E02041"/>
                     Não tenho cadastro
                 </Link>
             </form>
         </section>
         <img src={heroesImg} alt="Heroes" />
     </div>
    );
}