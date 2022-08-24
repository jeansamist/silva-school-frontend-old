import React from 'react';
import Card from '../ui/Cards';
import { Button } from '../ui/Buttons';
import cover from './../../assets/images/home-jumbotron-image.jpg';
import illustration from './../../assets/images/illustrations/illustration02.png';
import { motion } from 'framer-motion';
export default function HomeJumbotron() {
  return (
    <div className="jumbotron">
      <Card border={false} backgroundImage={cover}>
        <div className="jumbotron-blur-effect"></div>
        <div className="content flex aic jcsa">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            initial={{ opacity: 0, y: -20 }}
            className="text"
          >
            <h1>Welcome Back !</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloremque illo esse facilis expedita eveniet
            aliquid animi neque maiores pariatur ratione delectus, aperiam sequi iusto harum culpa quis quaerat dolor.
            <br />
            <br />
            <Button>Manage Evaluations</Button>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, x: '30%', scale: 1.5, y: '10%' }}
            transition={{ duration: 0.6 }}
            initial={{ opacity: 0, x: '50%', scale: 1.5, y: '10%' }}
            className="illustration"
          >
            <img src={illustration} alt="" />
          </motion.div>
        </div>
      </Card>
    </div>
  );
}
