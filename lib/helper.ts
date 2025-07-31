import { SettingFormValues } from '@/app/renter/settings/page';
import testy1 from '../assets/images/testy-image1.png';
import testy2 from '../assets/images/testy-immage2.png';
// import testy3 from '../assets/images/profile.png'

type EndDate = {
    value: string;
    label: string;
}

type Testimonies = {
    name: string;
    testimony: string;
    image: string;
    role: string;
}

type WishListItemsProps = {
    id: string;
    title: string;
    saved: string;
    isFavorite: boolean,
}

export const endDate:EndDate[] = [
  { value: "jul-22-2025", label: "July, 22, 2025" },
  { value: "aug-2025", label: "August, 25, 2025" },
  { value: "sep-18-2025", label: "September, 18, 2025" },
  { value: "oct-10-2025", label: "October, 10, 2025" },
  { value: "nov-28-2025", label: "November, 14, 2025" },
  { value: "dec-2025", label: "December, 24, 2025" },
];


export const testimonies:Testimonies[] = [
    {
        name: "Abraham John",
        testimony:
          "I started using RoomLink some weeks ago and as a landlord who travels out consistently, i was able to earn with ease",
        image: testy1.src,
        role: "Landlord",
    },
    {
        name: "Gladys Adediji",
        testimony:
        "I decided to test with RoomLink and it was so seamless that i will use it again and again. I enjoyed my stay and saved money in return,",
        image: testy2.src,
        role: "Renter",
    },
    {
        name: "Gabriel Williams",
        testimony:
        "I started using RoomLink some weeks ago and as a landlord who travels out consistently, i was able to earn with ease",
        image: testy1.src,
        role: "Landlord",
    },
    {
        name: "Gladys Adediji",
        testimony:
        "I decided to test with RoomLink and it was so seamless that i will use it again and again. I enjoyed my stay and saved money in return,",
        image: testy2.src,
        role: "Renter",
    },
];


export const ibadanRooms = [
  {
    id: "1",
    title: "Tropic flat villa",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: false,
  },
  {
    id: "2",
    title: "Tropic flat villa",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: true,
  },
  {
    id: "3",
    title: "Tropic flat villa",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: false,
  },
  {
    id: "4",
    title: "Tropic flat villa",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: true,
  },
  {
    id: "5",
    title: "Tropic flat villa",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: false,
  },
];

export const lagosRooms = [
  {
    id: "6",
    title: "Tropic flat villa",
    location: "Lekki Lagos",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: true,
  },
  {
    id: "7",
    title: "Tropic flat villa",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: false,
  },
  {
    id: "8",
    title: "Tropic flat villa",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: true,
  },
  {
    id: "9",
    title: "Tropic flat villa",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: true,
  },
  {
    id: "10",
    title: "Tropic flat villa",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: "/api/placeholder/300/200",
    isFavorite: false,
  },
];

export const whishListItems: WishListItemsProps[] = [
 {
    id: "1",
    title: "For vacation",
    saved: "2 saved",
    isFavorite: true,
  },
 {
    id: "2",
    title: "For festival",
    saved: "5 saved",
    isFavorite: true,
  },
 {
    id: "3",
    title: "For break",
    saved: "7 saved",
    isFavorite: true,
  },
 {
    id: "4",
    title: "For residence",
    saved: "7 saved",
    isFavorite: true,
  },
];


export const fields: { key: keyof SettingFormValues; label: string; placeholder: string }[] = [
  {
    key: "fullname",
    label: "Full name",
    placeholder: "Enter your full name",
  },
  {
    key: "email",
    label: "Email address",
    placeholder: "Enter your email",
  },
  {
    key: "phone",
    label: "Phone number",
    placeholder: "Enter your phone number",
  },
  {
    key: "nin",
    label: "Identity verification (NIN)",
    placeholder: "Verify your account with your NIN",
  },
  {
    key: "address",
    label: "Residential address",
    placeholder: "Enter your address",
  },
  {
    key: "birthdate",
    label: "Birthdate",
    placeholder: "MM/DD/YYYY",
  },
];


