import React, { useState } from 'react';
import List from './components/List';
import './App.css';
import VideoData from './VideoData';

export default function App() {
  const [list, setList] = useState(VideoData);
  return (
    <List list={list} />
  );
}