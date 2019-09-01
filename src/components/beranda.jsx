import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Beranda extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='beranda-grid'>
          <Cell col={12}>
            <img
              src='https://media.licdn.com/dms/image/C5103AQHaL-MszRYFhQ/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=_xxyM28PiDifU2KMkh-sXbrzu3yzKoM5XLfKOHeDA4Y'
              alt='avatar'
              className='avatar-img'
            />

            <div className='banner-text'>
              <h1>Hasimy</h1>
              <hr />
              <p>
                Saya adalah programmer yang bergerak dalam bidang
                server/back-end.<br></br>Saya pengguna Node.js beserta dengan
                Express.js.
              </p>
              <div className='social-links'>
                <a
                  href='https:/instagram.com/as.hasimy'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i
                    className='fa fa-instagram fa-3x social'
                    aria-hidden='true'
                  />
                </a>
                <a
                  href='https://github.com/hasimy-as'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github fa-3x social' aria-hidden='true' />
                </a>
                <a
                  href='https://www.linkedin.com/in/achmad-hasimy-872921174/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i
                    className='fa fa-linkedin fa-3x social'
                    aria-hidden='true'
                  />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Beranda;
