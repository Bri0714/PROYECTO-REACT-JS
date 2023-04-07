import { Card } from "../Card/Card"

const ProductList = ({productos}) => {
    return (
        
    <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
            {productos.map((producto) => (
                <div className="col" key={producto.id}>
                    <Card producto={producto}/>
                </div>
            ))}
        </div>
    </div>
    )
}

export default ProductList