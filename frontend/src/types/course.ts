export interface Course {
  id: number;
  title: string;
  instructor: string;
  image: string;
  rating: number;
  totalRatings: number;
  students: number;
  price: number;
  isBestSeller: boolean;
}