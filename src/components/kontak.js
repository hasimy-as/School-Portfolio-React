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
          <Cell col={5} style={{ marginBottom: '82px' }}>
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

          <Cell col={7}>
            <h3>Alamat Subject</h3>
            <p style={{ width: '75%', margin: 'auto' }}>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '20px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-globe' aria-hidden='true' />
                    <br />
                    Jln. Masjid Al-Jufri
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
