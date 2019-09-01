import React, { Component } from 'react';
import { Grid, Cell, Card } from 'react-mdl';

class Karya extends Component {
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
          <Cell col={12} style={{ marginBottom: '128px' }}>
            <h2>Hasil Projek</h2>
            <hr />
            <br />
            <br />
            <div className='projects-grid'>
              {/* Project 1 */}
              <Card
                shadow={5}
                style={{
                  width: '256px',
                  height: '380px',
                  background:
                    'url(https://images-na.ssl-images-amazon.com/images/I/51k1eX4VDKL.jpg) center / cover',
                  margin: 'auto'
                }}
              ></Card>

              {/* Project 2 */}
              <Card
                shadow={5}
                style={{
                  width: '256px',
                  height: '380px',
                  background:
                    'url(https://d2sofvawe08yqg.cloudfront.net/handsonadonisjsthelaravelflavournodeframework/hero2x?1560941385) center / cover',
                  margin: 'auto'
                }}
              ></Card>

              {/* Project 3 */}
              <Card
                shadow={5}
                style={{
                  width: '256px',
                  height: '380px',
                  background:
                    'url(https://prodimage.images-bn.com/pimages/2940153363516_p0_v1_s550x406.jpg ) center / cover',
                  margin: 'auto'
                }}
              ></Card>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Karya;
