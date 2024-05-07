import React, { lazy, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from './RouteConstants';

// import AppContainer from 'Pages/AppContainer';
const DefaultScreen = lazy(() => import('../pages/DefaultScreen'));
const RoutesPage = () => {
  const PublicRoutes = useMemo(
    () => (
      <>
        {/* <Suspense fallback={null}> */}
        {Object.values(routes)
          .filter(
            (routeDetails) => routeDetails.isPublic && routeDetails.element
          )
          .map((routeDetails) => (
            <Route
              key={`public-route-${routeDetails.pathname}`}
              path={routeDetails.pathname}
              element={
                <Suspense fallback={null}>{routeDetails.element}</Suspense>
              }
            />
          ))}
        {/* </Suspense> */}
      </>
    ),
    []
  );
  // const PrivateRoutes = useMemo(
  //   () => (
  //     <>
  //       {/* <Suspense fallback={null}> */}
  //       {Object.values(routes)
  //         .filter(
  //           (routeDetails) => !routeDetails.isPublic && routeDetails.element
  //         )
  //         .map((routeDetails) => (
  //           <Route
  //             key={`private-route-${routeDetails.pathname}`}
  //             path={routeDetails.pathname}
  //             element={
  //               <Suspense fallback={null}>{routeDetails.element}</Suspense>
  //             }
  //           />
  //         ))}
  //       {/* </Suspense> */}
  //     </>
  //   ),
  //   []
  // );
  return (
    <>
      <div className="">
        <Routes>
          {PublicRoutes}
          <Route path="*" element={<DefaultScreen />} />

          {/* <Route path="*" element={<NotFound404 />} /> */}
        </Routes>
      </div>
    </>
  );
};

// const ProtectedRoutes = () => {
//   const location = useLocation();
//   const isLoggedIn = getLocalStorageItem(localStorageKeys.AUTH_TOKEN);
//   return isLoggedIn ? (
//     <Layout>
//       <Outlet />
//     </Layout>
//   ) : (
//     <Navigate to={RouteConstants.LOGIN} replace state={{ from: location }} />
//   );
// };

export default RoutesPage;
