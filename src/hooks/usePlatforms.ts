import useData from "./useData";

interface Platform {
  // Platform object has 3 properties
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Platform>("platforms/lists/parents");

export default usePlatforms;
