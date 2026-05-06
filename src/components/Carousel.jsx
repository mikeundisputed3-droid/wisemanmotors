import React from 'react'

const Carousel = () => {
  return (
    <section className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-11">

          <div
            id="mycarousel"
            className="carousel slide carousel-fade shadow-lg"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >

            {/* Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#mycarousel"
                data-bs-slide-to="0"
                className="active"
              ></button>

              <button
                type="button"
                data-bs-target="#mycarousel"
                data-bs-slide-to="1"
              ></button>

              <button
                type="button"
                data-bs-target="#mycarousel"
                data-bs-slide-to="2"
              ></button>

              <button
                type="button"
                data-bs-target="#mycarousel"
                data-bs-slide-to="3"
              ></button>
            </div>

            {/* Images */}
            <div className="carousel-inner rounded-4">

              {/* Slide 1 */}
              <div className="carousel-item active">
                <img
                  src="images/Audi rs7.jpeg"
                  alt="Audi"
                  className="d-block w-100 carousel-image"
                />

                <div className="carousel-overlay"></div>

                <div className="carousel-caption custom-caption">
                  <h1>Audi RS7</h1>
                  <p>Luxury and performance combined</p>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <img
                  src="images/download.jpeg"
                  alt="Sports"
                  className="d-block w-100 carousel-image"
                />

                <div className="carousel-overlay"></div>

                <div className="carousel-caption custom-caption">
                  <h1>Sports Edition</h1>
                  <p>Experience speed like never before</p>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <img
                  src="images/Buggati chiron.jpeg"
                  alt="Bugatti"
                  className="d-block w-100 carousel-image"
                />

                <div className="carousel-overlay"></div>

                <div className="carousel-caption custom-caption">
                  <h1>Bugatti Chiron</h1>
                  <p>Pure hypercar excellence</p>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="carousel-item">
                <img
                  src="images/rolls royce.jpeg"
                  alt="Rolls Royce"
                  className="d-block w-100 carousel-image"
                />

                <div className="carousel-overlay"></div>

                <div className="carousel-caption custom-caption">
                  <h1>Rolls Royce</h1>
                  <p>Luxury redefined</p>
                </div>
              </div>

            </div>

            {/* Previous */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#mycarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon custom-icon"></span>
            </button>

            {/* Next */}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#mycarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon custom-icon"></span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;