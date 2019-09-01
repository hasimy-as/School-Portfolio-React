import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Iframe from 'react-iframe';

class Kontak extends Component {
  render() {
    return (
      <div
        className='content-body'
        style={{
          overflow: 'auto',
          height: 'inherit'
        }}
      >
        <Grid className='content-grid'>
          <Cell col={5}>
            <h3>Contact Person</h3>
            <hr />
            <div className='content-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-phone-square' aria-hidden='true' />
                    +62 81233810366
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '20px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-envelope' aria-hidden='true' />
                    <a
                      href='mailto:ahmadhasimy@mail.com?Subject=Hello%20Node.js%20Programmer!'
                      target='_top'
                    >
                      ahmadhasimy@mail.com
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '20px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-globe' aria-hidden='true' />
                    <a href='https://github.com/hasimy-as'>
                      https://github.com/hasimy-as
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>

          <Cell col={5}>
            <h3>Alamat Jabatan</h3>
            <p style={{ width: '100%', margin: 'auto' }}>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '20px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-globe' aria-hidden='true' />
                    <h6>Jln Tun Abdul Razak, Siaran 1C, Kuala Lumpur, MY</h6>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '20px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-globe' aria-hidden='true' />
                    <h6>Jln Yap Kwan Seng, Siaran 9A, Kuala Lumpur, MY</h6>
                  </ListItemContent>
                </ListItem>
              </List>
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Kontak;
