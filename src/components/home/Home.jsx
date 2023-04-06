import React from 'react'
import './Home.scss'

const Home = () => {
    return (
        <body className='home'>
            <div className='arriba'>
                <img className='imagen-responsive' />
            </div>
            <main className='importantisimo'>
                <div className='importante'>
                    <p className='text-center font-family-arial'> 

                    

                    Bienvenido a nuestra tienda de artículos deportivos, el lugar perfecto para todos los amantes del deporte y la actividad física. Nuestro amplio catálogo de productos incluye desde ropa deportiva, calzado, accesorios y equipamiento para todo tipo de deportes como fútbol, baloncesto, tenis, golf, natación, ciclismo y mucho más.

                    <br />
                    <br />
                    
                    En nuestra tienda encontrarás productos de las marcas más reconocidas y de alta calidad, asegurando que los artículos que adquieras te brinden el rendimiento y la comodidad que necesitas para alcanzar tus metas deportivas. Además, contamos con un equipo de profesionales capacitados en asesoramiento deportivo que podrán ayudarte en la elección de tus productos y recomendarte los mejores accesorios para mejorar tu entrenamiento.

                    <br />
                    <br />


                    No importa si eres un atleta experimentado o si simplemente buscas comenzar una nueva actividad física, en nuestra tienda encontrarás todo lo que necesitas para lograr tus objetivos. También ofrecemos servicios de personalización de artículos deportivos, como la serigrafía de camisetas, bordados en gorras, entre otros, para que puedas personalizar tu equipo deportivo y hacerlo aún más exclusivo. 

                    </p>
                </div>
            </main>
            <div className='abajo'>
                <img className='imagen-responsive imagen-inferior'/>
            </div>
        </body>
    )
} 

export default Home