import { useRecoilValue } from 'recoil'
import { todoListState } from '../Atoms'
import TodoItemCreator from './TodoItemCreator'
import TodoListStats from './TodoListStats'
import TodoListFilters from './TodoListFilters'
import TodoItem from './TodoItem'
import './Todo.css'

const TodoList = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}
export default TodoList
