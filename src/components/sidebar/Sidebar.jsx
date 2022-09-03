import React, { useEffect, useRef } from 'react';
import SidebarLink from './SidebarLink';
// import { FaShapes } from 'react-icons/fa';
import { HiViewGrid, HiDocument, HiUser, HiUsers, HiCalendar, HiCog, HiHome } from 'react-icons/hi';
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
          to: '/',
          Ico: HiViewGrid,
        },
        {
          label: 'Classes',
          to: '/classes',
          Ico: HiHome,
        },
        {
          label: 'Subjects',
          to: '/subjects',
          Ico: HiDocument,
        },
      ],
    },
    {
      category: 'Humans Services',
      links: [
        {
          label: 'Students',
          to: '/humans/students',
          Ico: HiUsers,
        },
        {
          label: 'Professors',
          to: '/humans/professors',
          Ico: HiUsers,
        },
        {
          label: 'Workers',
          to: '/humans/workers',
          Ico: HiUsers,
        },
      ],
    },
    {
      category: 'Events',
      links: [
        {
          label: 'Exams',
          to: '/events/exams',
          Ico: HiCalendar,
        },
        {
          label: 'Results',
          to: '/events/results',
          Ico: HiCalendar,
        },
        {
          label: 'Activities',
          to: '/events/activities',
          Ico: HiCalendar,
        },
        {
          label: 'Meetings',
          to: '/events/meetings',
          Ico: HiCalendar,
        },
        {
          label: 'Class Conseil',
          to: '/events/classconseil',
          Ico: HiCalendar,
        },
      ],
    },
    {
      category: 'Documents',
      links: [
        {
          label: 'Exams Subjects',
          to: '/documents/exams',
          Ico: HiDocument,
        },
        {
          label: 'Exams Results',
          to: '/documents/results',
          Ico: HiDocument,
        },
        {
          label: 'Reports',
          to: '/documents/reports',
          Ico: HiDocument,
        },
      ],
    },
    {
      category: 'App Settings',
      links: [
        {
          label: 'Profile',
          to: '/settings/profile',
          Ico: HiUser,
        },
        {
          label: 'Advanced',
          to: '/settings/advanced',
          Ico: HiCog,
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
          <React.Fragment key={key}>
            {category.category ? (
              <div className="category-name">
                {category.category}
              </div>
            ) : (
              ''
            )}
            {category.links.map((_link, _key) => (
              <SidebarLink {..._link} key={_key} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
