import React, { useState } from 'react';
import { PortfolioData } from './../data/PortfolioData';
import FilterButton from './../components/FilterButton';
import PortfolioItem from './../components/PortfolioItem';

const allButtons = [...new Set(PortfolioData.map(item => item.category)), 'All'];

const PortfolioPage = () => {
    const [allData, setAllData] = useState(PortfolioData);
    const [button, setbutton] = useState(allButtons);

    const filterCategory = (cat) => {
        if (cat === "All") {
            setAllData(PortfolioData);
            return;
        }
        const filteredData = PortfolioData.filter(item => item.category === cat);
        setAllData(filteredData);
    }

    return (
        <section>
            <h1 className="heading">My Works</h1>
            {/* ========== Button Part ========== */}
            <FilterButton button={button} filterCategory={filterCategory} />

            {/* ======== Portfolio Item Part ========= */}
            <PortfolioItem allData={allData} />
        </section>
    )
}

export default PortfolioPage;
