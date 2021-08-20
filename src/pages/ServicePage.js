import React from 'react';
import ServiceItem from './../components/ServiceItem';
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';
import LanguageIcon from '@material-ui/icons/Language';
import BuildIcon from '@material-ui/icons/Build';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DashboardIcon from '@material-ui/icons/Dashboard';
const ServicePage = () => {
    const designTrends = <CodeIcon />;
    const responsive = <WebIcon />;
    const webDevelopment = <LanguageIcon />;
    const appDevelopment = <DashboardIcon />;
    const customerSupport = <SupervisorAccountIcon />;
    const branding = <BuildIcon />;
    return (
        <section>
            <h1 className="heading">My Services</h1>
            <div className="services">
                <ServiceItem icon={designTrends} title={'Design Trends'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, debitis.'} />
                <ServiceItem icon={responsive} title={'Fully Responsive '} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, debitis.'} />
                <ServiceItem icon={webDevelopment} title={'Web Development'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, debitis.'} />
                <ServiceItem icon={appDevelopment} title={'App Development'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, debitis.'} />
                <ServiceItem icon={customerSupport} title={'Customer Support'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, debitis.'} />
                <ServiceItem icon={branding} title={'Branding'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, debitis.'} />
            </div>
        </section>
    )
}

export default ServicePage;
