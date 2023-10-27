import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const{ _id, title, img, price, description } = service;



    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p className="">{description}</p>
    <p className="text-xl text-orange-600">Price: $ {price}</p>
    <div className="card-actions">
      <Link to={`/services/${_id}`}>
          <button className="btn bg-orange-500 rounded-full px-6 py-3 border-none mt-2 font-bold cursor-pointer">For Details</button>
      </Link>

      </div>
  </div>
</div>
    );
};

export default ServiceCard;