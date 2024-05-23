import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let [qty, setQty] = useState(1);
  let [size, setSize] = useState("");

  const handleAddTocart = async () => {
      console.log("CART");
      let house = [];
      for (const item of data) {
        if (item.id === props.houseItem._id) {
          house = item;
          break;
        }
      }
      if (house != []) {
        if (house.size === size) {
          await dispatch({
            type: "UPDATE",
            id: props.houseItem._id,
            price: finalPrice,
            qty: qty,
          });
          return;
        } else if (house.size !== size) {
          await dispatch({
            type: "ADD",
            id: props.houseItem._id,
            name: props.houseItem.name,
            price: finalPrice,
            qty: qty,
            size: size,
          });
          return;
        }
      }
      await dispatch({
        type: "ADD",
        id: props.houseItem._id,
        name: props.houseItem.name,
        price: finalPrice,
        qty: qty,
        size: size,
      });

  };

  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  return (
    <div>
      <div className="card mt-3" style={{ width: "20rem" }}>
        <img
          style={{ height: "240px", objectFit: "fill" }}
          className="card-img-top"
          src={props.houseItem.img}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.houseItem.name}</h5>
          <p className="card-text">{props.houseItem.description}</p>
          <div>
            <select
              className="m-2 h-100 bg-primary rounded"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              ref={priceRef}
              className="m-2 h-100 bg-primary rounded"
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
          </div>
          <hr />
          <button className="btn btn-primary ms-2" onClick={handleAddTocart}>
            Take visit
          </button>
        </div>
      </div>
    </div>
  );
}
