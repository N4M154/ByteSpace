import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <AuthLayout
      leftHeading="Sign up and come in"
      leftText="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      eyebrow="Create an account"
      title="Welcome to ByteSpace"
      footer={
        <>
          Already have an account? <Link to="/signin">Log in</Link>
        </>
      }
    >
      <form className="auth-form" onSubmit={onSubmit}>
        <label className="auth-field">
          <span>Full name</span>
          <input
            type="text"
            required
            placeholder="Jane Designer"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="auth-field">
          <span>Email</span>
          <input
            type="email"
            required
            placeholder="designer@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="auth-field">
          <span>Password</span>
          <input
            type="password"
            required
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <div className="auth-actions">
          <button className="auth-submit" type="submit">
            Continue
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
