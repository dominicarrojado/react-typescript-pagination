import { useState } from 'react';
import Pagination from './components/Pagination';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 20;

  return (
    <div className="container">
      <h1>React TypeScript Pagination</h1>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        maxLength={7}
        setCurrentPage={setCurrentPage}
      />
      <footer className="footer">
        <a href="https://dominicarrojado.com/posts/how-to-create-your-own-pagination-in-react-and-typescript-with-tests-part-1/">
          Learn how to build this pagination component in React and TypeScript
        </a>
      </footer>
    </div>
  );
}
