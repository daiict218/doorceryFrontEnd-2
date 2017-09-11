import React from 'react';
import {
  pure,
} from 'recompose';

const AdminHeader = pure(({ title }) => (
  <div className={'admin-header'}>
    {title}
  </div>
));

export default AdminHeader;
