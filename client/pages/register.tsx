import { useRouter } from 'next/router';
import React, { useState, FormEvent } from "react";
import styled from "styled-components";
import { TextInput } from "components/text-input";
import { AuthApi } from "services";
import { login } from "utils/auth";


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LoginForm: React.FC<{ onSubmit: (e: FormEvent) => Promise<void> 
  children?: React.ReactNode; 
}> = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
};

const Registration = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsError(false);
    try {
      const api = new AuthApi();
      api.setup();
      const response = await api.register(firstName, lastName, email, password);

      if (response.kind === "ok") {
        const { token } = response;
        login(token);
      } else {
        setIsError(true);
      }
      router.push('/login');
    } catch (err) {
      setIsError(true);
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={onSubmit}>
        <TextInput
          label="First name"
          id="firstName"
          name="firstName"
          value={firstName}
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFirstName(e.target.value);
          }}
        />
        <TextInput
          label="Last name"
          id="lastName"
          name="lastName"
          required
          value={lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLastName(e.target.value);
          }}
        />
        <TextInput
          label="Email"
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
            console.log(email);

          }}
        />
        <TextInput
          label="Password"
          id="password"
          type="password"
          name="password"
          required
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
        <div className="form-group">
          <button type="submit" className="btn btn-primary float-right">
            Create account
          </button>
        </div>
      </LoginForm>
      {isError && (
        <div className="mt-4 alert alert-danger" role="alert">
          There's an error while creating a new account, please try again!!
        </div>
      )}
    </Container>
    
  );
};

export default Registration;
