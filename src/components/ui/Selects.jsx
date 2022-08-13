import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
export function Select({ options = [], label = '-- Select --', onChange = () => {} }) {
  const [selected, setselected] = useState(false);
  const [active, setactive] = useState(false);
  return (
    <div className={selected ? 'select active' : 'select'}>
      <div className="line" onClick={() => setactive(!active)}>
        <div className="label">{label}</div>
        <motion.div
          // whileInView={{ y: 0, opacity: 1 }}
          layout
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0 }}
          className="selected-label"
        >
          {selected.label ? selected.label : label}
        </motion.div>
        <div className="ico">
          <FaChevronDown />
        </div>
      </div>
      <AnimatePresence>
        {active ? (
          <motion.div
            layout
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0 }}
            className="options"
          >
            {options.length === 0 ? (
              <div className="option">No options :(</div>
            ) : (
              options.map((option, key) => {
                if (option !== selected) {
                  return (
                    <div
                      key={key}
                      className="option"
                      onClick={() => {
                        onChange(option);
                        setselected(option);
                        setactive(false);
                      }}
                    >
                      {option.label}
                    </div>
                  );
                }
              })
            )}
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </div>
  );
}
