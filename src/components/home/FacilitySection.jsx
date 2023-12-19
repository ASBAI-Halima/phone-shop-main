import React from 'react'

export default function FacilitySection() {
  return (
    <>
    <section className="facility__section section" id="facility">
      <div className="container">
        <div className="facility__contianer" data-aos="fade-up" data-aos-duration="1200">
          <div className="facility__box">
            <div className="facility-img__container">
              <svg>
                <use href="./images/sprite.svg#icon-airplane"></use>
              </svg>
            </div>
            <p>FREE SHIPPING WORLD WIDE</p>
          </div>

          <div className="facility__box">
            <div className="facility-img__container">
              <svg>
                <use href="./images/sprite.svg#icon-credit-card-alt"></use>
              </svg>
            </div>
            <p>100% MONEY BACK GUARANTEE</p>
          </div>

          <div className="facility__box">
            <div className="facility-img__container">
              <svg>
                <use href="./images/sprite.svg#icon-credit-card"></use>
              </svg>
            </div>
            <p>MANY PAYMENT GATWAYS</p>
          </div>

          <div className="facility__box">
            <div className="facility-img__container">
              <svg>
                <use href="./images/sprite.svg#icon-headphones"></use>
              </svg>
            </div>
            <p>24/7 ONLINE SUPPORT</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
