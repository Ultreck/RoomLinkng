import { useRouter, useSearchParams } from "next/navigation";

const useParamHook = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

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
