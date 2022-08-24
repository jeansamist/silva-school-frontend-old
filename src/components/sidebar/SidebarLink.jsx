import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function SidebarLink({ to, Ico, label = 'Link', active = false }) {
  const [_active, setactive] = useState(active);
  useEffect(() => {
    setactive(active);
  }, [active]);

  return (
    <Link to={to} className={'sidebar-link ' + (_active ? 'active' : '')}>
      <div className="ico">
        <Ico />
      </div>
      <div className="label">{label}</div>
    </Link>
  );
}
