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
]