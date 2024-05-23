import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MyVisits() {
  const [visitData, setVisitData] = useState(null); // Initialize with null instead of empty string

  const fetchMyOrder = async () => {
    await fetch("http://localhost:5001/api/myvisitdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: localStorage.getItem("userEmail") }),
    }).then(async (res) => {
      let response = await res.json();
      setVisitData(response.visitData); // Access visitData directly
    });
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="container">
        <div className="row">
          {visitData && visitData.visit_data.length > 0 ? ( // Check if visitData and visit_data are defined
            visitData.visit_data.slice(0).reverse().map((item, index) => { // Add index to key for unique keys
              return (
                <div key={index}>
                  <div className="m-auto mt-5 fw-bolder">
                    {new Date(item.visit_date).toLocaleString()}
                    <hr />
                  </div>
                  {Object.values(item).map((arrayData, subIndex) => { // Use Object.values to iterate through the object's values
                    if (typeof arrayData === "object" && !Array.isArray(arrayData)) {
                      return (
                        <div key={subIndex} className="col-12 col-md-6 col-lg-3">
                          <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                            <div className="card-body">
                              <h5 className="card-title">{arrayData.name}</h5>
                              <div className="container w-100 p-0" style={{ height: "38px" }}>
                                <span className="m-1">{arrayData.qty}</span>
                                <span className="m-1">{arrayData.size}</span>
                                <div className="d-inline ms-2 h-100 w-20 fs-5">₹{arrayData.price}/-</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      return null; // Skip non-object values
                    }
                  })}
                </div>
              );
            })
          ) : (
            <p>No visit data available.</p>
          )}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
