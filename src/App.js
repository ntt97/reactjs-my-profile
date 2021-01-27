import moment from 'moment';
import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { FaGraduationCap, FaSkype, FaUser, FaYoutube } from 'react-icons/fa';
import { GoProject, GoRepoForked } from 'react-icons/go';
import { MdApps, MdEmail, MdPhone, MdVpnKey, MdWork } from 'react-icons/md';
import './App.css';
import './AppMobile.css';
import images from './images';

export default class App extends Component {
  render() {
    return (
      <div className={'viewPort'}>
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  }

  renderHeader = () => {
    return (
      <div className={'viewHeader'}>
        <img alt={'my avatar'} className={'avatar'} src={images.avatar} />

        <div className={'viewInfoHeader'}>
          <span className={'textNameHeader'}>Nguyen Thanh To</span>
          <span className={'textMajorHeader'}>Front-End developer</span>
          <span className={'textMajorHeader'}>Ho Chi Minh City, Viet Nam</span>
        </div>

        <div className={'viewContact'}>
          <div className={'viewWrapItemContact'}>
            <div className={'btnItemContact'}>
              <IconContext.Provider value={{ color: 'white', size: '15px' }}>
                <MdEmail />
              </IconContext.Provider>
              <a
                href={'mailto:tranquangduy7994@gmail.com'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 'text-decoration': 'none' }}
              >
                <span className={'textItemContact'}>
                  nthanhtodev97@gmail.com
                </span>
              </a>
            </div>
          </div>

          <div className={'viewWrapItemContact'}>
            <div className={'btnItemContact'}>
              <IconContext.Provider value={{ color: 'white', size: '15px' }}>
                <FaSkype />
              </IconContext.Provider>
              <a
                href={'skype:live:bae347cea73dcf75?chat'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 'text-decoration': 'none' }}
              >
                <span className={'textItemContact'}>live:bae347cea73dcf75</span>
              </a>
            </div>
          </div>

          <div className={'viewWrapItemContact'}>
            <div className={'btnItemContact'}>
              <IconContext.Provider value={{ color: 'white', size: '15px' }}>
                <MdPhone />
              </IconContext.Provider>
              <span className={'textItemContact'}>0358983660</span>
            </div>
          </div>

          <div className={'viewWrapItemContact'}>
            <div className={'btnItemContact'}>
              <IconContext.Provider value={{ color: 'white', size: '15px' }}>
                <FaYoutube />
              </IconContext.Provider>
              <a
                href={'https://www.youtube.com'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 'text-decoration': 'none' }}
              >
                <span className={'textItemContact'}>My channel</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderBody = () => {
    let a = moment();
    let b = moment([2020, 6, 1]);

    let years = a.diff(b, 'year');
    b.add(years, 'years');

    let months = a.diff(b, 'months');
    b.add(months, 'months');

    return (
      <div className={'viewBody'}>
        {/*Career Profile*/}
        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{ color: '#f99930', size: '20px' }}>
              <FaUser />
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>Career Profile</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <span
              className={'textContentItemBody1'}
            >{`Front-End developer with ${years} years ${months} months experience. I work with React Native, React js`}</span>
            <span className={'textContentItemBody1'}>
              Having ability to build the backend with common functions, full
              basic flow to communicate between backend and client
            </span>
            <span className={'textContentItemBody1'}>
              Learning new languages or platforms quickly with a positive
              attitude. Can join in all process of product development from
              initialize to store release
            </span>
          </div>
        </div>

        <div className={'breakLine'} />

        {/*Work Experience*/}
        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{ color: '#f99930', size: '20px' }}>
              <MdWork />
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>Experience</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <div style={{ height: '10px' }} />
            <span className={'textContentItemBody'}>
              Fresher Software Engineer at EXE Corp
            </span>
            <span className={'textContentItemBody2'}>June 2020 - Present</span>
          </div>
        </div>

        <div className={'breakLine'} />

        {/*My product*/}
        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{ color: '#f99930', size: '20px' }}>
              <MdApps />
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>My Product</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <span className={'textContentItemBody1'}>
              My own product with Full-Stack operations
            </span>
            <div style={{ height: '10px' }} />
            <span className={'textContentItemBody'}>App Shop Shoes</span>
            <span
              className={'textContentItemBody1'}
              href={'https://moga-app.web.app'}
            >
              React Native, Redux, Firebase, Nodejs , MongoDb
            </span>
            <div style={{ height: '10px' }} />
            <span className={'textContentItemBody'}>Web Food Binh Dinh</span>
            <span
              className={'textContentItemBody1'}
              href={'https://moga-app.web.app'}
            >
              JavaSpring MVC, SQL server
            </span>
            <div style={{ height: '10px' }} />
            <span className={'textContentItemBody'}>Shop Shoes Admin</span>
            <span
              className={'textContentItemBody1'}
              href={'https://moga-app.web.app'}
            >
              React js
            </span>
            <div style={{ height: '10px' }} />
          </div>
        </div>

        <div className={'breakLine'} />

        {/*Repository*/}
        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{ color: '#f99930', size: '20px' }}>
              <GoRepoForked />
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>Repository</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <span className={'textContentItemBody'}>Github</span>
            <a
              className={'textContentItemBody1'}
              href={'https://github.com/ntt97'}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/ntt97
            </a>

            <div style={{ height: '10px' }} />
          </div>
        </div>

        <div className={'breakLine'} />

        {/*Key Skills*/}
        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{ color: '#f99930', size: '20px' }}>
              <MdVpnKey />
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>Key Skills</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <span className={'textContentItemBody1'}>React Native - good</span>
            <span className={'textContentItemBody1'}>ReactJS - good</span>
            <span className={'textContentItemBody1'}>
              Firebase - intermediate
            </span>
            <span className={'textContentItemBody1'}>
              Backend - intermediate
            </span>
            <span className={'textContentItemBody1'}>Git - good</span>
            <span className={'textContentItemBody1'}>
              English - intermediate
            </span>
            <div style={{ height: '10px' }} />
            <span className={'textContentItemBody1'}>
              NodeJS (Auth, RESTful API, SocketIO)
            </span>
            <span className={'textContentItemBody1'}>
              Firebase (Authentication, Database, Functions, Storage, Hosting,
              Cloud Messaging)
            </span>
          </div>
        </div>

        {/*Project*/}
        <div className={'breakLine'} />

        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{ color: '#f99930', size: '20px' }}>
              <GoProject />
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>Projects</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <span className={'textContentItemBody'}>React Native</span>
            <div className={'viewWrapChildContent'}>
              <span className={'textContentItemBody1'}>
                &#9679; Vas Parent Portal (product, contribution rate 80%) - The
                app to connect teacher with parent (React Native, Firebase,Redux
                Saga , Typescript, notification...){' '}
                <a href={'https://parentreports.vas.edu.vn/'}>IOS</a>
                {' / '}
                <a
                  href={
                    'https://play.google.com/store/apps/details?id=com.exe.school.vas.teacher'
                  }
                >
                  Android
                </a>
              </span>
              <span className={'textContentItemBody1'}>
                &#9679; Vas Teacher (product, contribution rate 100%) - The app
                to connect teacher with parent (React Native, Firebase,Redux
                Saga , Typescript, notification...){' '}
                <a
                  href={
                    'https://apps.apple.com/tr/app/vas-teacher/id1537618215'
                  }
                >
                  IOS
                </a>
                {' / '}
                <a
                  href={
                    'https://play.google.com/store/apps/details?id=com.exe.school.vas.teacher'
                  }
                >
                  Android
                </a>
              </span>
              <span className={'textContentItemBody1'}>
                &#9679; LHG for Doctors (product, contribution rate 100%) (React
                Native, Firebase,Redux Saga , Typescript, notification...){' '}
                <a
                  href={
                    'https://apps.apple.com/am/app/lhg-for-doctors/id1547414609'
                  }
                >
                  IOS
                </a>
                {' / '}
                <a
                  href={
                    'https://play.google.com/store/apps/details?id=com.limhealthgo.doctor'
                  }
                >
                  Android
                </a>
              </span>
              <span className={'textContentItemBody1'}>
                &#9679; Lim Health Go (product, contribution rate 100%) - The
                app to connect teacher with parent (React Native, Firebase,Redux
                Saga , Typescript, notification...){' '}
                <a
                  href={
                    'https://apps.apple.com/us/app/lim-health-go/id1547414301'
                  }
                >
                  IOS
                </a>
                {' / '}
                <a
                  href={
                    'https://play.google.com/store/apps/details?id=com.limhealthgo.patient'
                  }
                >
                  Android
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className={'breakLine'} />
        {/*Education*/}
        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{ color: '#f99930', size: '20px' }}>
              <FaGraduationCap />
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>Education</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <span className={'textContentItemBody'}>
              Posts and Telecommunications Institute of Technology (PTIT)
            </span>
            <span className={'textContentItemBody2'}>2016 - 2021</span>
            <div style={{ height: '10px' }} />
          </div>
        </div>

        <div className={'breakLine'} />
        <div style={{ height: '30px' }} />
      </div>
    );
  };
}
