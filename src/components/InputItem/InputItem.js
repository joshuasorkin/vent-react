export default function InputItem(props){
    return(
        <div className={props.inputName}>
            <label htmlFor={props.inputName} className="form__label">{props.labelText}</label>
            <input value={props.value} onChange={props.handleInputChange} type={props.type} id={props.inputName} placeholder={props.labelText} className="form__input" />
        </div>
    )
}