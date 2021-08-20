import React from 'react';
import SkillsItem from './../components/SkillsItem';
import { TestimonialData } from './../data/TestimonialData';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const AboutPage = () => {
    return (
        <section>
            <h1 className="heading">About Me</h1>
            {/* ======= About part ====== */}
            <div className="about">
                <div className="info-part">
                    <h4>Who am i?</h4>
                    <h3>I am <span>Maria Doe</span></h3>
                    <p>I am a Front End Developer / UI/UX designer. I have experience in creating high quality User Interfaces with the use of modern technologies and frameworks.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam fuga similique autem nulla natus optio eligendi quis fugit deleniti atque blanditiis dolor temporibus sint ducimus, maxime nam quasi voluptate!</p>
                    <div>
                        <button>Download CV</button>
                        <button>Hire Me</button>
                    </div>
                </div>
            </div>

            {/*======= Skills Part ========= */}
            <div className="my-skills">
                <h4>My Expertise is in:</h4>
                <div className="skills">
                    <SkillsItem title={'Html5'} text={'95%'} width={'95%'} />
                    <SkillsItem title={'Css3'} text={'90%'} width={'90%'} />
                    <SkillsItem title={'Javascript'} text={'80%'} width={'80%'} />
                    <SkillsItem title={'React'} text={'85%'} width={'85%'} />
                    <SkillsItem title={'Bootstrap'} text={'95%'} width={'95%'} />
                    <SkillsItem title={'Typescript'} text={'75%'} width={'75%'} />
                    <SkillsItem title={'Redux'} text={'70%'} width={'70%'} />
                    <SkillsItem title={'Sass'} text={'80%'} width={'80%'} />
                </div>
            </div>

            {/*======= Testimonial Part ========= */}
            <div className="testimonials">
                <h4>What Our Clients Says About Us</h4>
                <div className="clients-say">
                    {/* ===== Swiper Slider ===== */}
                    <Swiper autoplay={true} loop={true} spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>
                        {
                            TestimonialData.map((user) => {
                                return <SwiperSlide className="slide" key={user.id}>
                                    <div className="testimonial-item">
                                        <p>{user.text}</p>
                                        <div className="clients-img">
                                            <img src={user.img} alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>

                </div>
            </div>
        </section>
    )
}

export default AboutPage;