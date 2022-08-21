import { useState } from 'react';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import Footer from './Footer'

export default function PortfolioMain() {
const [ currentPage, setCurrentPage ] = useState('Home')

const renderPage = () => {
    if (currentPage === "Home") {
       return <Home />
    }
    if (currentPage === "Work") {
        return <Work />
     }
     if (currentPage === "Contact") {
        return <Contact />
     }
}

const handlePageChange = (page) => setCurrentPage(page);

return (
    <>
    <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
    < Footer />
    </>
)
}