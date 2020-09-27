import React from "react";
import styles from "./FormControls.module.css"
import {Field} from "redux-form";
//какие св-ва берём из meta { sourceProperty: targetVariable }
export const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
                {/*<props.typeField {...input} {...props}/>*/}
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>)

export const TextArea2 = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Input2 = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}