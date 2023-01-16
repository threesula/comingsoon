import React, { Fragment } from 'react';
import Countdown from 'react-countdown';
import Renderer from './countdown/Renderer';
import './index.css';

const ComingSoon01 = () => {
  return (
    <Fragment>
      <div
        className="cs-01-page-wrapper h-100 bg-img d-flex flex-column justify-content-between"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            '/assets/img/backgrounds/coming-soon-01.jpg'
          })`,
        }}>
        <div className="bungkus">
          <div className="b-2">
            <div className="kata0kata">
              Coming Soon We are building something awesome!!
            </div>

            <div className="cs-01-countdown space-mt--50">
              <Countdown
                date={new Date('January 31, 2023 12:12:00')}
                renderer={Renderer}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ComingSoon01;
