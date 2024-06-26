import { Api } from "./api";
import { ApiResponse } from "apisauce";
import { GeneralApiProblem, getGeneralApiProblem } from "./api/api-problem";
import { User } from "./types";

export type AuthResponse =
  | { kind: "ok"; token: string; user: User }
  | GeneralApiProblem;
export type UserStatusResponse = { kind: "ok"; user: User } | GeneralApiProblem;
export type GeneralStatusResponse =
  | { kind: "ok"; message: string }
  | GeneralApiProblem;

export class AuthApi extends Api {
  async login(email: string, password: string): Promise<AuthResponse> {
    const response: ApiResponse<any> = await this.apisauce.post(
      "/api/v1/auth/login",
      {
        email: email,
        password: password,
      }
    );

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    try {
      const data = response.data;
      return { kind: "ok", token: data.auth_token, user: data.user };
    } catch {
      return { kind: "bad-data" };
    }
  }

  async fetchStatus(token: string): Promise<UserStatusResponse> {
    this.apisauce.setHeader("Authorization", `Bearer ${token}`);
    const response: ApiResponse<any> = await this.apisauce.get(
      "/api/v1/auth/status"
    );

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    try {
      const data = response.data;
      return { kind: "ok", user: data.user };
    } catch {
      return { kind: "bad-data" };
    }
  }

  async checkToken(token: string): Promise<GeneralStatusResponse> {
    this.apisauce.setHeader("Authorization", `Bearer ${token}`);
    const response: ApiResponse<any> = await this.apisauce.get(
      "/api/v1/auth/ping"
    );

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    try {
      const data = response.data;
      return { kind: "ok", message: data.message };
    } catch {
      return { kind: "bad-data" };
    }
  }
  async register(firstName: string, lastName: string, email: string, password: string): Promise<AuthResponse> {
    const response: ApiResponse<any> = await this.apisauce.post(
      "/api/v1/registrations/register",
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }
    );
  
    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }
  
    try {
      const data = response.data;
      return { kind: "ok", token: data.auth_token, user: data.user };
    } catch {
      return { kind: "bad-data" };
    }
  }  
}
