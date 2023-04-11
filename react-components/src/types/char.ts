interface IChar {
  id: number;
  name: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  status: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode?: string[];
  url?: string;
  created?: string;
}

export default IChar;
