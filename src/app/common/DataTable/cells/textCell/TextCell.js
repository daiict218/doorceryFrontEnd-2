import React from 'react';
import {
  pure,
} from 'recompose';

const TextCell = pure(({ data, className }) => (
    <div className={className}>
      {data}
    </div>
  )
);

export default TextCell;
