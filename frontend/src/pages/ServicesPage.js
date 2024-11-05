import React, { useEffect, useState } from 'react';
import { fetchServices } from '../services/api';
import ServiceCard from '../components/ServiceCard';

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const { data } = await fetchServices();
      setServices(data);
    };
    getServices();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
