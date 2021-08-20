import React from 'react';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './../components/ResumeItem';
const ResumePage = () => {
    return (
        <section>
            <h1 className="heading">Resume</h1>
            <div className="resume">
                {/* ========== Education part ==========*/}
                <div className="education">
                    <h4><SchoolIcon /><span>Education</span></h4>
                    <ResumeItem year={'2004-2007'} title={'Computer Science'} subTitle={'Cambridge Uiversity'} text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quisquam!'} />
                    <ResumeItem year={'2008-2010'} title={'Bachleor Degree'} subTitle={'Kingdom University'} text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quisquam!'} />
                    <ResumeItem year={'2012-2015'} title={'Master Degree'} subTitle={'Hardvard Uiversity'} text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quisquam!'} />
                </div>

                {/* ========== Experience part ==========*/}
                <div className="experience">
                    <h4> <BusinessCenterIcon /><span>Experience</span></h4>
                    <ResumeItem year={'2015-2017'} title={'App Developer'} subTitle={'Microsoft'} text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quisquam!'} />
                    <ResumeItem year={'2017-2018'} title={'Software Engineer'} subTitle={'Google'} text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quisquam!'} />
                    <ResumeItem year={'2019-Present'} title={'Backend Developer'} subTitle={'Adobe'} text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quisquam!'} />
                </div>
            </div>
        </section>
    )
}

export default ResumePage;
