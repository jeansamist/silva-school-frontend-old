import React from 'react';
import { SearchField } from '../ui/Fields';
import { FaUser, FaMoon, FaDoorOpen, FaBell, FaEnvelope } from 'react-icons/fa';
import Avatar from '../ui/Avatar';
import Dropdown from '../ui/Dropdown';
export default function Tobar() {
  return (
    <div className="topbar grid grid-gap">
      <SearchField />
      <Dropdown
        elements={[
          { to: '/profile', Ico: FaUser, label: 'New User : Paul Bool', type: 'button', onClick: () => {} },
          { Ico: FaEnvelope, label: '5 New Message', type: 'button', onClick: () => {} },
        ]}
      >
        <div className="notifications">
          <FaBell />
        </div>
      </Dropdown>
      <Dropdown
        elements={[
          { to: '/profile', Ico: FaUser, label: 'Marc Towns', type: 'button', onClick: () => {} },
          { Ico: FaMoon, label: 'Night Mode', type: 'button', onClick: () => {} },
          { Ico: FaDoorOpen, label: 'Log Out', type: 'button', onClick: () => {} },
        ]}
      >
        <Avatar />
      </Dropdown>
    </div>
  );
}
