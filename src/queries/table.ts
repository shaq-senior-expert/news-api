import { useQuery } from 'react-query';
import { axiosInstance } from 'utils';

import { queryKeys } from './queryKeys';

const GetCorelationData = () => {
  const method = 'GET';
  const url = `industries?groupby=industry&from_year=2021&to_year=2022`;

  return axiosInstance({
    method,
    url,
  });
};

export const useCorelationDataQuery = () => {
  return useQuery([queryKeys.CORELATION], () => GetCorelationData(), {
    enabled: true,
  });
};
