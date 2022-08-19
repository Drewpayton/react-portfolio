import { useState } from 'react';
import Home from './pages/Home';

export default function PortfolioMain() {
const [ currentPage, setCurrentPage ] = useState('Home')

const renderPage = () => {
    if (currentPage === "Home") {
       return <Home />
    }
}



return (

    <>



    {renderPage()}
    </>
)
}