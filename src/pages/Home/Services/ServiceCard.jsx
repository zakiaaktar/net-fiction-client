import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const{title, img, price, description} = service;



    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p className="text-xl text-orange-600">Price: $ {price}</p>
    <div className="card-actions">
      <Link>
          <button className="btn btn-primary">Buy Now</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;