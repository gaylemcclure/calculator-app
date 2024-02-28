function Button(props) {
  return (
    <div className="button-container">
      <button className={props.class} value={props.value} onClick={props.click}>{props.number}</button>
    </div>
  )
}

export default Button;