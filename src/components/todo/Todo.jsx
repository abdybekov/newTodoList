import css from "./Todo.module.css"


export default function Todo(props) {
  return (
    <div className={css.wrapper} >
      <label className={css.todoCheck} >
        <input
          type="checkbox"
          checked={props.status}
          onChange={() => props.changeStatus(props.id)}
        />
        <p className={props.status ? css.done : ""}>{props.text}</p>
      </label>

      <div className={css.buttons}>
        <button
          type="button"
          className="btn btn-success"
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
        >
          Del
        </button>
      </div>
    </div>
  )
}
