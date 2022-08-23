import { useState } from 'react';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import Footer from './Footer'

export default function PortfolioMain() {
const [ currentPage, setCurrentPage ] = useState('Home')

const handlePageChange = (page) => setCurrentPage(page);

const renderPage = () => {
    if (currentPage === "Home") {
       return <Home handlePageChange={handlePageChange}/>
    }
    if (currentPage === "Work") {
        return <Work />
     }
     if (currentPage === "Contact") {
        return <Contact />
     }
}



return (
    <>
    <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
    < Footer />
    </>
)
}