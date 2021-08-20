import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactInfo from './../components/ContactInfo';
const ContactPage = () => {
    const phone = <PhoneIcon />;
    const email = <EmailIcon />;
    const location = <LocationOnIcon />;
    return (
        <section>
            <h1 className="heading">contact me</h1>
            <div className="contact">
                {/* ========== Contact Form part ==========*/}
                <form onSubmit={(e)=>e.preventDefault()}>
                    <input type="text" className="box" placeholder="first name"/>
                    <input type="text" className="box" placeholder="last name"/>
                    <input type="email" className="box" placeholder="your email"/>
                    <input type="text" className="box" placeholder="your project"/>
                    <textarea name="" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
                    <input type="submit" value="send message" className="btn"/>
                </form>

                {/* ========== Contact Info part ==========*/}
                <div className="content">
                    <ContactInfo icon={location} title={'address'} text={'67, Station Street, California'} />
                    <ContactInfo icon={email} title={'email'} text={'maria@gmail.com'} />
                    <ContactInfo icon={phone} title={'phone'} text={'+01-000-000-000'} />
                </div>
            </div>
        </section>
    )
}

export default ContactPage;
