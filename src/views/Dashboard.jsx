import React, { useState, useEffect } from 'react';
import HomeJumbotron from '../components/elements/HomeJumbotron';
import Grid from '../components/Grid';
import Card, { StatCard } from '../components/ui/Cards';
import Skeleton from '../components/ui/Skeleton';
import Table from '../components/ui/Tables';
import HomeStats from '../components/elements/HomeStats';
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
