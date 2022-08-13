import React, { useEffect, useRef } from 'react';
import SidebarLink from './SidebarLink';
// import { FaShapes } from 'react-icons/fa';
import { HiViewGrid } from 'react-icons/hi';
import Logo from '../Logo';
export default function Sidebar() {
  const linksRef = useRef(null);
  useEffect(() => {
    linksRef.current.querySelectorAll('.sidebar-link').forEach((element) => {
      element.addEventListener('click', () => {
        linksRef.current.querySelector('.active').classList.remove('active');
        element.classList.add('active');
      });
    });
  });

  const _LINKS = [
    {
      links: [
        {
          label: 'Dashboard',
          active: true,
          to: '#',
          Ico: HiViewGrid,
        },
      ],
    },
    {
      category: 'User',
      links: [
        {
          label: 'Profile',
          to: '#',
          Ico: HiViewGrid,
        },
        {
          label: 'Profile',
          to: '#',
          Ico: HiViewGrid,
        },
      ],
    },
    {
      category: 'Settings',
      links: [
        {
          label: 'Profile',
          to: '#',
          Ico: HiViewGrid,
        },
        {
          label: 'Profile',
          to: '#',
          Ico: HiViewGrid,
        },
        {
          label: 'Profile',
          to: '#',
          Ico: HiViewGrid,
        },
      ],
    },
  ];
  return (
    <div className="sidebar">
      <div className="brand">
        <Logo i={0} />
      </div>
      <div className="links" ref={linksRef}>
        {_LINKS.map((category, key) => (
          <>
            {category.category ? (
              <div key={key} className="category-name">
                {category.category}
              </div>
            ) : (
              ''
            )}
            {category.links.map((_link, _key) => (
              <SidebarLink {..._link} key={_key} />
            ))}
          </>
        ))}
      </div>
    </div>
  );
}
