type DBPlace = {
  id: number;
  name: string;
  description: string;
  address: string;
  image: string;
  email: string;
  phone_number: string;
  location: string;
  is_available: boolean;
  is_featured: boolean;
  category_id: number;
};

type DBEvent = {
  id: number;
  name: string;
  description: string;
  address: string;
  image: string;
  location: string;
  start_date: string;
  end_date: string;
  website: string;
  phone_number: string;
  email: string;
  is_featured: boolean;
  category_id: number;
};
