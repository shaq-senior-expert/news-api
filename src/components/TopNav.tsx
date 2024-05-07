import { Avatar, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const profileSideBarData = [
  {
    text: 'Home',
    href: '/dashboard',
  },
  {
    text: 'Subscription',
    href: '/Subscription',
  },
  {
    text: 'Dummy',
    href: '/Subscription',
  },
];

const TopNav = () => {
  const [navItemSelected, setNavItemSelected] = useState('');

  return (
    <>
      <div className="nav-box-shadow bg-[#272C44]">
        <Container className="flex justify-between py-4">
          <div className="flex items-center justify-between gap-3">
            <Typography variant="h6" color="white" className="font-semibold">
              NEWS APP
            </Typography>
          </div>
          <div className="flex w-40 items-center gap-3 text-white no-underline">
            {profileSideBarData?.map((data, i) => {
              const isItemSelected = navItemSelected === data.text;
              return (
                <div key={i}>
                  <div onClick={() => setNavItemSelected(data.text)}>
                    <Link to={data?.href} className="no-underline">
                      <div className={`flex cursor-pointer items-center gap-2`}>
                        <Typography
                          variant="subtitle2"
                          className={`my-2 !flex !text-sm text-white no-underline hover:text-[#2e90fa] ${
                            isItemSelected &&
                            `rounded bg-white px-2 py-1 font-semibold !text-[#2e90fa]`
                          }`}
                        >
                          {data.text}
                        </Typography>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <Typography
              variant="subtitle1"
              color="white"
              className="hidden font-semibold md:block"
            >
              Hi, Guest
            </Typography>
            <div className="flex items-center ">
              <Avatar src="A" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TopNav;
