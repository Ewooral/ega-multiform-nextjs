import { useState, useEffect } from 'react';
import { CommonDataSvcClient } from '@/proto/generated/CommonDataServiceClientPb';
import { EmptyCommonDataMessage } from '@/proto/generated/CommonData_pb';

const useCountries = (url: string) => {
  const client = new CommonDataSvcClient(url, null, null);
  const [countryOption, setCountryOption] = useState < any[] > ([]);

  useEffect(() => {
    const request = new EmptyCommonDataMessage();
    client.getReceivingOperatingCountries(request, null, (err: { message: any; }, response: { toObject: () => any; }) => {
      if (err) {
        console.log(err.message);
        return;
      }
      // Country Array
      const countryArray = [
        {
          label: 'Select country',
          value: '',
          flag: '',
        },
      ];

      // Construct the country object
      const countrylistArray = response.toObject();

      // Creating the country options
      for (const countryObj of countrylistArray.countrylistList) {
        countryArray.push({
          label: countryObj.countryname,
          value: countryObj.countrycode,
          flag: countryObj.countryflagurl,
        });
      }

      // Setting countries to state
      setCountryOption(countryArray);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [countryOption];
};

export default useCountries;
