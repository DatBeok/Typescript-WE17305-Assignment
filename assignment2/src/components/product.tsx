import { IProduct } from "../models";
import { Link } from "react-router-dom";

type Props = {
  data: IProduct;
};

const Product = ({ data }: Props) => {
  return (
    <Link to={`/product/${data.id}`} className="block">
      <div>
        <img
          alt="Art"
          src={data.images?.[0].base_url}
          className="h-160px w-160px object-cover"
        />

        <h3 className="mt-4 text-lg text-gray-900 sm:text-200">{data.name}</h3>

        <div className="grid grid-cols-2 ">
          <p className="mt-2 max-w-sm text-red-600 font-bold">{data.price}</p>
          <p className="mt-2 text-xs text-gray-600 font-bold line-through">
            {data.original_price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
