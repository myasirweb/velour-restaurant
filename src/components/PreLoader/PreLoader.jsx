import React from "react";
import classNames from "classnames";

export default function PreLoader({ data }) {
  const akpreloader = classNames("ak-preloader ", {
    loaded: data !== true,
  });

  return (
    <div id="preloader">
      <div id="ak-preloader" className={akpreloader}>
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="K" className="letters-loading">
              K
            </span>

            <span data-text-preloader="I" className="letters-loading">
              I
            </span>

            <span data-text-preloader="N" className="letters-loading">
              N
            </span>

            <span data-text-preloader="D" className="letters-loading">
              D
            </span>

            <span data-text-preloader="R" className="letters-loading">
              R
            </span>

            <span data-text-preloader="E" className="letters-loading">
              E
            </span>

            
          </div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </div>
  );
}
