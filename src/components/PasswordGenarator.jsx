import { useCallback, useState, useEffect, useRef } from "react";

const PasswordGenarator = () => {

    const [length, setlength] = useState(6)
    const [numberAllowed, setnumberAllowed] = useState(false)
    const [charAllowed, setcharAllowed] = useState(false)
    const [password, setpassword] = useState("")
    const passwordRef = useRef(null);

    const PasswordGenarator = useCallback(() => {

        // let password = ""
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let numbers = "0123456789"
        let specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-="

        if (numberAllowed) chars += numbers
        if (charAllowed) chars += specialChars

        // for (let i = 0; i < length; i++) {
        //     let randomNumber = Math.floor(Math.random() * chars.length + 1)
        //     pass = chars.charAt(randomNumber)
        // }
        let pass = Array.from({ length }, () =>
            chars.charAt(Math.floor(Math.random() * chars.length))
        ).join('');

        setpassword(pass)

    }, [length, numberAllowed, charAllowed, setpassword])

    useEffect(() => {
        PasswordGenarator();
    }, [PasswordGenarator]);

    // Select and copy password
    const handleCopy = () => {
        if (passwordRef.current) {
            passwordRef.current.select();
            navigator.clipboard.writeText(password);
        }
    };



    return (

        <div className="passwordGenarator">
        <div className="passbox">
            <h1>Random Password Generator 🔐</h1>

            {/* Password Length  */}
            <div className="field">
                <label htmlFor="length">Password Length:</label>
                <input
                    type="range"
                    id="length"
                    name="length"
                    min="6"
                    max="16"
                    value={length}
                    onChange={e => setlength(Number(e.target.value))}
                />
                <span className="range-value">{length}</span>
            </div>

            {/* Options */}
            <div className="options">
                <label className="checkbox">
                    <input
                        type="checkbox"
                        name="numbers"
                        checked={numberAllowed}
                        onChange={e => setnumberAllowed(e.target.checked)}
                    />
                    Add Numbers
                </label>
                <label className="checkbox">
                    <input
                        type="checkbox"
                        name="special"
                        checked={charAllowed}
                        onChange={e => setcharAllowed(e.target.checked)}
                    />
                    Add Special Characters
                </label>
            </div>

            {/* Generated Password Field */}
            <div className="password-field">
                <input
                    type="text"
                    value={password}
                    placeholder="Generated Password"
                    readOnly
                    ref={passwordRef}
                />
                <button className="copy-btn" onClick={handleCopy}>Copy</button>
            </div>
        </div>
        </div>
    );
};

export default PasswordGenarator;