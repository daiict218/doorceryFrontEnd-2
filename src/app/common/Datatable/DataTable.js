/**
 * Created by ajaygaur on 17/06/17.
 */

import React from 'react';
import {
  map as _map,
  partial as _partial,
} from 'lodash';
import {Table, Column, Cell} from 'fixed-data-table-2';

class DataTable extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //
  //   };
  // }

  renderTableCell({ colKey, headerLabel, CellRenderer }, cellProps) {
    console.log(cellProps);
    return (
      <CellRenderer>
      </CellRenderer>
    );
  }

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
            {...props}
          >
            {_map(props.columns, ({ colKey, headerLabel, CellRenderer }) => (
              <Column
                columnKey={colKey}
                header={<Cell>{headerLabel}</Cell>}    //change it for custom header later
                // cell={<Cell>{'Ajay Gaur'}</Cell>}
                cell={
                  <CellRenderer>
                    {_partial(this.renderTableCell, { colKey, headerLabel, CellRenderer })}
                  </CellRenderer>
                }
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

export default DataTable;