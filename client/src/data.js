import { v4 as uuidv4 } from 'uuid';
import imgCelestial from './assets/images/Celestial.avif'
import imgSkyHigh from './assets/images/SkyHigh.avif'
import lunchBuffet from './assets/images/LunchBuffet.avif'
import dinnerBuffet from './assets/images/DinnerBuffet.avif'
import teaBuffet from './assets/images/TeaBuffet.avif'
import imgOne from './assets/images/IMGONE.jpg'
import imgTwo from './assets/images/IMGTWO.jpg'
import imgThree from './assets/images/IMGTHREE.jpg'
import imgFour from './assets/images/IMGFOUR.jpg'
import imgFive from './assets/images/IMGFIVE.jpg'
import imgSix from './assets/images/IMGSIX.jpg'
import imgSeven from './assets/images/IMGSEVEN.jpg'
import imgEight from './assets/images/IMGEIGHT.jpg'
import imgNine from './assets/images/IMGNINE.jpg'
import imgTen from './assets/images/IMGTEN.jpg'
import imgEleven from './assets/images/IMGELEVEN.jpg'
import imgTwelve from './assets/images/IMGTWEVEL.jpg'
import imgThirteen from './assets/images/IMGTHIRTEEN.jpg'
import imgFourteen from './assets/images/IMGFOURTEEN.jpg'
import imgFifteen from './assets/images/IMGFIFITEEN.jpg'

export const navData = [
    {
        id:uuidv4(),
        title:"About",
        links:[
            {
                id: uuidv4(),
                linkTitle:"Atmosphere 360",
                link:"https://www.malaysia-tickets.com/atmosphere-360/about/?_gl=1*13ddckm*_ga*MjAwNTQ0Mzc1MC4xNjk2MzEzNzAw*_ga_Y45PC9R73C*MTY5NjMyMjc0MC4yLjEuMTY5NjMyMjkwNy42MC4wLjA."
            },
            {
                id: uuidv4(),
                linkTitle:"Buffets",
                link:"https://www.malaysia-tickets.com/atmosphere-360/buffets/?_gl=1*199ham8*_ga*MjAwNTQ0Mzc1MC4xNjk2MzEzNzAw*_ga_Y45PC9R73C*MTY5NjMyMjc0MC4yLjEuMTY5NjMyMjkxMi41NS4wLjA."
            },
            {
                id: uuidv4(),
                linkTitle:"Plan your visits",
                link:"https://www.malaysia-tickets.com/atmosphere-360/plan-your-visit/?_gl=1*1h09y37*_ga*MjAwNTQ0Mzc1MC4xNjk2MzEzNzAw*_ga_Y45PC9R73C*MTY5NjMyMjc0MC4yLjEuMTY5NjMyMjk1Ny4xMC4wLjA."
            },
        ]
    },

    {
        id: uuidv4(),
        title:"Kuala Lumpur Attractions",
        links:[
            {
                id: uuidv4(),
                linkTitle:"KL Tower Tickets",
                link:"https://www.malaysia-tickets.com/menara-kl-tower-kuala-lumpur/?_gl=1*1f887i6*_ga*MjAwNTQ0Mzc1MC4xNjk2MzEzNzAw*_ga_Y45PC9R73C*MTY5NjMyNzI4Ny4zLjEuMTY5NjMyODg3MC42MC4wLjA."
            },
            {
                id: uuidv4(),
                linkTitle:"Sunway Lagoon Kuala Lumpur Tickets",
                link:"https://www.malaysia-tickets.com/sunway-lagoon/?_gl=1*1g4y8xm*_ga*MjAwNTQ0Mzc1MC4xNjk2MzEzNzAw*_ga_Y45PC9R73C*MTY5NjMyNzI4Ny4zLjEuMTY5NjMyODkzNC42MC4wLjA."
            },
            {
                id: uuidv4(),
                linkTitle:"Petrons Twins Towers Tickets",
                link:"https://www.malaysia-tickets.com/petronas-twin-towers/?_gl=1*1pxgl04*_ga*MjAwNTQ0Mzc1MC4xNjk2MzEzNzAw*_ga_Y45PC9R73C*MTY5NjMyNzI4Ny4zLjEuMTY5NjMyODk0My41MS4wLjA."
            },
            {
                id: uuidv4(),
                linkTitle:"Aquaria KLCC Tickets",
                link:"https://www.aquarium-tickets.com/klcc-aquarium-tickets/?_gl=1*1hbbvj9*_ga*MjAwNTQ0Mzc1MC4xNjk2MzEzNzAw*_ga_Y45PC9R73C*MTY5NjMyNzI4Ny4zLjEuMTY5NjMyOTAzNC4yNS4wLjA."
            },
            {
                id: uuidv4(),
                linkTitle:"Getting SkyWorlds Tickets",
                link:"https://www.malaysia-tickets.com/genting-skyworlds-theme-park/?_gl=1*by2oxf*_ga*MjAwNTQ0Mzc1MC4xNjk2MzEzNzAw*_ga_Y45PC9R73C*MTY5NjMyNzI4Ny4zLjEuMTY5NjMyOTA5NC40NC4wLjA."
            },
        ]
    },
    {
        id:uuidv4(),
        title:"Themes",
        links:[{
             id: uuidv4(),
            linkTitle:"KL Tower Mini Zoo Tickets",
            link:" https://www.hop-on-hop-off-tickets.com/kuala-lumpur-bus-tours/?_gl=1*1ks3uo6*_ga*MjAwNTQ0Mzc1MC4xNjk2MzEzNzAw*_ga_Y45PC9R73C*MTY5NjMzMTMwOS40LjEuMTY5NjMzMTg2OC41MC4wLjA."
           
        }]
    }
]



export const cardData = [
    {
        id: uuidv4(),
        image:[
            imgFour,
            dinnerBuffet,
            imgThree,
            imgEight,
            imgNine,
            teaBuffet,
            imgSeven,
        ],
        title:"Atmosphere 360 Revolving Restaurant - Dinner Buffet",
        desc:"Make your special occasions more memorable by booking a window seat view and opting for the celebration setup, whole cake, and a flower bouquet.",
        type:"dinner"
    },
    {
        id: uuidv4(),
        image:[
            imgTwo,
            lunchBuffet,
            imgOne,
            imgFive,
            imgTen,
            imgTwelve,
            imgFifteen

        ],
        title:"Atmosphere 360 Revolving Restaurant - Lunch Buffet",
        desc:"Experience a memorable lunch 282 meters above the ground in the Kuala Lumpur Tower, Southeast Asia's tallest revolving restaurant.",
        type:"lunch"
    },
    {
        id: uuidv4(),
      image:[
            imgFour,
            dinnerBuffet,
            imgThree,
            imgEight,
            imgNine,
            teaBuffet,
            imgSeven,
        ],
        title:"Atmosphere 360 Revolving Restaurant - Hi Tea Buffet",
        desc:"Look over the city of Kuala Lumpur from the observation deck at Atmosphere 360 as you enjoy a delicious Hi-Tea Buffet.",
        type:"tea"
    },
    
]



export const  bookTicketDetails = [
    {
        id: uuidv4(),
        image: imgEleven,
        title:"Dinner Buffet",
        desc:[
            "Savor the height of luxury at Atmosphere 360, Southeast Asia's highest-revolving restaurant, perched 282 meters in the sky.",

            "Indulge in a delectable dinner buffet featuring unlimited main courses, soups, noodles, salads, desserts, fruits, and refreshing drinks.",
            "Create unforgettable memories with a window seat view, celebration setup, whole cake, and a charming flower bouquet for your special occasions.",

            "Delight your senses with exquisite panoramic views of Kuala Lumpur's entire cityscape from Menara Kuala Lumpur. ",

            "Experience the magic of dining amidst the stars, surrounded by twinkling city lights and an ever-changing panorama."
        ]
    },
    {
        id: uuidv4(),
        image:"https://cdn-imgix.headout.com/media/images/494a311283de614a13510b0a82f1d6bd-Atmosphere%20360%209.jpg?auto=format&w=468.29999999999995&h=267.59999999999997&q=90&fit=crop&ar=7%3A4",

        title:"Lunch Buffet",
        desc:[
            "Elevate your dining experience at Atmosphere 360, the enchanting revolving restaurant soaring 282 meters above Kuala Lumpur in the iconic KL Tower.",

            "Savor a delectable buffet blending the best of Malaysian and international cuisines, while you're captivated by the ever-changing 360° panorama of the KL skyline.",

            "Delight your taste buds with an array of tantalizing salads, soups, starters, mouthwatering main courses, and divine desserts.",

            "Step into a celestial world as the starry fiber-optic ceiling lights create a spaceship-like ambiance, enhancing your dining adventure.",

            "For an unparalleled view of KL city, including the Petronas Twin Towers, the National Mosque of Malaysia, and Bukit Nanas Forest, treat yourself to a window seat (surcharge applies) and relish in an unobstructed visual feast."
        ]
    },
    {
        id: uuidv4(),
        image:"https://cdn-imgix.headout.com/media/images/8d4180c4e399867bbd67cb9c51a0716b-KL%20Tower%20Atmosphere%20360%203.jpg?auto=format&w=468.29999999999995&h=267.59999999999997&q=90&fit=crop&ar=7%3A4",

        title:"Hi-Tea Buffet",
        desc:[
            "Savor a delectable Hi-Tea Buffet while gazing at Kuala Lumpur from the observation deck at Atmosphere 360.",

            "Embark on a gastronomic journey within a spaceship-themed revolving restaurant, where mouthwatering dishes await.",

            "Indulge in premium Malay cuisine skillfully prepared by culinary experts, a delightful showcase of culinary prowess.",

            "Elevate your experience with window seating (extra charge) for an unparalleled view and dining extravaganza.",

            "Immerse yourself in a world of taste and sight, where Atmosphere 360 offers a fusion of flavors and captivating vistas."
        ]
    },
]



export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/gJ9QnyGd/IMG-20240129-WA0076.jpg",
        title:"Sky-High Luxurious Buffet",
        desc:"Delight in glorious Buffets while floating above Kuala Lumpur's skyline, savoring a symphony of flavors with breathtaking views."
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/fLxFX3bd/IMG-20240129-WA0075.jpg",
        title:"Revolving Enchantment",
        desc:"Be mesmerized by the spaceship-themed décor as the restaurant gently revolves, creating an otherworldly ambiance like dining among the stars."
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/7Z6pcYBv/IMG-20240129-WA0073.jpg",
        title:"Celestial Culinary Artistry",
        desc:"Indulge in a culinary masterpiece crafted by expert chefs, where Malay delicacies showcase a harmonious blend of tradition and innovation."
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/wx58Rrtr/IMG-20240129-WA0074.jpg",
        title:"Window to Wonder",
        desc:"Upgrade to window seating and unlock a dazzling perspective of the city, elevating your dining experience to unparalleled heights."
    },  
    {
        id: uuidv4(),
        image:"https://i.postimg.cc/7h9Wsp0Y/IMG-20240129-WA0078.jpg",
        title:"Astral Elegance",
        desc:"Admire the exquisite interior design that fuses modern sophistication with celestial charm, creating an atmosphere that is both enchanting and sophisticated."
    },  
    {
        id: uuidv4(),
        image:"https://i.postimg.cc/GhzWqsxJ/IMG-20240129-WA0071.jpg",
        title:"Celestial Events",
        desc:"Experience unique celestial events with themed dining nights, creating unforgettable memories under the stars."
    },  
]



export const homeBuffetOptions = [
    // {
    //     id: uuidv4(),
    //     title:"Lunch Buffet",
    //     desc:"Indulge in a delectable array of culinary delights during the Lunch Buffet at Atmosphere 360, offering a diverse selection of dishes to satisfy your midday cravings.",
    //     image: lunchBuffet
    // },
    // {
    //     id: uuidv4(),
    //     title:"Hi-Tea Buffet",
    //     desc:"Treat yourself to an afternoon of delightful treats and savory bites at the Hi-Tea Buffet, where an assortment of sweet and savory delicacies awaits your palate.",
    //     image: teaBuffet
    // },
    {
        id: uuidv4(),
        title:"Dinner Buffet",
        desc:"Embark on a gastronomic journey during the Dinner Buffet, featuring an opulent spread of gourmet dishes amidst the enchanting ambiance of the revolving restaurant, creating a truly memorable dining experience.",
        image: "https://i.postimg.cc/gJ9QnyGd/IMG-20240129-WA0076.jpg"
    },
    {
        id: uuidv4(),
        title:"Tea Buffet",
        desc:"Embark on a gastronomic journey during the Tea Buffet, featuring an opulent spread of gourmet dishes amidst the enchanting ambiance of the revolving restaurant, creating a truly memorable dining experience.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1709312901/Malaysia%20Experience/Aras%20Resturant/9_cr1i0t.jpg"
    },
]



export const homeVisitPlanData = [
    {
        id: uuidv4(),
        image:"https://cdn-imgix.headout.com/media/images/3fab810baf246f9c5cec7976f6f1372f-KL%20Tower%20Atmosphere%20360%205.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&fit=crop&ar=16%3A9",
        type:"timings",
        details:[
            "Operating Hours: 12 PM - 10 PM",
            "Lunch: 2 PM",
            "Hi-Tea: 5 PM",
            "Dinner: 9 PM"
        ]
    },
    {
        id: uuidv4(),
        image:"https://cdn-imgix.headout.com/media/images/a3527012bc512e6f3787c29257582cdd-Atmosphere%20360%205.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&fit=crop&ar=16%3A9",
        type:"location",
        details:[
            "Address: Level 7 Unit, 1 Menara Goldstone Holiday Inn Express, No 84, Jalan Raja",
            "Chulan, 50200, Kuala Lumpur, Malaysia.",
            "By Metro: 3- LRT Ampang Line (Nearest Stop: Masjid Jamang)",
            "By Bus: The Weld, Menara Hup Seng/ KL Tower (Timur) (Nearest Stop: Bukit Bitang)",
            "By Car: Distance From Airport: 28.5 KM from Sultan Abdul Aziz Shah Airport (Subang Airport) (SZB) (Car Parking: Available)"
        ]
    },
    {
        id: uuidv4(),
        image:"https://cdn-imgix.headout.com/media/images/74a5945fe3eca393deb6fb05af0fbd5e-Atmosphere%20360.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&fit=crop&ar=16%3A9",
        type:"facilities",
        details:[
            "ATM: On-site ATM for easy access to cash.",
            "Praying Room: A designated, peaceful space for prayer and meditation.",
            "Toilet: Hygienic, well-maintained restrooms with essential amenities.",
            "Parking Area: Spacious and secure parking to accommodate all vehicle sizes.",
            "Hotel Drop-in/Drop-off: Convenient transportation available for selected hotels."
        ]
    },
    {
        id: uuidv4(),
        image:"https://cdn-imgix.headout.com/media/images/f250dec4f0fcff500dd8a4d63a94f3f1-Atmosphere%20360%202.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&fit=crop&ar=16%3A9",
        type:"dress",
        details:[
            "The dress code at Atmosphere 360 is smart casual.",
            "Neat and presentable attire is recommended.",
            "Sleeveless shirts and flip-flops are not permitted.",
            "Gentlemen are advised to avoid wearing shorts and sandals.",
            "Guests are encouraged to dress comfortably and elegantly for a delightful dining experience."
        ]
    },
    {
        id: uuidv4(),
        image:"https://cdn-imgix.headout.com/media/images/64c273cc09bf80adddfbf4cab3aef82d-Atmosphere%20360%203.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&fit=crop&ar=16%3A9",
        type:"accessibility",
        details:[
            "Atmosphere 360 is wheelchair accessible, providing ramps and elevators for easy mobility.",
            "Accessible restrooms are available on the premises for visitors with disabilities.",
            "Stroller accessible and infant seats are available on request.",
            "Trained staff members are ready to offer assistance and support to those in need."
        ]
    },
    {
        id: uuidv4(),
        image:"https://cdn-imgix.headout.com/media/images/4462c42422cdf394163274f45c67403b-Atmosphere%20360%204.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&fit=crop&ar=16%3A9",
        type:"rules",
        details:[
            "Guests are required to adhere to the designated dress code of smart casual attire for a comfortable dining experience.",
            "Smoking is strictly prohibited within the premises, ensuring a pleasant environment for all visitors.",
            "Pets are not allowed inside Atmosphere 360, except for service animals assisting individuals with disabilities.",
            "The use of drones or any unauthorized aerial devices is not permitted on the premises.",
            "Visitors must follow staff instructions and maintain decorum to ensure a harmonious and enjoyable atmosphere for everyone."
        ]
    },
   
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"Should I make an advance reservation for ARAS Restaurant KL Tower ?",
        ans:"Highly Recommended, advance reservations are welcome to confirm your preferred dining slot."
    },
    {
        id: uuidv4(),
        ques:"How Can I request a window table at ARAS Restaurant KL Tower ?",
        ans:"Yes, you can request window Table during reservation/booking with extra charges."
    },
    {
        id: uuidv4(),
        ques:"What is dress code for guest at ARAS Restaurant KL Tower ?",
        ans:"Recommended smart casual attire and no sandals allowed."
    },
    {
        id: uuidv4(),
        ques:"The best time to visit ARAS Restaurant KL Tower ?",
        ans:"The Dinner dining will be ideal to witness the City of Light."
    },
]

export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "Dinner starts at: 7.00pm-10.00pm"
        ]
    },
    {
        id: uuidv4(),
        ques:"For Your Concern",
        ans:[
            "Shorts and Slippers are prohibited.",
            "Recommend to make advanced reservations to confirm your preferred dining slot.",
            "Consider upgrading to window seat for better sky view(Subject to availability).",
            "Observe decorum and follow staff instruction for a pleasant visit.",
            "Remark about any dietary restrictions or allergies during booking."
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased."
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter."]
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
    {
        id: uuidv4(),
        ques:"The best time to visit Atmosphere 360?",
        ans:"The Dinner dining will be ideal to witness the City of Light."
    },
]

export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]


export const publicHolidays = [
    "February 1st, 2024",
    "February 12th, 2024",
]


export const menuData = [
    {
        id:uuidv4(),
        title:"Hi Tea",
        images:[
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710571903/Malaysia%20Experience/Aras%20Resturant/WhatsApp_Image_2024-03-14_at_14.51.23_bahzni.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710571903/Malaysia%20Experience/Aras%20Resturant/WhatsApp_Image_2024-03-14_at_14.51.24_kjifgi.jpg"
        ]
    },
    {
        id:uuidv4(),
        title:"Dinner Buffet Ramadan",
        images:[
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710571918/Malaysia%20Experience/Aras%20Resturant/Menu_Aras_Bufet_Ramadan_2_Page_1_pqucvw.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710571919/Malaysia%20Experience/Aras%20Resturant/Menu_Aras_Bufet_Ramadan_2_Page_2_jq49gh.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710571919/Malaysia%20Experience/Aras%20Resturant/Menu_Aras_Bufet_Ramadan_2_Page_3_gy6xpf.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710571921/Malaysia%20Experience/Aras%20Resturant/Menu_Aras_Bufet_Ramadan_2_Page_5_o6fxuz.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710571920/Malaysia%20Experience/Aras%20Resturant/Menu_Aras_Bufet_Ramadan_2_Page_4_pwgvjh.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710571921/Malaysia%20Experience/Aras%20Resturant/Menu_Aras_Bufet_Ramadan_2_Page_6_cdq3yl.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710571922/Malaysia%20Experience/Aras%20Resturant/Menu_Aras_Bufet_Ramadan_2_Page_7_toyl8a.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710571923/Malaysia%20Experience/Aras%20Resturant/Menu_Aras_Bufet_Ramadan_2_Page_8_ff04dn.jpg"
        ]
    },
]