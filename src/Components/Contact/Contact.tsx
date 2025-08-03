import React, { useState } from "react";

const Contact = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isValid, setIsValid] = useState(false);

    function validateEmail(email: string) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    async function handleSubmit() {
        console.log(fullName, email, message, isValid);
        if (!isValid) {
            alert("Invalid email");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: fullName,
                    email: email,
                    message: message,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.error}`);
            }
        } catch (error) {
            console.error("Nerwork error:", error);
            alert("Failed to connect to the server!");
        }
    }

    return (
        <div>
            <div></div>
            <div>
                <h1>Contact Us</h1>
                <div>
                    <input
                        placeholder="Full Name"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <input
                        placeholder="E-mail"
                        type="text"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (validateEmail(e.target.value)) {
                                setIsValid(true);
                            } else {
                                setIsValid(false);
                            }
                        }}
                    />
                    <input
                        placeholder="Message"
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={handleSubmit}>Contact Us</button>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Contact;
