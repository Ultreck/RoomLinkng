import { SettingFormValues } from "@/app/renter/settings/page";
import testy1 from "../assets/images/testy-image1.png";
import testy2 from "../assets/images/testy-immage2.png";
// import testy3 from '../assets/images/profile.png'
import imgMain from '../assets/images/house.png';
import img1 from '../assets/images/pic-one.png'; 
import img2 from '../assets/images/pic-two.png';
type EndDate = {
  value: string;
  label: string;
};

type Testimonies = {
  name: string;
  testimony: string;
  image: string;
  role: string;
};

// type WishListItemsProps = {
//   id: string;
//   title: string;
//   saved: string;
//   isFavorite: boolean;
//   imageUrl: string,
// };

type ChatPreviewProp = {
  me: string;
  user: string;
  time: string;
};

type ChatUersProps = {
  id: string;
  name: string;
  time: string;
  preview?: ChatPreviewProp[];
  isTyping?: boolean;
  unread: number;
};

  export const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.2 },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.2 },
    }),
  };
  
export const endDate: EndDate[] = [
  { value: "jul-22-2025", label: "July, 22, 2025" },
  { value: "aug-2025", label: "August, 25, 2025" },
  { value: "sep-18-2025", label: "September, 18, 2025" },
  { value: "oct-10-2025", label: "October, 10, 2025" },
  { value: "nov-28-2025", label: "November, 14, 2025" },
  { value: "dec-2025", label: "December, 24, 2025" },
];

export const testimonies: Testimonies[] = [
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
    title: "Tropic flat villa01",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: imgMain,
    otherImgs:[img1, img2, img2, img1, img1, img2, img2, img1],
    isFavorite: false,
  },
  {
    id: "2",
    title: "Tropic flat villa02",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: imgMain,
    otherImgs:[img1, img2, img2, img1, img1, img2, img2, img1],
    isFavorite: true,
  },
  {
    id: "3",
    title: "Tropic flat villa03",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: imgMain,
    otherImgs:[img1, img2, img2, img1, img1, img2, img2, img1],
    isFavorite: false,
  },
  {
    id: "4",
    title: "Tropic flat villa04",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: imgMain,
    otherImgs:[img1, img2, img2, img1, img1, img2, img2, img1],
    isFavorite: true,
  },
  {
    id: "5",
    title: "Tropic flat villa05",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: imgMain,
    otherImgs:[img1, img2, img2, img1, img1, img2, img2, img1],
    isFavorite: false,
  },
];

export const lagosRooms = [
  {
    id: "6",
    title: "Tropic flat villa06",
    location: "Lekki Lagos",
    rating: 4.9,
    price: "N30K",
    imageUrl: imgMain,
    otherImgs:[img1, img2, img2, img1, img1, img2, img2, img1],
    isFavorite: true,
  },
  {
    id: "7",
    title: "Tropic flat villa07",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: imgMain,
    otherImgs:[img1, img2, img2, img1, img1, img2, img2, img1],
    isFavorite: false,
  },
  {
    id: "8",
    title: "Tropic flat villa08",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: imgMain,
    otherImgs:[img1, img2, img2, img1, img1, img2, img2, img1],
    isFavorite: true,
  },
  {
    id: "9",
    title: "Tropic flat villa09",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: imgMain,
    otherImgs:[img1, img2, img2, img1, img1, img2, img2, img1],
    isFavorite: true,
  },
  {
    id: "10",
    title: "Tropic flat villa10",
    location: "Elebu Ibadan",
    rating: 4.9,
    price: "N30K",
    imageUrl: imgMain,
    otherImgs:[img1, img2, img2, img1, img1, img2, img2, img1],
    isFavorite: false,
  },
];

export const whishListItems = [
  {
    id: "1",
    title: "For vacation",
    saved: "2 saved",
    imageUrl: imgMain,
    isFavorite: true,
  },
  {
    id: "2",
    title: "For festival",
    saved: "5 saved",
    imageUrl: imgMain,
    isFavorite: true,
  },
  {
    id: "3",
    title: "For break",
    saved: "7 saved",
    imageUrl: imgMain,
    isFavorite: true,
  },
  {
    id: "4",
    title: "For residence",
    saved: "7 saved",
    imageUrl: imgMain,
    isFavorite: true,
  },
];

export const fields: {
  key: keyof SettingFormValues;
  label: string;
  placeholder: string;
}[] = [
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

export const users: ChatUersProps[] = [
  {
    id: '1',
    name: "Gladys Adediji",
    unread: 0,
    time: "10:00 pm",
    isTyping: true,
    preview: [{ time: "10:00 pm", user: "", me: "" }],
  },
  {
    id: '2',
    name: "Donna Gideon",
    unread: 3,
    time: "7:29 pm",
    isTyping: false,
    preview: [
      {
        time: "10:00 pm",
        user: "It was very nice having you…",
        me: "Likewise",
      },
      {
        time: "10:00 pm",
        me: "Are you still at home?",
        user: "No, I'm already on transit",
      },
    ],
  },
  {
    id: '3',
    name: "Badeyemi King",
    unread: 0,
    time: "7:29 pm",
    isTyping: true,
    preview: [
      {
        time: "10:00 pm",
        me: "You: Is this bathroom private?",
        user: "Yes, the bathroom is private…",
      },
    ],
  },
  {
    id: '4',
    name: "Tolu Arowosegbe",
    unread: 4,
    time: "7:29 pm",
    isTyping: true,
    preview: [
      {
        time: "10:00 pm",
        me: "You: I will be arriving in 9mi…",
        user: "Alright, safe journey",
      },
    ],
  },
  {
    id: '5',
    name: "Gladys Adediji",
    unread: 5,
    time: "10:00 pm",
    isTyping: false,
    preview: [{ time: "10:00 pm", user: "Hi", me: "Hello " }],
  },
  {
    id: '6',
    name: "Donna Gideon",
    unread: 0,
    time: "7:29 pm",
    isTyping: true,
    preview: [
      {
        time: "10:00 pm",
        user: "It was very nice having you…",
        me: "Likewise",
      },
      {
        time: "10:00 pm",
        me: "Are you still at home?",
        user: "No, I'm already on transit",
      },
    ],
  },
  {
    id: '7',
    name: "Badeyemi King",
    unread: 0,
    time: "7:29 pm",
    isTyping: false,
    preview: [
      {
        time: "10:00 pm",
        me: "Is this bathroom private?",
        user: "Yes, the bathroom is private…",
      },
    ],
  },
  {
    id: '8',
    name: "Tolu Arowosegbe",
    unread: 0,
    time: "7:29 pm",
    isTyping: false,
    preview: [
      {
        time: "10:00 pm",
        me: "You: I will be arriving in 9mi…",
        user: "Alright, safe journey",
      },
    ],
  },
  {
    id: '9',
    name: "Gladys Adediji",
    unread: 1,
    time: "10:00 pm",
    isTyping: false,
    preview: [{ time: "10:00 pm", user: "Hello", me: "Hey there" }],
  },
  {
    id: '10',
    name: "Donna Gideon",
    unread: 2,
    time: "7:29 pm",
    isTyping: true,
    preview: [
      {
        time: "10:00 pm",
        user: "It was very nice having you…",
        me: "Likewise",
      },
      {
        time: "10:00 pm",
        me: "Are you still at home?",
        user: "No, I'm already on transit",
      },
    ],
  },
  {
    id: '11',
    name: "Badeyemi King",
    unread: 0,
    time: "7:29 pm",
    isTyping: false,
    preview: [
      {
        time: "10:00 pm",
        me: "Is this bathroom private?",
        user: "Yes, the bathroom is private…",
      },
    ],
  },
  {
    id: '12',
    name: "Tolu Arowosegbe",
    unread: 0,
    time: "7:29 pm",
    isTyping: false,
    preview: [
      {
        time: "10:00 pm",
        me: "You: I will be arriving in 9mi…",
        user: "Alright, safe journey",
      },
    ],
  },
];
