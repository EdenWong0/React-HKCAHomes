import React from 'react'
import { list } from '../../data/data'

const UpdateCard = () => {
  return (
    <div className="content grid3 mtop">
      {list.map((val, index) => {
        const { cover, category, location, name, price, type } = val;

        const isSale = category === "For Sale";

        return (
          <div className="box shadow" key={index}>
            <div className="img">
              <img src={cover} alt={name} />
            </div>

            <div className="text">
              <div className="category flex">
                <span
                  style={{
                    background: isSale ? "#25b5971a" : "#ff98001a",
                    color: isSale ? "#25b579" : "#ff9800"
                  }}
                >
                  {category}
                </span>

                <i className="fa fa-heart"></i>
              </div>

              <h4>{name}</h4>

              <p className="location">
                <i className="fa fa-location-dot"></i> {location}
              </p>
            </div>

            <div className="button flex">
              <button className="btn2">{price}</button>
              <span>{type}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UpdateCard