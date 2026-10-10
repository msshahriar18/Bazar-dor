import React from 'react';

const SignUpPage = async () => {



    const { data, error } = await signUp.email({
        name: "John Doe", // required, The name of the user.
        email: "john.doe@example.com", // required, The email address of the user.
        password: "password1234",
        callbackURL: "https://example.com/callback",
    });

    const handleGoogleSignIn = async() =>{
        const resData = await signIn.social({
            provider: 'google'
        })
    }
    return (
        <div>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Sign Up</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name='email' />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" name='password' />

                <button className="btn btn-neutral mt-4">Sign Up</button>

                <button onClick={handleGoogleSignIn} className="btn btn-neutral mt-4">Sign In</button>
            </fieldset>
        </div>


    );
};

export default SignUpPage;