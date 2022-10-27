function ErrorLabel(props){
    return(
        <div className="error">
            <label htmlFor="error" className="form__label">{props.errorText}</label>
        </div>
    );
}

export default ErrorLabel;