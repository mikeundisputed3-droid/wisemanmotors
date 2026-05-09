import React from 'react'

const Footer = () => {
  return (
    <div>

      {/* Luxury Footer */}
      <section
        className="row px-4 py-4"
        style={{
          background: "linear-gradient(to right, #0f172a, #111827, #1e293b)",
          color: "white",
          borderTop: "3px solid gold"
        }}
      >

        {/* Company Section */}
        <div className="col-md-4 mb-4">

          <h1
            style={{
              color: "gold",
              fontFamily: "Georgia, serif",
              fontWeight: "bold",
              letterSpacing: "2px",
              marginBottom: "15px",
              fontSize: "28px"
            }}
          >
            Wiseman Motors
          </h1>

          <p
            style={{
              lineHeight: "26px",
              fontSize: "14px",
              color: "#d1d5db"
            }}
          >
            Welcome to a world of elegance, luxury, and performance.
            At Wiseman Motors, we deliver prestige, comfort,
            and unforgettable driving experiences.
          </p>

          <p
            style={{
              lineHeight: "26px",
              fontSize: "14px",
              color: "#d1d5db"
            }}
          >
            Whether you dream of a powerful sports machine
            or a timeless luxury car, we are honored
            to guide your journey.
          </p>

          <div
            style={{
              marginTop: "18px",
              padding: "12px",
              borderLeft: "3px solid gold",
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "10px"
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                color: "#facc15",
                margin: 0,
                fontSize: "13px"
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
              marginBottom: "18px",
              fontSize: "23px"
            }}
          >
            Contact Concierge
          </h2>

          <form>

            <input
              type="email"
              className="form-control mb-3 luxury-input"
              placeholder="Enter your email"
              style={{
                backgroundColor: "#1f2937",
                border: "1px solid rgba(255,215,0,0.5)",
                color: "gold",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "13px"
              }}
            />

            <textarea
              className="form-control mb-3 luxury-input"
              rows="4"
              placeholder="Leave your message"
              style={{
                backgroundColor: "#1f2937",
                border: "1px solid rgba(255,215,0,0.5)",
                color: "gold",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "13px"
              }}
            ></textarea>

            <button
              className="btn w-100"
              style={{
                background: "linear-gradient(to right, gold, #facc15)",
                color: "black",
                fontWeight: "bold",
                padding: "10px",
                borderRadius: "10px",
                fontSize: "14px",
                border: "none",
                boxShadow: "0 0 10px rgba(255,215,0,0.3)"
              }}
            >
              Send Message
            </button>

          </form>

          {/* Opening Hours */}
          <div style={{ marginTop: "22px" }}>

            <h2
              style={{
                color: "gold",
                fontFamily: "Georgia, serif",
                marginBottom: "12px",
                fontSize: "22px"
              }}
            >
              Opening Hours
            </h2>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                padding: "14px",
                border: "1px solid rgba(255,215,0,0.3)",
                boxShadow: "0 0 15px rgba(255,215,0,0.08)"
              }}
            >

              {/* Monday-Friday */}
              <div
                className="d-flex justify-content-between align-items-center"
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <span style={{ fontSize: "13px", color: "#e5e7eb" }}>
                  Monday - Friday
                </span>

                <span
                  style={{
                    color: "gold",
                    fontWeight: "bold",
                    fontSize: "12px"
                  }}
                >
                  08:00 AM - 08:00 PM
                </span>
              </div>

              {/* Saturday */}
              <div
                className="d-flex justify-content-between align-items-center"
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <span style={{ fontSize: "13px", color: "#e5e7eb" }}>
                  Saturday
                </span>

                <span
                  style={{
                    color: "gold",
                    fontWeight: "bold",
                    fontSize: "12px"
                  }}
                >
                  09:00 AM - 06:00 PM
                </span>
              </div>

              {/* Sunday */}
              <div
                className="d-flex justify-content-between align-items-center"
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <span style={{ fontSize: "13px", color: "#e5e7eb" }}>
                  Sunday
                </span>

                <span
                  style={{
                    color: "gold",
                    fontWeight: "bold",
                    fontSize: "12px"
                  }}
                >
                  10:00 AM - 04:00 PM
                </span>
              </div>

              {/* Holidays */}
              <div
                className="d-flex justify-content-between align-items-center"
                style={{
                  paddingTop: "10px"
                }}
              >
                <span
                  style={{
                    color: "#facc15",
                    fontWeight: "bold",
                    fontSize: "13px"
                  }}
                >
                  Holidays
                </span>

                <span
                  style={{
                    backgroundColor: "rgba(255,215,0,0.12)",
                    color: "#facc15",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "bold"
                  }}
                >
                  10:00 AM - 02:00 PM
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Social Section */}
        <div className="col-md-4 mb-4">

          <h2
            style={{
              color: "gold",
              fontFamily: "Georgia, serif",
              marginBottom: "18px",
              fontSize: "23px"
            }}
          >
            Stay Connected
          </h2>

          <div className="d-flex gap-3 mb-3">

            <button
              type="button"
              onClick={() => window.open('https://www.facebook.com', '_blank', 'noopener')}
              aria-label="Open Facebook"
              style={{
                background: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer'
              }}
            >
              <img
                src="images/fb.png"
                alt="Facebook"
                width="42"
                height="42"
                style={{
                  borderRadius: "50%",
                  backgroundColor: "white",
                  padding: "7px",
                  boxShadow: "0 0 10px rgba(255,215,0,0.4)",
                  transition: "0.3s"
                }}
              />
            </button>

            <button
              type="button"
              onClick={() => window.open('https://www.instagram.com', '_blank', 'noopener')}
              aria-label="Open Instagram"
              style={{
                background: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer'
              }}
            >
              <img
                src="images/in.png"
                alt="Instagram"
                width="42"
                height="42"
                style={{
                  borderRadius: "50%",
                  backgroundColor: "white",
                  padding: "7px",
                  boxShadow: "0 0 10px rgba(255,215,0,0.4)"
                }}
              />
            </button>

            <button
              type="button"
              onClick={() => window.open('https://www.twitter.com', '_blank', 'noopener')}
              aria-label="Open Twitter"
              style={{
                background: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer'
              }}
            >
              <img
                src="images/x.png"
                alt="Twitter"
                width="42"
                height="42"
                style={{
                  borderRadius: "50%",
                  backgroundColor: "white",
                  padding: "7px",
                  boxShadow: "0 0 10px rgba(255,215,0,0.4)"
                }}
              />
            </button>

          </div>

          <p
            style={{
              lineHeight: "26px",
              color: "#d1d5db",
              fontSize: "14px"
            }}
          >
            Thank you for visiting Wiseman Motors.
            Your trust means everything to us,
            and we are delighted to be part
            of your luxury journey.
          </p>

          <p
            style={{
              color: "gold",
              fontWeight: "bold",
              fontSize: "15px",
              marginTop: "14px"
            }}
          >
            Experience class. Experience power. Experience royalty.
          </p>

        </div>

      </section>

      {/* Bottom Footer */}
      <footer
        className="row text-center py-3"
        style={{
          backgroundColor: "#000",
          color: "#f3f4f6",
          borderTop: "1px solid rgba(255,215,0,0.3)"
        }}
      >
        <b
          style={{
            fontSize: "13px",
            fontFamily: "Georgia, serif",
            letterSpacing: "1px"
          }}
        >
          Developed by Aaron © 2026 | Wiseman Motors Luxury Collection
        </b>
      </footer>

    </div>
  )
}

export default Footer