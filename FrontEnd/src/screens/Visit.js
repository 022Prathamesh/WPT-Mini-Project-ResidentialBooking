import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import trash from "../images/trash-2935441_1281.png";

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-light text-center fs-3">
          Visit booked! We will contact you soon.
        </div>
      </div>
    );
  }

  const deleteCart=(remove,index)=>{
      dispatch({ type: remove, index: index });
      

  }

  const handleCheckout = async () => {
    alert("Visit booked successfully!");
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:5001/api/visits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        visit_data: data,
        email: userEmail,
        visit_date: new Date().toDateString(),
      }),
    });
    console.log("order res:", response);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  let totalPrice = data.reduce((total, house) => total + house.price, 0);
  return (
    <div>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover">
          <thead className="text-success fs-4">
            <tr className="text-light">
              <th className="text-light" scope="col">
                #
              </th>
              <th className="text-light" scope="col">
                Project Type
              </th>
              <th className="text-light" scope="col">
                Units
              </th>
              <th className="text-light" scope="col">
                Price type selected
              </th>
              <th className="text-light" scope="col">
                Amount
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((house, index) => (
              <tr>
                <th className="text-light">{index + 1}</th>
                <td className="text-light">{house.name}</td>
                <td className="text-light">{house.qty}</td>
                <td className="text-light">{house.size}</td>
                <td className="text-light">{house.price}</td>
                <td>
                  <button type="button" className="btn btn-light p-0">
                    <img
                      style={{ width: "40px" }}
                      src={trash}
                      alt="delete"
                      onClick={() => {
                        // dispatch({ type: "REMOVE", index: index });
                        deleteCart("REMOVE",index)
                      }}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="text-light">Total Price: {totalPrice}/-</h1>
        </div>
        <div className="text-center">
          <button className="btn bg-primary mt-5" onClick={handleCheckout}>
            Book Visit
          </button>
        </div>
      </div>
    </div>
  );
}
