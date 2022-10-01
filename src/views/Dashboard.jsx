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
          <Table thead={['User', 'Action name', 'Date']} tdata={[{ data: ['John Doe', 'Create a new student', 'Thu 8 April'] }]} />
        </Card>
      </div>
    </div>
  );
}
