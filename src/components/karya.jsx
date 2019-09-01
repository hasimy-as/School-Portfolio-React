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
            <h2>Karya Penerjemahan Buku</h2>
            <hr />
            <br />
            <br />
            <div className='projects-grid'>
              <Card
                shadow={5}
                style={{
                  width: '256px',
                  height: '380px',
                  background:
                    'url(https://goalkicker.com/NodeJSBook/NodeJSGrow.png) center / cover',
                  margin: 'auto'
                }}
              ></Card>

              <Card
                shadow={5}
                style={{
                  width: '256px',
                  height: '380px',
                  background:
                    'url(https://prodimage.images-bn.com/pimages/9781617292682_p0_v2_s550x406.jpg) center / cover',
                  margin: 'auto'
                }}
              ></Card>

              <Card
                shadow={5}
                style={{
                  width: '256px',
                  height: '380px',
                  background:
                    'url(https://goalkicker.com/ReactJSBook/ReactJSGrow.png) center / cover',
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
