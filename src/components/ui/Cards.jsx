import React from 'react';
import { HiCheckCircle } from 'react-icons/hi';
export default function Card({
  title = '',
  children,
  padding = true,
  border = true,
  backgroundImage = '',
  isModal = false,
  buttons = [],
}) {
  return (
    <div
      className={`card ${border ? 'card-border ' : ''}${padding ? 'card-padding ' : ''}${isModal ? 'card-modal ' : ''}`}
      style={{ background: backgroundImage ? 'url("' + backgroundImage + '") no-repeat center / cover' : '#fff' }}
    >
      {title !== '' && !isModal ? <div className="card-title">{title}</div> : ''}
      {isModal ? <div className="card-head">{title}</div> : ''}
      <div className="card-content">{children}</div>
      {isModal ? <div className="card-footer">{buttons}</div> : ''}
    </div>
  );
}

export function StatCard({ label = 'Loading', Ico = HiCheckCircle, value = 0 }) {
  return (
    <div className="stat-card">
      <div className="ico">
        <Ico size={30} />
      </div>
      <div className="datas">
        <div className="label">{label}</div>
        <div className="data title-dot">{value}</div>
      </div>
    </div>
  );
}
