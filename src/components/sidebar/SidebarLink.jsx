import React, { useEffect, useState } from 'react';

export default function SidebarLink({ to, Ico, label = 'Link', active = false }) {
  const [_active, setactive] = useState(active);
  useEffect(() => {
    setactive(active);
  }, [active]);

  return (
    <div className={'sidebar-link ' + (_active ? 'active' : '')}>
      <div className="ico">
        <Ico />
      </div>
      <div className="label">{label}</div>
    </div>
  );
}
