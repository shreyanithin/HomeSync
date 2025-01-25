// src/pages/Apartment.tsx

import React from 'react';
import './apartment.css';  // Make sure to have the correct path to the CSS file

// Import images directly for static assets
import villa1 from '../assets/pg3v1.jpg';
import villa2 from '../assets/pg3v2.jpg';
import villa3 from '../assets/pg3v3.jpg';
import apartment1 from '../assets/pg3v4.jpg';
import penthouse1 from '../assets/pg3v5.jpg';
import condo1 from '../assets/pg3v6.jpg';

interface Property {
  Image: string;
  Type: string;
  price: string;
  Address: string;
  Bedrooms: number;
  Bathrooms: number;
  Area: string;
  Floor: string | number;
  Parking: string | number;
}

const Apartment: React.FC = () => {
  const properties: Property[] = [
    {
      Image: villa1,  // Use the imported image here
      Type: "Luxury Villa",
      price: "$2.264.000",
      Address: "18 Old Street Miami,OR 97219",
      Bedrooms: 8,
      Bathrooms: 8,
      Area: "545m2",
      Floor: 3,
      Parking: 6,
    },
    {
      Image: villa2,  // Use the imported image here
      Type: "Luxury Villa",
      price: "$1.180.000",
      Address: "54 New Street Florida,OR 27001",
      Bedrooms: 6,
      Bathrooms: 5,
      Area: "450m2",
      Floor: 3,
      Parking: 8,
    },
    {
      Image: villa3,  // Use the imported image here
      Type: "Luxury Villa",
      price: "$1.460.000",
      Address: "26 Mid Street Portland,OR 38540",
      Bedrooms: 5,
      Bathrooms: 4,
      Area: "225m2",
      Floor: 3,
      Parking: 10,
    },
    {
      Image: apartment1,  // Use the imported image here
      Type: "Apartment",
      price: "$584.500",
      Address: "12 Hope Street Portland,OR 12650",
      Bedrooms: 4,
      Bathrooms: 3,
      Area: "125m2",
      Floor: "25th",
      Parking: "2 cars",
    },
    {
      Image: penthouse1,  // Use the imported image here
      Type: "Penthouse",
      price: "$925.600",
      Address: "34 Hope Street Portland,OR 42680",
      Bedrooms: 4,
      Bathrooms: 4,
      Area: "180m2",
      Floor: "38th",
      Parking: "2 cars",
    },
    {
      Image: condo1,  // Use the imported image here
      Type: "Modern condo",
      price: "$450.000",
      Address: "22 Hope Street Portland,OR 16540",
      Bedrooms: 3,
      Bathrooms: 2,
      Area: "545m2",
      Floor: "26th",
      Parking: "3 cars",
    },
  ];

  return (
    <div className="apartment-container">
      <div className="header">
        <h1>Properties</h1>
        <div className="button-container">
          <ul className="btn">Show All</ul>
          <ul className="btn">Apartment</ul>
          <ul className="btn" id="vil">Villa</ul>
          <ul className="btn">Penthouse</ul>
        </div>
      </div>

      <div className="property-grid">
        {properties.map((property, index) => (
          <div key={index} className="property-card">
            <img src={property.Image} alt={property.Type} className="property-image" />
            <div className="property-details">
              <div className="typeprice">
                <p className="property-type">{property.Type}</p>
                <p className="property-price"><b>{property.price}</b></p>
              </div>
              <div className="property-description">
                <h3>{property.Address}</h3>
                <p>Bedrooms: {property.Bedrooms}</p>
                <p>Bathrooms: {property.Bathrooms}</p>
                <p>Area: {property.Area}</p>
                <p>Floor: {property.Floor}</p>
                <p>Parking: {property.Parking}</p>
              </div>
              <hr />
              <button className="schedule-visit">Schedule a Visit</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <ul><a href="#page1" className="page-link">1</a></ul>
        <ul><a href="#page2" className="page-link">2</a></ul>
        <ul><a href="#page3" className="page-link">3</a></ul>
        <ul><a href="#next" className="page-link">--</a></ul>
      </div>
    </div>
  );
};

export default Apartment;
