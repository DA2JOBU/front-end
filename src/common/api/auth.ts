import axios from 'axios';

export const login = async (accessToken: string) => {
  const { data } = await axios.post(process.env.NEXT_PUBLIC_SERVER_URI + 'auth', {
    accessToken,
    vendor: 'kakao',
  });

  return data;
};

export const logout = async () => {};

export const getUserInfo = async (jwt: string) => {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_SERVER_URI + 'auth', {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return data;
};
