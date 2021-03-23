import React from "react";
import "../css/Filters.css";

function Filters() {
  return (
    <div>
      <div>
        <h3>Filters</h3>
        <div className="filters__container">
          <div className="filters_expertise">
            <p>EXPERTISE</p>
            <div className="filters_expertise__input__container">
              <input className="filters__input" placeholder="Search..."></input>
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className="filters_expertise__input__container__tags">
              <span>
                Branding <i class="fa fa-times" aria-hidden="true"></i>
              </span>
              <span>
                Stategy <i class="fa fa-times" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div className="filters_focus">
            <p>FOCUS AREA</p>
            <div className="filters_focus__input__container">
              <input className="filters__input" placeholder="Search..."></input>
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className="filters_focus__input__container__tags">
              <span>
                Focus Area <i class="fa fa-times" aria-hidden="true"></i>
              </span>
              <span>
                Focus Area <i class="fa fa-times" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div className="filters__ratings">
            <p>RATINGS</p>
            <div className="rating__itemone">
              <div>
                <input type="checkbox" checked />
                <div>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
              <div>
                <input type="checkbox" />
                <div>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="rating__itemtwo">
              <div>
                <input type="checkbox" />
                <div>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
              <div>
                <input type="checkbox" />
                <div>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="filters__price">
            <p>PRICE</p>
            <div>
              <input type="checkbox" />
              <span>Free</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Less than $25</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>$25-$50</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>$50-100</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>More than $100</span>
            </div>
          </div>

          <div className="filters__session">
            <p>SESSIONS AVAILABILITY</p>
            <div>
              <input type="checkbox" />
              <span>30 min</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>60 min</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>90 min</span>
            </div>
          </div>

          <div className="filters__langauge">
            <p>LANGAUGE</p>
            <div>
              <input type="checkbox" />
              <span>English</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>French</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>German</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Hindi</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Arabic</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Mandarin Chinese</span>
            </div>
            <div>
              <p>More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
