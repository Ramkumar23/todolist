import _ from 'lodash'
import React from 'react';
import TodosListHeader from './todo-list-header';
import TodosListItem  from './todos-list-items';

export default class TodosList extends React.Component {
  renderItems(){
    const props=  _.omit(this.props,'todos');
      return _.map(this.props.todos, (todos,index) => <TodosListItem key={index} {... todos} {... props }/>);
  }
  render()
  {
    return(
                <table>
                        <TodosListHeader />
                        <tbody>
                        { this.renderItems() }
                        </tbody>
                </table>
    );
  }
}
