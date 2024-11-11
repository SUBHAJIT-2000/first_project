import { useState } from "react"

export default function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("email:", email);
        console.log("Password:", password);
    }
    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" value = {email} id="email" onChange={e=>setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password" value = {password} id="pwd" onChange={e=>setPassword(e.target.value)} />
                        </div>
                        <div className="form-group form-check">
                            <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" /> Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}