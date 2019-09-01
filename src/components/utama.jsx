import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Beranda from './beranda';
import TentangSaya from './tentangsaya';
import Karya from './karya';
import Kontak from './kontak';

const Utama = () => (
  <Switch>
    <Route exact path='/' component={Beranda} />
    <Route path='/beranda' component={Beranda} />
    <Route path='/tentangsaya' component={TentangSaya} />
    <Route path='/karya' component={Karya} />
    <Route path='/kontak' component={Kontak} />
  </Switch>
);

export default Utama;
