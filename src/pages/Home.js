import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Card from './Card';
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="eventCard">
        <Card
          title="sample event"
          description="A set of components and utilities for rapid UI development"
          tags={["webdev", "frontend", "+2"]}
          stats={{ Likes: 549, Discussions: 11, Forks: 121 }}
          link="#"
        />
      </div>
    </>
  );
}

export default Home;
