import React, { useState, useEffect } from 'react';
import Grid from '../Grid';
import { randomInterval } from '../../functions/random';
import { FaUsers, FaEdit, FaDollarSign } from 'react-icons/fa';
import { StatCard } from '../ui/Cards';
import Skeleton from '../ui/Skeleton';
import { AnimatePresence, motion } from 'framer-motion';
export default function HomeStats() {
  const [stats, setstats] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setstats([
        {
          label: 'Professors Online',
          Ico: FaUsers,
          value: Math.round(randomInterval(10, 50)),
        },
        {
          label: 'Tasks Pending',
          Ico: FaEdit,
          value: Math.round(randomInterval(10, 50)),
        },
        {
          label: 'Budget',
          Ico: FaDollarSign,
          value: Math.round(randomInterval(1000000, 5000000)),
        },
      ]);
    }, 5000);
  }, []);

  return (
    <div className="stats">
      <AnimatePresence>
        <Grid columns={3}>
          {stats ? (
            <>
              {stats.map((stat, key) => (
                <motion.div
                  layout
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  initial={{ opacity: 0, y: -30 }}
                  key={key}
                >
                  <StatCard {...stat} />
                </motion.div>
              ))}
            </>
          ) : (
            <>
              <Skeleton type="block" width="100%" height={100} />
              <Skeleton type="block" width="100%" height={100} />
              <Skeleton type="block" width="100%" height={100} />
            </>
          )}
        </Grid>
      </AnimatePresence>
    </div>
  );
}
