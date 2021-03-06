import React, {useEffect, useState} from 'react';
import './styles.scss';
import { FiPower, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/svg/logo.svg';
import IncidentBox from "../../components/IncidentBox";
import api from "../../services/api";
import { useHistory } from 'react-router-dom';

export default function Profile() {
    const [incidents, setIncidents] = useState<any[]>([])
;
    const ongName = localStorage.getItem('ongName') || 'error';
    const ongId = localStorage.getItem('ongId') || 'error';

    const history = useHistory();

    async function boot() {
        const response = await api.get('profile', {
            headers: {
                Authorization: ongId
            }
        });
        setIncidents(response.data);
    }

    useEffect(
        () => {
            boot()
        },
        []
    );

    function logOut() {
        localStorage.removeItem('ongName');
        localStorage.removeItem('ongId');
        history.push('/');
    }

    return(
     <div className="profile-container">
         <nav>
             <div className="box-left">
                 <img src={logoImg} alt={'Be the Hero'}/>
                 <p>Bem vinda,  {ongName}</p>
             </div>
             <div className="box-right">
                 <Link to="/register-incident" className="button" id="new-incident" >
                     <FiPlus size={24} color="#fff" />
                 </Link>
                 <button id="logout" onClick={logOut}>
                     <FiPower size={24} color="#E02041" />
                 </button>
             </div>
         </nav>
         <section className="profile-section">
             <h1>{ incidents.length > 0 ? 'Casos cadastrados' : 'Nenhum caso cadastrado' }</h1>
             <div className="profile-content-body">
                 {
                     incidents.map(
                         incident => (
                             <IncidentBox
                                 id={incident.id}
                                 title={incident.title}
                                 description={incident.description}
                                 value={incident.value}
                             />
                         )
                     )
                 }
             </div>
         </section>
     </div>
    );
}