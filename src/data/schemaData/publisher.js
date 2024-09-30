import { PUBLISHER_NAME } from "@/utils/constants";

export const publisher = {
  name: PUBLISHER_NAME,
  logo: process.env.NEXT_PUBLIC_BASE_URL + '/logo/logo.png',
  url: process.env.NEXT_PUBLIC_BASE_URL,
};
