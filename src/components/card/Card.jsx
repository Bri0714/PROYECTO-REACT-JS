import { Link } from 'react-router-dom'
import './Card.css'

export const Card = ({producto}) => {
    return (
        
        <Link to={`${producto.id}`} className='text-decoration-none'>

            <div className="card target text-black">
                <img src={producto.Image} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center text-black">{producto.title}</h5>
                    <p className="card-text text-center">$ {producto.price}</p>
                </div>
            </div>

        </Link>
    
    )
}

export default Card
