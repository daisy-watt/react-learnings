import { useEffect, useRef, useState } from 'react';
import classes from './UnControlledForm.module.scss';
import { validateForm } from './Validator';
import countryData from '../../data/country-data.json';

export default function UnControlledForm({ formSubmit }) {
    const [errors, setErrors] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('AU')
    const renderCountRef = useRef(0);
    const formRef = useRef(null);

    const stateData = countryData.find(country => country.countryCode === selectedCountry)
        ?.states ?? [];
    useEffect(() => {
        renderCountRef.current++;
        console.log(renderCountRef.current);
    });

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = formRef.current;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);
        const {errors, isValid} = validateForm(formValues) 
        if(!isValid) {
            setErrors(errors);
            return;
        }
    
        formSubmit(formValues);
        form.reset();
        setErrors(null);
        console.log('form submitted ');
    };

    const handleBlur = (e) => {
        const form = formRef.current;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());
        const {errors} = validateForm(formValues);
        setErrors(errors);
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form} ref={formRef}>
            <div className={classes.field}>
                <label htmlFor='usernameInput'>Username</label>
                <input  id="usernameInput" 
                        type="text" 
                        name="username" 
                        onBlur={handleBlur}
                />
                {errors?.username && <span className={classes.errors_text}>{errors.username}</span>}
            </div>
            <div className={classes.field}>
                <label htmlFor='emailInput'>Email</label>
                <input  id="emailInput" 
                        type="email" 
                        name="email" 
                        onBlur={handleBlur}
                />
                {errors?.email && <span className={classes.errors_text}>{errors.email}</span>}
            </div>
            <div className={classes.field}>
                <label htmlFor='passwordInput'>Password</label>
                <input  id="passwordInput" 
                        type="password" 
                        name="password"
                        onBlur={handleBlur}
                />
            </div>
            {errors?.password && <span className={classes.errors_text}>{errors.password}</span>}
            <div className={classes.field}>
                <label htmlFor='passwordConfirmInput'>Password Confirm</label>
                <input  id="passwordConfirmInput" 
                        type="password" 
                        name="passwordConfirm"
                        onBlur={handleBlur}
                />
                {errors?.passwordConfirm && <span className={classes.errors_text}>{errors.passwordConfirm}</span>}
            </div>
            <div className={classes.field}>
                <label htmlFor='countryInput'>Country</label>
                <select id='countryInput'
                        name='countryCode'
                        onChange={handleCountryChange}>
                    {countryData.map(cd => <option key={cd.countryCode} value={cd.countryCode}>{cd.country}</option>)}
                </select>
            </div>
            <div className={classes.field}>
                <label htmlFor='stateInput'>State</label>
                <select id='StateInput'
                        name='stateCode'>
                    {stateData.map(s => <option key={s.stateCode} value={s.stateCode}>{s.name}</option>)}
                </select>
            </div>
            <button>Register</button>
        </form>
    );
}