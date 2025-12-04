import { SESSION_STATUS } from "../constants/Global";
export interface ISession {
	session: { email: string } | null;
	status: SESSION_STATUS;
	role: string | null;
}
export interface ILoginRequest {
	email: string;
	password: string;
}
