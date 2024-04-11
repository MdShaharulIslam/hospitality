import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from 'react-router-dom';

const Products = ({ products }) => {
  const {id, segment_name, image_url, estate_title } = products;
  return (
    <div className="mb-8">
     
      <div className="card w-96 glass">
        <figure>
          <img data-aos="fade-up" className="w-full h-48"
            src={image_url}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 data-aos="fade-down-right" className="card-title font-bold text-3xl">{estate_title}</h2>
          <p>{segment_name}</p>
          <div className="card-actions justify-start">
            <Link to={`/details/${id}`}><button className="btn bg-purple-400">View Property</button></Link>
            
          </div>
        </div>
      </div>
    </div>
    
  );
};

Products.propTypes = {
  products: PropTypes.shape({
    segment_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    estate_title: PropTypes.string.isRequired
  }).isRequired
};

export default Products;
