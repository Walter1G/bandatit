const MainLayout = () => {
  return (
      <main>
          <section className="banner">
              <img src="" alt="" />
          </section>
          <section className="current-offers">
                <h2>Current Offers</h2>
                <div className="offers">
                    <div className="offer">
                        <img src="" alt="" />
                        <p>Offer Name</p>
                        <p>Price</p>
                    </div>
                </div>
          </section>
          <section className="latest-items">
                <h2>New on the Shop</h2>
                <div className="items">
                    <div className="item">
                        <img src="" alt="" />
                        <p>Item Name</p>
                        <p>Price</p>
                    </div>
                </div>
          </section>
          <section className="listings flex">
              <h2>Popular Listings</h2>
                <div className="listings">
                    <div className="listing">
                        <img src="" alt="" />
                        <p>Listing Name</p>
                        <p>Price</p>
                  </div>
                </div>
          </section>
          <section className="testimonials">
              <h2>Testimonials</h2>
                <div className="testimonials">
                    <div className="testimonial">
                        <p>Testimonial</p>
                        <p>Author</p>
                  </div>
              </div>
              
          </section>
    </main>
  )
}

export default MainLayout