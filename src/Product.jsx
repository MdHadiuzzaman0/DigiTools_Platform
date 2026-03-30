
import SingleCard from './SingleCard';

const Product = ({products, handleSelected, selected}) => {
   
    return (
        <div>
            
            <div className='grid grid-cols-3 mx-55 mt-7 gap-5'>
            { products.map(product => <SingleCard product={product} handleSelected={handleSelected} key={product.id} selected={selected}></SingleCard>) }
            </div>

        </div>
    );
};

export default Product;