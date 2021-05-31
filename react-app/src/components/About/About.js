import React from 'react'
import style from './About.module.css'
import studentPhoto from '../../assets/images/studentPhoto.jpg'

const About = props => {
    return (
        <div className={style.aboutBlock}>
            <div className={style.image}>
                <img src={studentPhoto} alt="img"/>
            </div>
           <div className={style.info}>
               <p>ФИО: Шевченко Артур Максимович</p>
               <p>Группа: CKW29</p>
           </div>
        </div>
    )
}

export default About