import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class TentangSaya extends Component {
  render() {
    return (
      <div
        className='content-body'
        style={{
          overflow: 'auto',
          height: 'inherit'
        }}
      >
        <Grid className='content-grid2'>
          <Cell col={3}>
            <div className='content-list'>
              <img
                src='https://media.licdn.com/dms/image/C5103AQHaL-MszRYFhQ/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=_xxyM28PiDifU2KMkh-sXbrzu3yzKoM5XLfKOHeDA4Y'
                alt='avatar'
              />
              <h4>Hasimy</h4>
              <hr style={{ borderTop: '3px solid #833fb2' }} />
              <center>
                <p>Informasi tentang Hasimy</p>
                <p>Pengguna Node.js</p>
                <p>
                  Email:{' '}
                  <a
                    href='mailto:ahmadhasimy@mail.com?Subject=Hello%20Node.js%20Programmer!'
                    target='_top'
                  >
                    ahmadhasimy@mail.com
                  </a>
                </p>
                <p>
                  Github:{' '}
                  <a
                    href='https://nodejs.org/en/about'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    https://github.com/hasimy-as
                  </a>
                </p>
              </center>
            </div>
          </Cell>

          <Cell
            className='resume-right-col'
            col={9}
            style={{ marginBottom: '90px' }}
          >
            <h4>Riwayat</h4>
            <Grid>
              <Cell col={4}>
                <p>16 Februari 2019</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>
                  Saya mulai menggunakan Node.js.
                </h5>
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p>Sekarang</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>
                  Isi GitHub saya kebanyakan Node.js :)
                </h5>
              </Cell>
            </Grid>
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h4>Penggunaan Bahasa Pemrograman</h4>
            <Grid>
              <Cell col={4}>
                <p>Juli 2018 - September 2018 </p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>Java</h5>
              </Cell>
              <Cell col={4}>
                <p>Oktober 2018 - Januari 2019</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>PHP Native, Laravel</h5>
              </Cell>
              <Cell col={4}>
                <p>Februari 2019 - Sekarang</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>
                  Node.js, Express.js, Meteor.js
                </h5>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default TentangSaya;
