export function TaskItem({ id, title, completed, toggleTaskStatus, deleteTask }) {

    return (
        <li
            className={
                "list-group-item " +
                (completed ? "" : "active")
            } >
            <input className="form-check-input"
                onChange={e => toggleTaskStatus(id, e.target.checked)}
                type="checkbox" checked={completed} />
            <label className="form-check-label px-2" htmlFor="flexCheckDefault">
                {title}
            </label>
            <button type="button" onClick={() => deleteTask(id)} className="btn btn-warning"> x</button>
        </li>)
}