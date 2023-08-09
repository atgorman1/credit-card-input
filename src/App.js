import React from "react";
import bgDesktop from "./images/bg-main-desktop.png";
import bgMobile from "./images/bg-main-mobile.png";

export default function App() {
  return (
    <>
      <section>
        {/* Background Images - picture tag allows to switch images based on screen size*/}
        <div className="absolute -z-10">
          <picture>
            <source media="(min-width: 1024px)" srcSet={bgDesktop} />
            <img src={bgMobile} alt="purple gradiated background" />
          </picture>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <article className="cc-front">
              {/* Front CC Image */}Front CC
            </article>
            <article className="cc-back">{/* Back CC Image */}Back CC</article>
          </div>

          <div>{/* CC Form */}Form</div>
        </div>
      </section>
    </>
  );
}
