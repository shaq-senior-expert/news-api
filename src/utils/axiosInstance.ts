/* eslint-disable no-param-reassign */
import axios from 'axios';
import localstorageKeys from 'hooks/localstorageKeys';

import { getLocalStorageItem } from './localStorageHelper';

// import {
//   RefreshAccessToken,
//   handleNewRefreshTokenResponse,
// } from "containers/queries";

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

// const handleLogoutRedirectUser = () => {
//   window.location = routes.LOGIN.pathname;
//   localStorage.removeItem(localStorageKeys.AUTH_TOKEN);
// };

AxiosInstance.interceptors.request.use(async (config: any) => {
  if (config && config.url?.includes('{uuid}')) {
    const uuid = getLocalStorageItem(
      localstorageKeys.ONBOARDING_PROFILE
    ).internal_uuid;
    config.url = config.url.replace('{uuid}', uuid);
  }

  const onboardingToken = getLocalStorageItem(localstorageKeys.ONBOARDING_AUTH);

  if (onboardingToken) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${onboardingToken}`,
      },
    };
  }
  return config;
});

AxiosInstance.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    // const originalRequest = error.config;

    // if (
    //   [401].includes(error.response.status) &&
    //   getLocalStorageItem(localStorageKeys.AUTH_TOKEN)
    // ) {
    //   originalRequest._retry = true;

    //   try {
    // const access_token = await RefreshAccessToken();
    // if (access_token) {
    //   // handleNewRefreshTokenResponse(access_token);
    //   return await AxiosInstance(originalRequest);
    // }
    //   } catch (error) {
    //     handleLogoutRedirectUser();
    //   }
    // }

    if (
      error?.response?.data?.error_messages === 'Unauthorized' &&
      error.response.data.status === 401
    ) {
      // handleLogoutRedirectUser();
    }

    return Promise.reject(error.response.data || error.response);
  }
);

export default AxiosInstance;
