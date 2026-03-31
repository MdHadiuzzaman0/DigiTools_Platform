
import SingleCard from './SingleCard';

const Product = ({products, handleSelected, selected}) => {
   
    return (
        <div>
            
            <div className='grid grid-cols-3 mx-50 mt-7 gap-8'>
            { products.map(product => <SingleCard product={product} handleSelected={handleSelected} key={product.id} selected={selected}></SingleCard>) }
            </div>

        </div>
    );
};

export default Product;