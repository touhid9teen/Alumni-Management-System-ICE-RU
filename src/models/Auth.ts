import { SESSION_STATUS } from "../constants/Global";
export interface ISession {
	session: { email: string } | null;
	status: SESSION_STATUS;
}
export interface ILoginRequest {
	email: string;
	password: string;
}
