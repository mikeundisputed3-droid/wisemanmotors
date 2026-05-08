import React from 'react'

const Footer = () => {
  return (
    <div>

      {/* Luxury Footer */}
      <section
        className="row p-5"
        style={{
          background: "linear-gradient(to right, #0f172a, #111827, #1e293b)",
          color: "white",
          borderTop: "4px solid gold"
        }}
      >

        {/* Company Section */}
        <div className="col-md-4 mb-4">

          <h1
            style={{
              color: "gold",
              fontFamily: "Georgia, serif",
              fontWeight: "bold",
              letterSpacing: "3px",
              marginBottom: "20px"
            }}
          >
            Wiseman Motors
          </h1>

          <p
            style={{
              lineHeight: "32px",
              fontSize: "17px",
              color: "#d1d5db"
            }}
          >
            Welcome to a world of elegance, luxury, and performance.
            At Wiseman Motors, we do not simply sell vehicles —
            we deliver prestige, comfort, and unforgettable driving experiences.
          </p>

          <p
            style={{
              lineHeight: "32px",
              fontSize: "17px",
              color: "#d1d5db"
            }}
          >
            Whether you dream of owning a powerful sports machine
            or a timeless luxury car, we are honored to help
            you find the perfect masterpiece for your journey.
          </p>

          <div
            style={{
              marginTop: "25px",
              padding: "15px",
              borderLeft: "4px solid gold",
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "10px"
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                color: "#facc15",
                margin: 0
              }}
            >
              “Luxury is not a necessity, it is an experience.”
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="col-md-4 mb-4">

          <h2
            style={{
              color: "gold",
              fontFamily: "Georgia, serif",
              marginBottom: "25px"
            }}
          >
            Contact Concierge
          </h2>

          <form>
            <input
  type="email"
  className="form-control mb-4 luxury-input"
  placeholder="Enter your email"
  style={{
    backgroundColor: "#1f2937",
    border: "1px solid gold",
    color: "gold",
    padding: "14px",
    borderRadius: "12px"
  }}
/>

<textarea
  className="form-control mb-4 luxury-input"
  rows="5"
  placeholder="Leave your message"
  style={{
    backgroundColor: "#1f2937",
    border: "1px solid gold",
    color: "gold",
    padding: "14px",
    borderRadius: "12px"
  }}
></textarea>
           

            <button
              className="btn w-100"
              style={{
                background: "linear-gradient(to right, gold, #facc15)",
                color: "black",
                fontWeight: "bold",
                padding: "12px",
                borderRadius: "12px",
                fontSize: "18px",
                border: "none"
              }}
            >
              Send Message
            </button>

          </form>
        </div>

        {/* Social & Welcome */}
        <div className="col-md-4 mb-4">

          <h2
            style={{
              color: "gold",
              fontFamily: "Georgia, serif",
              marginBottom: "25px"
            }}
          >
            Stay Connected
          </h2>

          <div className="d-flex gap-4 mb-4">

            <a href="">
              <img
                src="images/fb.png"
                alt="Facebook"
                width="50"
                height="50"
                style={{
                  borderRadius: "50%",
                  backgroundColor: "white",
                  padding: "8px",
                  boxShadow: "0 0 15px rgba(255,215,0,0.5)"
                }}
              />
            </a>

            <a href="">
              <img
                src="images/in.png"
                alt="Instagram"
                width="50"
                height="50"
                style={{
                  borderRadius: "50%",
                  backgroundColor: "white",
                  padding: "8px",
                  boxShadow: "0 0 15px rgba(255,215,0,0.5)"
                }}
              />
            </a>

            <a href="">
              <img
                src="images/x.png"
                alt="Twitter"
                width="50"
                height="50"
                style={{
                  borderRadius: "50%",
                  backgroundColor: "white",
                  padding: "8px",
                  boxShadow: "0 0 15px rgba(255,215,0,0.5)"
                }}
              />
            </a>
          </div>

          <p
            style={{
              lineHeight: "32px",
              color: "#d1d5db",
              fontSize: "17px"
            }}
          >
            Thank you for visiting Wiseman Motors.
            Your trust means everything to us, and we are delighted
            to be part of your luxury journey.
          </p>

          <p
            style={{
              color: "gold",
              fontWeight: "bold",
              fontSize: "18px",
              marginTop: "20px"
            }}
          >
            Experience class. Experience power. Experience royalty.
          </p>

        </div>
      </section>

      {/* Bottom Footer */}
      <footer
        className="row text-center p-4"
        style={{
          backgroundColor: "#000",
          color: "#f3f4f6",
          borderTop: "1px solid gold",
          letterSpacing: "1px"
        }}
      >
        <b
          style={{
            fontSize: "18px",
            fontFamily: "Georgia, serif"
          }}
        >
          Developed by Aaron © 2026 | Wiseman Motors Luxury Collection
        </b>
      </footer>

    </div>
  )
}

export default Footer