import { useState } from 'react';
import style from './Form.module.css';

export function Form() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    function updateFirstname(event) {
        setFirstname(event.target.value);
    }

    function updateLastname(event) {
        setLastname(event.target.value);
    }

    return (
        <div className={style.hello}>
            <form className={style.form}>
                <input value={firstname} onChange={updateFirstname} className={style.input} type="text" />
                <input value={lastname} onChange={updateLastname} className={style.input} type="text" />
            </form>
            <p className={style.sentence}>HELLO: {firstname} {lastname}</p>
        </div>
    )
}