import axios from "axios";

export const login = async (accessToken: string) => {
  const { data } = await axios.post(process.env.NEXT_PUBLIC_SERVER_URI + 'auth', {
    accessToken,
    vendor: 'kakao'
  });
  console.log(data);

  return data;
}