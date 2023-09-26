import { useEffect, useState } from 'react'
import './App.css'
import { Navigation } from './Modules/Navigation'
import { Footerpage } from './Modules/Footerpage'
import { FormInputTask } from './Modules/formInputTask'
import { HeaderPage } from './Modules/HeaderPage'
import { TasksList } from './Modules/TasksList'

function App() {

  //**1.HOOKS */
  //const [tasks, setTasks] = useState([])
  const [tasks, setTasks] = useState(() => {
    const localData = localStorage.getItem("Items")
    if (localData == null) return []

    return JSON.parse(localData)
  })

  useEffect(
    () => {
      localStorage.setItem("Items", JSON.stringify(tasks))
    }, [tasks]
  )



  //**2. HELPER FUNCTIONS */
  function addTask(title) {
    setTasks(currentTasks => {
      return [
        ...currentTasks,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }


  function toggleTaskStatus(id, completed) {
    setTasks(currentTasks => {
      return currentTasks.map(task => {
        if (task.id === id) {
          return { ...task, completed }
        }

        return task
      })
    })
  }

  function deleteTask(id) {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== id)
    })
  }

  //**3. RETURN */
  return (
    <>

      <Navigation />
      <HeaderPage />

      <FormInputTask onSubmit={addTask} />

      <div className="row card">
        <div className="col-lg-12 col-md-12 col-sm-12 text-start">
          <div className="alert alert-primary" role="alert">
            <strong>
              {tasks.length === 0 && "No Task"}
              {tasks.length !== 0 && tasks.length + " Task(s)"}
            </strong>
          </div>
          <TasksList tasks={tasks} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} />
        </div>
      </div>

      <Footerpage />
    </>
  )
}

export default App
