import React from 'react';
import Card from '../ui/Cards';
import { Button } from '../ui/Buttons';
import cover from './../../assets/images/home-jumbotron-image.jpg';
import illustration from './../../assets/images/illustrations/illustration02.png';
export default function HomeJumbotron() {
  return (
    <div className="jumbotron">
      <Card border={false} backgroundImage={cover}>
        <div className="jumbotron-blur-effect"></div>
        <div className="content flex aic jcsa">
          <div className="text">
            <h1>Welcome Back !</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloremque illo esse facilis expedita eveniet
            aliquid animi neque maiores pariatur ratione delectus, aperiam sequi iusto harum culpa quis quaerat dolor.
            <br />
            <br />
            <Button>Manage Evaluations</Button>
          </div>
          <div className="illustration">
            <img src={illustration} alt="" />
          </div>
        </div>
      </Card>
    </div>
  );
}
