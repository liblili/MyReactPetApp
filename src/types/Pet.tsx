
export interface Pet {
  id: number;
  name: string;
  type: "dog" | "cat" | "other";
  breed: string;
  city: string;
  status: "lost" | "found" | "adoption";
  date: string;
  image: string;
  description: string;
}
