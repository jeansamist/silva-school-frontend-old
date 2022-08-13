import React, { useState, useEffect } from 'react';
import avatarDefault from './../../assets/images/avatarDefault.png';
import Skeleton from './Skeleton';
export default function Avatar({ width = 50, id = 0, _image = false }) {
  const [image, setimage] = useState(false);
  useEffect(() => {
    if (_image) {
      setimage(_image);
      return;
    }
    setTimeout(() => {
      setimage(avatarDefault);
    }, 10000);
  }, [_image]);

  if (image) {
    return (
      <div className="avatar-ico" style={{ width: width, height: width }}>
        <img src={image} alt="" />
      </div>
    );
  }
  return (
    <div className="avatar-ico" style={{ width: width, height: width }}>
      <Skeleton type="square" width={width} />
    </div>
  );
}
