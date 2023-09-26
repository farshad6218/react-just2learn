import { useState } from 'react'

export function FormInputTask({ onSubmit }) {
    //props.onSubmit
    
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault() //To prevent refreshing page

        //before component 
        // setTasks(currentTasks => {
        //     return [
        //         ...currentTasks,
        //         { id: crypto.randomUUID(), title: newItem, completed: false }
        //     ]
        // })

        if (newItem === "") {
            return
        }
        //props.onSubmit(newItem)
        onSubmit(newItem)

        setNewItem("") //form Cleaner
    }

    return (
        <div className="row card">
            <div className="col-lg-6 col-sm-12 text-start">
                <form onSubmit={handleSubmit} className="form-inline">
                    <div className="form-group mb-2">
                        <label htmlFor="tb_taskName" className="form-label">Task Name</label>
                        <input type="text"
                            value={newItem}
                            onChange={e => setNewItem(e.target.value)}
                            maxLength="500" className="form-control" id="tb_taskName" aria-describedby="helpId" placeholder="add a task" autoComplete='off' />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}