import { useState } from 'react';
import Pagination from './components/Pagination';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = 3;

  return (
    <div className="container">
      <h1>React TypeScript Pagination</h1>
      <Pagination
        currentPage={currentPage}
        maxPage={maxPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
