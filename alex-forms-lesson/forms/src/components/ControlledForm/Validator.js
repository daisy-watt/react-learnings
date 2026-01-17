export const validateForm = (formData) => {
    let isValid = true;
    const errors = {};
    
    if (formData.username.length < 5){
        isValid = false;
        errors.username = 'username must be at least 5 characters'
    }

    if(formData.username.trim() === ''){
        isValid = false;
        errors.username = 'username cannot be empty'
    }

    if(!formData.email.includes('@')){
        isValid = false;
        errors.email = 'email must be a valid email'
    }

    if(formData.email.trim() === ''){
        isValid = false;
        errors.email = 'email cannot be empty'
    }

    if(!/[A-Z]/.test(formData.password)) {
        isValid = false;
        errors.password = 'password must contain a capital letter'
    }

    if(!/[0-9]/.test(formData.password)){
        isValid = false;
        errors.password = 'password must contain a number'
    }

    if(formData.password !== formData.passwordConfirm) {
        isValid = false;
        errors.passwordConfirm = 'must match password'
    }
    return {isValid, errors };
}