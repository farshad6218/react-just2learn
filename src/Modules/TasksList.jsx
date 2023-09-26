import { TaskItem } from "./TaskItem"

export function TasksList({ tasks, toggleTaskStatus, deleteTask }) {
    return (
        <ul className="list-group list-group-numbered">
            {tasks.map(task => {
                return (
                    <TaskItem
                        key={task.id}
                        toggleTaskStatus={toggleTaskStatus}
                        deleteTask={deleteTask}
                        {...task}
                    // id={task.id}
                    // title={task.title}
                    // completed={task.completed}

                    />
                )
            })}
        </ul>
    )
}