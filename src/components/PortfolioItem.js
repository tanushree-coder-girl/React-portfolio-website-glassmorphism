import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const PortfolioItem = ({ allData }) => {
    return (
        <div className="portfolio">
            {
                allData.map((item) => {
                    return <div className="portfolioItem" key={item.id}>
                        <div className="portfolio-img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="portfolio-info">
                            <h4>{item.title}</h4>
                            <div className="icon">
                                <a href={item.link} target='__blank'>
                                    <Button variant="contained"><SearchIcon /> Visit Site</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default PortfolioItem;
