import React from 'react'
// import TableDragSelect from 'dfws-react-table-drag-select'
// import 'dfws-react-table-drag-select/style.css'


import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
 
export default class TableSelect extends React.Component {
  state = {
    cells: [
      [{value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}],
      [{value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}],
      [{value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}],
      [{value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}],
      [{value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}],
      [{value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}],
      [{value: false}, {value: false}, {value: false}, {value: false}, {value: false}, {value: false}]
    ]
  }
 
  render = () => (
    <TableDragSelect
      value={this.state.cells}
      onChange={cells => this.setState({ cells })}
    >
        
      <tr>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
      </tr>
    </TableDragSelect>
  )
}