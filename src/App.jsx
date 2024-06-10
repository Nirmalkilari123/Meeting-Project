import React from 'react'
import './App.css'
function App() {
  
  return (
    <div>
         <div className="container">
            <header>
                <nav>
                    <a style={{margin:'5px'}} href=''>Categories</a>
                    <a style={{margin:'5px'}} href=''>Activities Near Me</a>
                    <a style={{margin:'5px'}} href=''>Add a Place</a>
                </nav>
                <button className="explore-button">Start exploring →</button>
            </header>
            <main>
                <section className="images-section">
                    <div className="main-image">
                        <img src="https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_red_fort_l_341_817.jpg" alt="Taj Mahal" />
                        <div className="popular-badge">Popular</div>
                    </div>
                    <div className="side-images">
                        <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg" alt="Side Image 1" />
                        <img src="https://c.myholidays.com/blog/blog/content/images/2020/11/Places-To-Visit-In-India.webp" alt="Side Image 2" />
                        <img src="https://www.holidify.com/images/bgImages/HYDERABAD.jpg" alt="Side Image 3" />
                        <img src="https://www.revv.co.in/blogs/wp-content/uploads/2019/11/self-drive-car-rental-delhi-gurgaon-noida_revv-blog.jpg" alt="Side Image 4" />
                    </div>
                </section>
                <section className="details-section">
                    <div className="rating">
                        <span>⭐ 4.9 stars</span> (231 Reviews)
                    </div>
                    <h1>TSUKISHIMA MONJA STREET</h1>
                    <p>Users can easily find the perfect experiences to suit their interests. Users can easily find the perfect experiences to suit their interests.</p>
                    <div className="actions">
                        <button className="like-button">❤️</button>
                        <button className="share-button">🔗</button>
                    </div>
                    <div className="date">October 4, 2021</div>
                </section>
                <section className='overview'>
                  <div className='overviews'>
                          <h1>OverView</h1>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem accusamus vel voluptates laudantium dolorem ducimus accusantium praesentium veritatis eligendi ad fugiat fugit, itaque autem molestiae quia obcaecati, necessitatibus corporis omnis officiis? Veritatis tempore temporibus animi quos quia doloremque sapiente officiis fugit illum, laborum consectetur amet libero. Quod laborum odit error!</p>
                  </div>
                  <div className='overviews'>
                  <h1>Features</h1>
                  </div>
                  <div className='overviews'>
                  <h1>Listening Videos</h1>
                  </div>
                       <div className='location'>
                        <img className='img1' src='https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1'/>
                       </div>
                </section>

                <section>
                  <div>
                    <h1 style={{fontSize:'50px'}}>Reviews</h1>
                    <p>5.0 ⭐⭐⭐⭐</p>
                    <p>1,289 views</p>
                  </div>
                  <div>
                  <button className="explore-button1">Write a review →</button>
                <hr/>
                
                  </div>
                </section>
            </main>
        </div>
      </div>
  )
}

export default App