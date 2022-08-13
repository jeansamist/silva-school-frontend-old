import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
export default function Dropdown({
  elements = [{ to: '#', Ico: FaPencilAlt, label: 'Dropdown', type: 'button', onClick: () => {} }],
  children = 'Dropdown',
}) {
  const [active, setactive] = useState(false);
  return (
    <div className="dropdown-container">
      <div className="dropdown-label" onClick={() => setactive(!active)}>
        {children}
      </div>
      <AnimatePresence>
        {active ? (
          <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className="dropdown"
          >
            {elements.map((element, key) => (
              <DropdownElement
                key={key}
                {...{
                  ...element,
                  onClick: () => {
                    element.onClick();
                    setactive(false);
                  },
                }}
              />
            ))}
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownElement({ to = '#', type = 'button', Ico = FaPencilAlt, label = 'Dropdown', onClick = () => {} }) {
  if (type === 'link') {
    return (
      <Link to={to} onClick={onClick} className="dropdown-element">
        <div className="ico">
          <Ico />
        </div>
        <div className="label">{label}</div>
      </Link>
    );
  }
  return (
    <div onClick={onClick} className="dropdown-element">
      <div className="ico">
        <Ico />
      </div>
      <div className="label">{label}</div>
    </div>
  );
}
