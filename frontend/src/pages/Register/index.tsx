import React from 'react';
import './styles.scss';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/svg/logo.svg';

export default function Register() {
    return(
     <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                <Link to="/" className="back-link">
                    <FiArrowLeft size={20} color="#E02041"/>
                    Não tenho cadastro
                </Link>
            </section>
            <form action="">
                <input placeholder="ONG's Name" />
                <input type="email" placeholder="email" />
                <input placeholder="whatsapp" />

                <div className="input-group">
                    <input placeholder="city" />
                    <input placeholder="UF" style={{ width: 80 }} />
                </div>

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
     </div>
    );
}