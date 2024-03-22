import React from 'react'
import './style.css';
import { Button } from '../../components/button';
import home from '../../assets/home-container1.jpg';
import IdeaCard from './ideaCard';
import Footer from '../../components/footer'


const Home = () => {
  return (
    <>
      <section>
        <div className="main-container">

          <div className='find-container'>
            <h1 className='find-container-h1'>Let us find your</h1>
            <h1 className='find-container-h2'>Forever Food.</h1>
            <p className='find-container-p1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            <p className='find-container-p2'> Nesciunt illo tenetur fuga ducimus numquam ea!</p>

            <div className='btn'>
              <Button heightBtn="2.8rem" widthBtn="10rem" borderKaRadius="1px" backgroundKaColor="#BE123C" fontColor="#FFFFFF">Search Now</Button>

              <Button heightBtn="2.8rem" widthBtn="10rem" borderKaRadius="1px" backgroundKaColor="#FFFFF" fontColor="#BE123C">Known more</Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="main-container1">
          <div>
            <img src={home} alt="blank" />
          </div>

          <div className='content-img'>
           <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>

           <Button heightBtn="2.8rem" widthBtn="10.7rem" borderKaRadius="1px" backgroundKaColor="#4F46E5" fontColor="#FFFFFF">Get in Touch</Button>
          </div>
        </div>
      </section>
  
       <IdeaCard />

       <Footer/>
    </>
  )
}

export default Home
