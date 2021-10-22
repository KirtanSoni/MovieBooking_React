const Validate_signup = (data) => {
  
    const error={
        email_error:'',
        password_error:'',
        valid_email:false,
        valid_password:false
    }
    if(!data.logemail)
    { 
        error.email_error=`Email field can't be empty`
    }
    else
    {
        const valid=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(data.logemail)
        if(!valid)
        {
            error.email_error=`please enter proper email id`
        }
        else{
            error.valid_email=true
        }
    }
    if(!data.logpass)
    {
        error.password_error=`password field can't be empty`
    }
    else{
        if(data.logpass!=data.confpass)
        {
            error.password_error=`password and confirm password must be same`
        }
        else{
            const valid=/^(?=.*[a-z])(?=.*[A-Z]).{6,15}$/.test(data.logpass)
            if(!valid)
            {
                error.password_error=`password should atleast contain one uppercase letter and between 6 to 15 range`
            }
            else{
                error.valid_password=true
            }
        }
    }
    return (
       
        error
    )
}


   


export default Validate_signup