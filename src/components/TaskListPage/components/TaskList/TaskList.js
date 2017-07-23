import React from 'react';
import api from '../../../../api/api';
import { lifecycle, compose, mapProps } from 'recompose';
import TaskItem from '../TaskItem/TaskItem';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';

export const TaskList = ({ data = [], toggleItem, selected }) =>
  <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn
          style={{
            width: 42,
            paddingLeft: 0,
            paddingRight: 30
          }}
        />
        <TableHeaderColumn>Task title</TableHeaderColumn>
        <TableHeaderColumn>Time Zone</TableHeaderColumn>
        <TableHeaderColumn style={{ textAlign: 'right' }}>
          Report Time
        </TableHeaderColumn>
        <TableHeaderColumn>Report</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} className="t-task-list">
      {data.map(item =>
        <TaskItem onClick={toggleItem} key={item.id} item={item} />
      )}
    </TableBody>
  </Table>;

export default compose(
  lifecycle({
    componentWillMount() {
      this.setState({ data: [] });
      api.getTasks().then(data => this.setState({ data }));
    }
  }),
  mapProps(({ data, query, ...props }) => {
    if (query) {
      return {
        ...props,
        data: data.filter(({ title }) =>
          title.toLowerCase().includes(query.toLowerCase())
        )
      };
    }
    return {
      ...props,
      data
    };
  }),
  mapProps(({ data, selected, ...props }) => ({
    ...props,
    data: data.map(task => ({
      ...task,
      isSelected: selected.includes(task.id)
    }))
  }))
)(TaskList);
