import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

interface IProps {
  platforms?: FetchResponse<Platform>;
  id?: number;
}

const usePlatform = ({ platforms, id }: IProps) => {
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatform;
