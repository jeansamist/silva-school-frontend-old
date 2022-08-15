import React, { useState, useEffect } from 'react';
import Card from './ui/Cards';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from './ui/Buttons';
export default function Modal({
  children = 'Modal Content',
  isOpen = false,
  size = 700,
  title = 'Modal',
  padding = true,
  border = true,
  backgroundImage = '',
  buttons = [],
  callback = () => {},
}) {
  const [_isOpen, set_isOpen] = useState(false);
  useEffect(() => {
    set_isOpen(isOpen);
  }, [isOpen]);

  return (
    <div className={`modal-container ${_isOpen ? 'active ' : ''}`}>
      <AnimatePresence>
        {_isOpen ? (
          <>
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="modal-bg"
            ></motion.div>
            <motion.div
              layout
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 1.1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="modal"
              style={{ width: size + 'px' }}
            >
              <Card
                {...{
                  title,
                  padding,
                  border,
                  backgroundImage,
                  isModal: true,
                  buttons: [
                    <Button
                      onClick={() => {
                        set_isOpen(!_isOpen);
                        callback(!_isOpen);
                      }}
                      color="danger"
                    >
                      Cancel
                    </Button>,
                    ...buttons,
                  ],
                }}
              >
                {children}
              </Card>
            </motion.div>
          </>
        ) : (
          ''
        )}
      </AnimatePresence>
    </div>
  );
}
