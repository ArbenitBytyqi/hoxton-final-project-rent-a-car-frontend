export type User = {
  id: number;
  email: string;
  name: string;
  image: string;
  password: string;
  cars: Cars[];
};

export type Cars = {
  id: number;
  brand: string;
  rating: number;
  carName: string;
  imgUrl: string;
  model: string;
  price: number;
  speed: string;
  gps: string;
  seatType: string;
  automatic: string;
  description: string;
};

export type SignInData = {
  email: string;
  password: string;
};

export type SignUpData = {
  email: string;
  password: string;
  name: string;
};
