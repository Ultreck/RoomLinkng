import { useRouter, useSearchParams } from "next/navigation";

type ModeProp = {
  modeParam?: string; // Make it optional
};

const useParamHook = ({ modeParam = "mode" }: ModeProp = {}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const mode = searchParams.get(modeParam);

  const handleSearchParams = (param: string, key: string = "mode") => {
    router.push(`?${key}=${param}`);
  };

  const removeQueryParams = (base: string) => {
    router.push(`/${base}`);
  };

  return {
    router,
    searchParams,
    mode,
    removeQueryParams,
    handleSearchParams,
  };
};


export default useParamHook;
