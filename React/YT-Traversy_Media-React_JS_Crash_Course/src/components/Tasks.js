import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle}) => {
 
  return (
    <>
      {tasks.map((task, index) => (
      <Task 
        key={task.index} 
        task = {task} 
        onDelete= {onDelete} 
        onToggle = {onToggle}
      />
      ))}
    </>
  )
}

export default Tasks
