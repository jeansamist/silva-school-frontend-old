import React from 'react';
import HomeJumbotron from '../components/elements/HomeJumbotron';
import Grid from '../components/Grid';
import Card, { StatCard } from '../components/ui/Cards';
import Table from '../components/ui/Tables';
export default function Dashboard() {
  return (
    <div className="view dashboard">
      <HomeJumbotron />
      <div className="stats">
        <Grid columns={3}>
          <StatCard />
          <StatCard />
          <StatCard />
        </Grid>
      </div>
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
