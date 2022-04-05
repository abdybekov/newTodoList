import css from "./Header.module.css";


export default function Header(props) {
  return (
    <div className={css.wrapper} >
      Header ({props.count} / 2)
    </div>
  )
}
