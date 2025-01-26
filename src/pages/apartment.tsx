import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './apartment.css';
import Navigation from '../components/navigation2';


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
  const [selectedType, setSelectedType] = useState<string>('All');
  const [schedulingState, setSchedulingState] = useState<{
    [key: number]: { date: Date | null; time: string | null; isScheduled: boolean };
  }>({});

  const properties: Property[] = [
    {
      Image: villa1,
      Type: 'Luxury Villa',
      price: '$2,264.000',
      Address: '18 Old Street Miami,OR 97219',
      Bedrooms: 8,
      Bathrooms: 8,
      Area: '545m2',
      Floor: 3,
      Parking: 6,
    },
    {
      Image: villa2,
      Type: 'Luxury Villa',
      price: '$1,180.000',
      Address: '54 New Street Florida,OR 27001',
      Bedrooms: 6,
      Bathrooms: 5,
      Area: '450m2',
      Floor: 3,
      Parking: 8,
    },
    {
      Image: villa3,
      Type: 'Luxury Villa',
      price: '$1,460.000',
      Address: '26 Mid Street Portland,OR 38540',
      Bedrooms: 5,
      Bathrooms: 4,
      Area: '225m2',
      Floor: 3,
      Parking: 10,
    },
    {
      Image: apartment1,
      Type: 'Apartment',
      price: '$584.500',
      Address: '12 Hope Street Portland,OR 12650',
      Bedrooms: 4,
      Bathrooms: 3,
      Area: '125m2',
      Floor: '25th',
      Parking: '2 cars',
    },
    {
      Image: penthouse1,
      Type: 'Penthouse',
      price: '$925.600',
      Address: '34 Hope Street Portland,OR 42680',
      Bedrooms: 4,
      Bathrooms: 4,
      Area: '180m2',
      Floor: '38th',
      Parking: '2 cars',
    },
    {
      Image: condo1,
      Type: 'Modern condo',
      price: '$450.000',
      Address: '22 Hope Street Portland,OR 16540',
      Bedrooms: 3,
      Bathrooms: 2,
      Area: '545m2',
      Floor: '26th',
      Parking: '3 cars',
    },
  ];

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  const handleFilterChange = (type: string) => {
    setSelectedType(type);
  };

  const handleScheduleClick = (index: number) => {
    setSchedulingState((prev) => ({
      ...prev,
      [index]: { ...prev[index], isScheduled: false, date: null, time: null },
    }));
  };

  const handleDateChange = (index: number, date: Date) => {
    setSchedulingState((prev) => ({
      ...prev,
      [index]: { ...prev[index], date },
    }));
  };

  const handleTimeChange = (index: number, time: string) => {
    setSchedulingState((prev) => ({
      ...prev,
      [index]: { ...prev[index], time, isScheduled: !!prev[index]?.date && !!time },
    }));
  };

  const handleCancelSchedule = (index: number) => {
    const confirmCancel = window.confirm('Are you sure you want to cancel the scheduled visit?');
    if (confirmCancel) {
      setSchedulingState((prev) => {
        const updated = { ...prev };
        delete updated[index];
        return updated;
      });
    }
  };

  const filteredProperties = selectedType === 'All'
    ? properties
    : properties.filter((property) => property.Type === selectedType);

  return (
    <div>
          <Navigation/>
    <div className="apartment-container">
      <div className="header">
        <h1>Properties</h1>
        <div className="button-container">
          <ul className="btn" onClick={() => handleFilterChange('All')}>Show All</ul>
          <ul className="btn" onClick={() => handleFilterChange('Apartment')}>Apartment</ul>
          <ul className="btn" onClick={() => handleFilterChange('Luxury Villa')}>Villa</ul>
          <ul className="btn" onClick={() => handleFilterChange('Penthouse')}>Penthouse</ul>
          <ul className="btn" onClick={() => handleFilterChange('Modern condo')}>Condo</ul>
        </div>
      </div>

      <div className="property-grid">
        {filteredProperties.map((property, index) => {
          const { date, time, isScheduled } = schedulingState[index] || {};
          return (
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
                {isScheduled ? (
                  <button
                    className="schedule-visit scheduled"
                    onClick={() => handleCancelSchedule(index)}
                  >
                    Scheduled
                  </button>
                ) : (
                  <div>
                    <button
                      className="schedule-visit"
                      onClick={() => handleScheduleClick(index)}
                    >
                      Schedule a Visit
                    </button>
                    {schedulingState[index] && (
                      <div className="schedule-container">
                        <div className="schedule-row">
                          <p>Select Date:</p>
                          <DatePicker
                            selected={date || null}
                            onChange={(date) => handleDateChange(index, date!)}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                          />
                        </div>
                        <div className="schedule-row">
                          <p>Select Time:</p>
                          <select
                            onChange={(e) => handleTimeChange(index, e.target.value)}
                            value={time || ''}
                          >
                            <option value="" disabled></option>
                            {availableTimes.map((slot, i) => (
                              <option key={i} value={slot}>{slot}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Apartment;
