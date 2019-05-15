import React from 'react';
import { UnorderedList, CheckBox, Task, DeleteButton } from './StyledComponents';

const TaskList = (props) => {
    let listElements = [];

    const activeListElements = props.list.map((element, index) =>
        <Task data-key={index + "a"} key={index + "a"}>
            <CheckBox data-key={index} onClick={props.completeTask}></CheckBox>{element}
        </Task>);

    const completedListElements = props.completedList.map((element, index) =>
        <Task completed={true} data-key={index} key={index}>
            <CheckBox checked></CheckBox>{element} <DeleteButton onClick={props.deleteTask}></DeleteButton>
        </Task>);

    if (props.activeList === 'all') {
        listElements = activeListElements.concat(completedListElements);
    } else if (props.activeList === 'active') {
        listElements = activeListElements;
    } else if (props.activeList === 'completed') {
        listElements = completedListElements;
    }
    console.log(listElements, props.activeList);

    return (
        <UnorderedList>
            {listElements.length === 0 ? <span>You don't have any tasks to complete.</span> : listElements}
        </UnorderedList>
    );
}

export default TaskList;