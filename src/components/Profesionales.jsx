import React from 'react'
import Cards from './Cards'
import perfildemo from '../assets/perfil.jpg'
import FBarranco from '../assets/FedericoB.jpg'
import KarinaG from '../assets/KarinaG.jpg'
import GracielaV from '../assets/GracielaV.jpg'
import LiliaLoboM from '../assets/LidiaLoboMarquez.jpg'
import CeciliaR from '../assets/CeciliaR.jpg'
import IvanM from '../assets/IvanM.jpg'
import herreraE from '../assets/HerreraE.jpg'
import '../styles/Profesionales.css'






function Profesionales() {
  return (
    <div className='p-2 row g-0 justify-content-around'>
      <Cards 
        className='my-2'
        img= {FBarranco}
        name={'Federico'}
        lastName={'Barranco'}
        prof= {'Médico Cirujano'}
        schedule= {'De lunes a viernes de 8 a 14hrs.'}
        gender={1}
        link='https://wa.me/5493813599244'
      />
      <Cards 
        className='my-2'
        img= {perfildemo}
        name={'Maria Eugenia'}
        lastName={'Longo'}
        prof= {'Ginecóloga y Obstetra'}
        schedule= {'De lunes a viernes de 8 a 14hrs.'}
        gender={0}
        link='https://wa.me/message/REYIHIZEINF4J1'

      />
      <Cards 
        className='my-2'
        img= {GracielaV}
        name={'Graciela'}
        lastName={'Varela'}
        prof= {'Homeópata'}
        schedule= {'De lunes a viernes de 8 a 14hrs.'}
        gender={0}
        link='https://wa.me/p/5140600955992706/5493816381544'
      />
      <Cards 
        className='my-2'
        img= {KarinaG}
        name={'Karina'}
        lastName={'Gallardo'}
        prof= {'Diabetóloga (Buenos Aires)'}
        schedule= {'De lunes a viernes de 8 a 14hrs.'}
        gender={0}
        link='https://wa.link/k58wmg'

      />
      <Cards
        className='my-2' 
        img= {IvanM}
        name={'Ivan'}
        lastName={'Mariani'}
        prof= {'Psiquiatra'}
        schedule= {'De lunes a viernes de 8 a 14hrs.'}
        gender={1}
        link='https://wa.me/5493813303404'

      />
      <Cards
        className='my-2' 
        img= {CeciliaR}
        name={'Cecilia'}
        lastName={'Goizueta'}
        prof= {'Reumatóloga'}
        schedule= {'De lunes a viernes de 8 a 14hrs.'}
        gender={0}
        link='https://wa.me/5493816217757'

      />
      <Cards
        className='my-2' 
        img= {LiliaLoboM}
        name={'Lilia'}
        lastName={'Lobo Márquez'}
        prof= {'Cardióloga'}
        schedule= {'De lunes a viernes de 8 a 14hrs.'}
        gender={0}
        link='https://wa.me/5493816217757'

      />
      <Cards
        className='my-2' 
        img= {herreraE}
        name={'Elizabeth'}
        lastName={'Herrera'}
        prof= {'Nutricionista y endocrinóloga'}
        schedule= {'De lunes a viernes de 8 a 14hrs.'}
        gender={0}
        link='https://wa.me/5493816217757'

      />
      
    </div>
  )
}

export default Profesionales