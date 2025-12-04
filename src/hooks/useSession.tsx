import { useEffect, useState } from "react";

import { LOCAL_STORAGE_KEYS, SESSION_STATUS } from "../constants/Global";
import { ISession } from "../models/Auth";

export const useSession = () => {
  const [session, setSession] = useState<ISession>({
    session: null,
    status: SESSION_STATUS.LOADING,
    role: null,
  });

  useEffect(() => {
    setTimeout(() => {
      const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
      const email = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_EMAIL);
      const role = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_ROLE);

      if (token && email && role) {
        setSession({
          session: { email },
          status: SESSION_STATUS.AUTHENTICATED,
          role: role,
        });
      } else {
        setSession({
          session: null,
          status: SESSION_STATUS.UNAUTHENTICATED,
          role: null,
        });
      }
    }, 1000);
  }, []);

  return session;
};
