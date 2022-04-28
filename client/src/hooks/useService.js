import { useEffect, useState } from 'react';

const useService = (serviceID) => {
  const [service, setService] = useState();

  useEffect(() => {
    fetch(`https://radiant-wildwood-96648.herokuapp.com/service/${serviceID}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return [service, setService];
};

export default useService;
