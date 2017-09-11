/**
 * Created by ajaygaur on 17/06/17.
 */

import React from 'react';
import {
  map as _map,
  partial as _partial,
} from 'lodash';
import {Table, Column, Cell} from 'fixed-data-table-2';

import TextCellRenderer from '../../common/DataTable/cells/textCell';

import withStyles from '../../decorators/withStyles';
import 'fixed-data-table-2/dist/fixed-data-table.css';
import TableStyles from './dataTable.scss';

const CellRenderers = {
  text: TextCellRenderer,
};

class DataTable extends React.Component {
  renderTableCell = ({ columnData, colKey, cellType }, cellProps) => {
    const { rowIndex } = cellProps,
      CellRenderer = CellRenderers[cellType];

    return (
      <CellRenderer
        data={columnData[rowIndex] && columnData[rowIndex][colKey]}
      />
    );
  };

  render() {
    const { props } = this;
    return (
      <div>
        <div className="dpr center-x">
          <Table
            rowHeight={50}
            headerHeight={50}
            rowsCount={50}
            width={1000}
            height={500}
          >
            {_map(props.columns, ({ colKey, headerLabel, columnData, cellType }) => (
              <Column
                columnKey={colKey}
                key={colKey}
                header={<Cell>{headerLabel}</Cell>}    //change it for custom header later
                cell={_partial(this.renderTableCell, { cellType, columnData, colKey })}
                width={100}
                fixed
              />
            ))}
          </Table>
        </div>
      </div>
    );
  }
}

export default withStyles(DataTable, TableStyles);
