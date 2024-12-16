import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Reusable Button Component
const CarouselButton = ({ text, backgroundColor, hoverColor, onClick }) => {
  return (
    <button
      className="carousel-button"
      style={{
        padding: '10px 20px',
        backgroundColor,
        border: 'none',
        color: 'white',
        borderRadius: '5px',
        marginBottom: '10px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, background-color 0.3s ease',
        transform: 'scale(1)',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = hoverColor;
        e.target.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = backgroundColor;
        e.target.style.transform = 'scale(1)';
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const ImageSliders1 = () => {
  return (
    <div className="container-fluid" style={{ marginTop: '50px', padding: 0 }}>
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="2000"
      >
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          {/* First Slider */}
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/young-adult-artist-tattooing-with-creativity-skill-generated-by-ai_188544-44607.jpg?t=st=1731756805~exp=1731760405~hmac=7077f3f1da92d8ffa63a961788ebdafbf2960dae5169e2cbc554586df3ecdd8e&w=1060"
              style={{
                width: '100%',
                height: '90vh', // Adjusted height for better mobile view
                borderRadius: '0',
              }}
              alt="Image 1"
            />
            <div className="carousel-caption">
              <h1
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: '3rem',
                  fontWeight: '900',
                  marginBottom: '20px',
                  textAlign: 'center',
                }}
              >
                "Every tattoo tells a story,<br /> what's yours?"
              </h1>
              <p
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '160px',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                "Every tattoo is more than just ink on skin; it’s a deeply personal expression of who you are. Whether it’s a tribute to a loved one, a symbol."
              </p>
            </div>
          </div>

          {/* Second Slider */}
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/6UKI7NSZBhTQavaoiqi7ZFZgHyHh7VtjfqUzCAefcyKnVfFoLocsOKuiccuLjHcUc6AybOVuWlQiGQy3yZ9bXEI6G38KNyHwVlQXR22Tq5QlgrtCzCi-UnzI4pNI79dCK8Zl4gfDZzgELWQ9tUSTkRZ5A2uJ"
              style={{
                width: '100%',
                height: '90vh',
                borderRadius: '0',
              }}
              alt="Image 2"
            />
            <div className="carousel-caption">
              <h1
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: '3rem',
                  fontWeight: '900',
                  marginBottom: '30px',
                  textAlign: 'center',
                }}
              >
                "Your Beliefs, Forever in Ink"
              </h1>
              <p
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '180px',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                "We understand that tattoos are not just art—they are a reflection of who you are and what you believe. Whether it's a symbol of faith."
              </p>
            </div>
          </div>

          {/* Third Slider */}
          <div className="carousel-item">
            <img
              src="https://cdn.prod.website-files.com/63627969e697b61273d5987b/638f8402a8b011d274d6068d_thumbnail-2-blog-tattooist-template-p-500.jpg"
              style={{
                width: '100%',
                height: '90vh',
                borderRadius: '0',
              }}
              alt="Image 3"
            />
            <div className="carousel-caption">
              <h1
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: '3rem',
                  fontWeight: '900',
                  marginBottom: '30px',
                  textAlign: 'center',
                }}
              >
                "Your Beliefs, Forever in Ink"
              </h1>
              <p
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '180px',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                "Your beliefs are the essence of who you are, shaping your identity and guiding your path. At our studio, we specialize in bringing those deeply held values to life through stunning, meaningful tattoos."
              </p>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>

        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .carousel-item img {
            height: 60vh; /* Adjust image height for mobile */
          }

          .carousel-caption h1 {
            font-size: 1.8rem; /* Reduced font size for small screens */
            margin-bottom: 10px;
            padding: 0 10px; /* Added padding to prevent text from touching the edges */
          }

          .carousel-caption p {
            font-size: 1.2rem; /* Reduced font size */
            margin-bottom: 100px;
            padding: 0 10px; /* Added padding for better text spacing */
          }
        }

        @media (max-width: 480px) {
          .carousel-caption h1 {
            font-size: 1.5rem; /* Even smaller text on very small screens */
            margin-bottom: 5px;
          }

          .carousel-caption p {
            font-size: 1rem; /* Smaller text for very small screens */
            margin-bottom: 80px;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .carousel-item img {
            height: 80vh; /* Set height for tablet and laptop */
          }

          .carousel-caption h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
          }

          .carousel-caption p {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSliders1;
