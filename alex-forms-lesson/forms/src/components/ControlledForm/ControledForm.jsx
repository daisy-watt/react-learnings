import { useEffect, useState, useRef } from 'react'; 
import classes from './ControlledForm.module.scss';
import { validateForm } from './Validator';
import countryData from '../../data/country-data.json';

export default function ControlledForm({formSubmit}) {
    const defaultValues = {
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        countryCode: 'CA',
        stateCode: 'NT',
    };
    const [formValues, setFormValues] = useState(defaultValues);
    const [registerAttempt, setRegisterAttempt] = useState(false);
    const renderCountRef = useRef(0);

    useEffect(() => {
        renderCountRef.current++;
        console.log(renderCountRef.current);
    });

    const { isValid, errors } = validateForm(formValues);
    const stateData = 
        countryData.find(country => country.countryCode === formValues.countryCode
            )?.states ?? [];
    const handleCountryChange = (e) => {
        const countryVal = e.target.value;
        const stateVal = countryData.find(c => c.countryCode === countryVal).states[0].stateCode;
        setFormValues({
            ...formValues, 
            countryCode: countryVal, 
            stateCode: stateVal
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegisterAttempt(true);
        console.log(e)
        if (isValid) {
            formSubmit(formValues);
            setFormValues(defaultValues);
            setRegisterAttempt(false);
        } else {
            console.error(errors);
        }

    };

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value});
    };

    return (
    <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.field}>
            <label htmlFor='usernameInput'>Username</label>
            <input  id="usernameInput" 
                    type="text" 
                    name="username" 
                    value={formValues.username}
                    onChange={handleChange} 
                    onBlur={() => console.log("touched username")}
            />
            {registerAttempt && errors.username && <span className={classes.errors_text}>{errors.username}</span>}
        </div>
        <div className={classes.field}>
            <label htmlFor='emailInput'>Email</label>
            <input  id="emailInput" 
                    type="email" 
                    name="email" 
                    value={formValues.email}
                    onChange={handleChange} 
            />
            {registerAttempt && errors.email && <span className={classes.errors_text}>{errors.email}</span>}
        </div>
        <div className={classes.field}>
            <label htmlFor='passwordInput'>Password</label>
            <input  id="passwordInput" 
                    type="password" 
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
            />
            {registerAttempt && errors.password && <span className={classes.errors_text}>{errors.password}</span>}
        </div>
        <div className={classes.field}>
            <label htmlFor='passwordConfirmInput'>Password Confirm</label>
            <input  id="passwordConfirmInput" 
                    type="password" 
                    name="passwordConfirm"
                    value={formValues.passwordConfirm}
                    onChange={handleChange}
            />
            {registerAttempt && errors.passwordConfirm && <span className={classes.errors_text}>{errors.passwordConfirm}</span>}
        </div>
        <div className={classes.field}>
            <label htmlFor='countryInput'>Country</label>
            <select id='countryInput'
                    name='countryCode'
                    onChange={handleCountryChange}
                    value={formValues.countryCode}>
                {countryData.map(cd => <option key={cd.countryCode} value={cd.countryCode}>{cd.country}</option>)}
            </select>
        </div>
        <div className={classes.field}>
            <label htmlFor='stateInput'>State</label>
            <select id='StateInput'
                    name='stateCode'
                    onChange={handleChange}
                    value={formValues.stateCode}>
                {stateData.map(s => <option key={s.stateCode} value={s.stateCode}>{s.name}</option>)}
            </select>
        </div>
        <div className={classes.button}>
            <button disabled={registerAttempt && !isValid}>Register</button>
        </div>
    </form>
    );
}