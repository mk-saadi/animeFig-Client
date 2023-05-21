/* eslint-disable react/prop-types */
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiEditBoxFill } from "react-icons/ri";

const MyToysD = ({ fig }) => {
    return (
        <tr className="text-sm">
            <th>
                <img
                    src={fig.img}
                    alt=""
                    className="h-12 w-12 object-cover"
                />
            </th>
            <td>
                <p>{fig.seller.length > 6 ? `${fig.seller.slice(0, 6)}...` : fig.seller}</p>
            </td>
            <td>
                <p>{fig.name.slice(0, 25)}...</p>
            </td>
            <td>
                <p>{fig.category}</p>
            </td>
            <td>
                <p>{fig.quantity}</p>
            </td>
            <td>
                <p>$ {fig.price}</p>
            </td>
            {/* todo: delete operation here */}
            <td>
                <Link to={`/figDetails/${fig._id}`}>
                    <button className="btn btn-sm px-6 btn-info rounded-sm text-white text-xs flex justify-center items-center gap-2">
                        Details <BsFillArrowRightSquareFill />
                    </button>
                </Link>
            </td>
            <td>
                <Link to={`/editMyToys/${fig._id}`}>
                    <button className="btn btn-sm px-6 btn-info rounded-sm text-white text-xs flex justify-center items-center gap-2 flex-nowrap">
                        Edit <RiEditBoxFill />
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default MyToysD;