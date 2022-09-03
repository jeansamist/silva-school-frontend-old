import React from 'react';
import HomeJumbotron from '../components/elements/HomeJumbotron';
import HomeStats from '../components/elements/HomeStats';
import Card from '../components/ui/Cards';
import Table from '../components/ui/Tables';
export default function Dashboard() {
  return (
    <div className="view dashboard">
      <HomeJumbotron />
      <HomeStats />
      <div className="mb-2">
        <Card title="Recents Actions">
          <Table />
        </Card>
      </div>
      <div className="mb-2">
        <Card title="Title">
          <Table />
        </Card>
      </div>
      <div className="mb-2">
        <Card title="Title">
          <Table />
        </Card>
      </div>
    </div>
  );
}
