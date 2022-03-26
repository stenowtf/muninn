import { useRouter } from "next/router";
import { THEME_PATH } from "src/lib/routes";

export const useRedirectWhenUnsuccessful = (condition: boolean) => {
  const router = useRouter();

  if (condition) {
    router.push(`${THEME_PATH}/invalid`);
  }
};
