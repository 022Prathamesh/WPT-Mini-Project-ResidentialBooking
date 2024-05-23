import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"

export default function Home() {
  const [houseCat, setHouseCat] = useState([]);
  const [houseitem, setHouseItem] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:5001/api/housedata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    console.log("DATA",response);
    setHouseItem(response[0]);
    setHouseCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-carousel-image"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        {houseCat != [] ? (
          houseCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3 ">
                  <h3 className="text-dark">
                  {data.CategoryName}                  
                  </h3>
                  
                </div>
                <hr/>
                {houseitem != [] ? (
                  houseitem
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItem) => {
                      return (
                        <div
                          className="col-12 col-md-6 col-lg-3"
                          key={filterItem._id}
                          style={{ marginRight: "5%" }}
                        >
                          <Card
                            houseName={filterItem.name}
                            options={filterItem.options[0]}
                            imgsrc={filterItem.img}
                            desc={filterItem.description}
                            houseItem={filterItem}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>no such data</div>
                )}
              </div>
            );
          })
        ) : (
          <div>"""""""""""""""""""""""""""</div>
        )}
      </div>
   
      <div>
        <Footer />
      </div>
    </div>
  );
}
