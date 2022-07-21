import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';

export default function TodoList() {

  const dispatch = useDispatch()
  const [todoName, setTodoName] = useState()
  const [priority, setPrioriry] = useState('Medium')


  const todoSearchStatus = useSelector((state) => state.filters.status)
  const todoSearchPriorty = useSelector((state) => state.filters.priorities)
  console.log('todoSearchStatus', todoSearchPriorty)

  const todoList = useSelector((state) => {
    const todoSearch = state.toDoList.filter((todo) => {
      if (todoSearchStatus === 'All') {
        return todoSearchPriorty.length
          ? todo.name.includes(state.filters.search) && todoSearchPriorty.includes(todo.priority)
          : todo.name.includes(state.filters.search)
      }
      return (
        todo.name.includes(state.filters.search) &&
        (todoSearchStatus === 'Completed' ? todo.completed : !todo.completed) &&
        (todoSearchPriorty.length ? todoSearchPriorty.includes(todo.priority) : true)
      )

    })
    return todoSearch
  })


  console.log('todoList', todoList)
  const handleAddToDoList = () => {
    dispatch(addToDo({
      id: uuidv4,
      name: todoName,
      priority: priority,
      completed: false
    }))
    setTodoName('')
    setPrioriry('low')
  }

  const handleChangeInput = (e) => {
    console.log('prioriry', e.target.value);
    setTodoName(e.target.value)
  }

  const handleChangeSelect = (value) => {
    console.log('value', value);
    setPrioriry(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          todoList.map(todo => <Todo name={todo.name} prioriry={todo.priority} completed={todo.completed} id={todo.id} key={todo.id}></Todo>)
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleChangeInput} />
          <Select defaultValue="Medium" value={priority} onChange={handleChangeSelect}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddToDoList}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
