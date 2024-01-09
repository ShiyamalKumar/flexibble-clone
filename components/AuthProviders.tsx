"use client";

import { getProviders, signIn } from "next-auth/react";
import { useState, useEffect } from "react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinurl: string;
  callbackURl: string;
  signUrlParams: Record<string, string> | null;
};
type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<any | null>(null);
  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
      console.log(res);
    };
    fetchProviders();
  }, []);
  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: any, i) => (
          <button key={i} onClick={() => signIn(provider?.id)}>
            {provider.id}
          </button>
        ))}
      </div>
    );
  }
};

export default AuthProviders;
