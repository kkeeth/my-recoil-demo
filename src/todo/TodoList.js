import { useRecoilValue } from 'recoil'
import { todoListState } from '../Atoms'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}
export default TodoList