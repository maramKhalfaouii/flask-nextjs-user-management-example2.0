import React, { useState, FormEvent } from "react";
import styled from "styled-components";
import { TextInput } from "components/text-input";
import { AuthApi } from "services";
import { login } from "utils/auth";
import Link from 'next/link';


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LoginForm: React.FC<{ onSubmit: (e: FormEvent) => Promise<void> }> = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsError(false);
    try {
      const api = new AuthApi();
      api.setup();
      const response = await api.login(email, password);

      if (response.kind === "ok") {
        const { token } = response;
        login(token);
      } else {
        setIsError(true);
      }
    } catch (err) {
      setIsError(true);
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={onSubmit}>
        <TextInput
          label="Email"
          type="email"
          id="email"
          name="email"
          value={email}
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
        <TextInput
          label="Password"
          id="password"
          name="password"
          required
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
        <div className="form-group">
          <button type="submit" className="btn btn-primary float-right">
            Login
          </button>
        </div>
      </LoginForm>
      {isError && (
        <div className="mt-4 alert alert-danger" role="alert">
          There's an error while login, please try again!
        </div>
      )}
      <p>Don't have an account? <Link href="/register"><a> Please register now </a></Link></p>
    </Container>
  );
};

export default Login;
