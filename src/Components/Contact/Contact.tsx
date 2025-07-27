import React from "react";

const Contact = () => {
    function validateEmail(email: string) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    return (
        <div>
            <div></div>
            <div>
                <h1>Contact Us</h1>
                <div>
                    <input placeholder="Full Name" type="text" />
                    <input
                        onChange={(e) => {
                            console.log(validateEmail(e.target.value));
                        }}
                        placeholder="E-mail"
                        type="text"
                    />
                    <input placeholder="Message" type="text" />
                    <button>Contact Us</button>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Contact;
