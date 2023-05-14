import React, { useState } from "react";
import "./BrandCategoryCard.css";
import { Link } from "react-router-dom";
const BrandCategoryCard = () => {
  const [brandCategories, setBrandCategories] = useState([
    {
      name: "Ev-Hotel",
      image:
        "https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Gıda",
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Giyim",
      image:
        "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Ulaşım",
      image:
        "https://images.pexels.com/photos/163792/model-planes-airplanes-miniatur-wunderland-hamburg-163792.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ]);

  return (
    <div className="row my-3">
      <h4>Kategoriler</h4>
      {brandCategories.map((brandCategory) => (
        <div className="col-md-4 col-sm-12" style={{ marginBottom: 18 }}>
          <Link to={`/kategoriler/${brandCategory.name}`}>
            <div className="brand-card" style={{ borderRadius: 18 }}>
              <img src={`${brandCategory.image}`} className="img-fluid" />
              <div className="brand-card-text">
                <h3>{brandCategory.name}</h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BrandCategoryCard;
