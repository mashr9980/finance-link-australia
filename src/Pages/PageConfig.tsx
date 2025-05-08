import HnadHoldingPhone from "../components/assets/Hand-holding-phone1.avif"
import AboutMain from "../components/assets/about-bg1.webp"
import Partners from "../components/assets/partners1.png"
import PersonalLoans from "../components/assets/PL1.avif"
import BusinessLoans from "../components/assets/about-bg.png"
import CarLoan from "../components/assets/car2.png"
import BikeLoan from "../components/assets/bike1.png"
import Caravan from "../components/assets/carvan2.png"
import Boat from "../components/assets/boat1.png"
import Jet from "../components/assets/jet2.png"
import Wed from "../components/assets/PL1.avif"
import Truck from "../components/assets/truck0.png"
import Trailer from "../components/assets/trailer02.png"
import Com from "../components/assets/scripts1.png"
import Loan from "../components/assets/loan4.webp"
import Business from "../components/assets/business.webp"
import Thanks from "../components/assets/thanks.avif"
import legal from "../components/assets/legal.webp"
interface PageConfig {
    head: string
    titleShort: string;
    titleLong: string;
    image: string[];
    text: string;
    icons: string[];
    overlay: boolean;
}

// Loan config type
interface LoanConfig {
    titleShort: string;
    titleLong: string;
    textF: string;
    textL: string;
    images: string;
}

export const pageConfigs: Record<string, PageConfig> = {
    "/": {
        head: "FINANCE LINK AUSTRALIA",
        titleShort: "Empowering Your",
        titleLong: "Financial Future with Ease",
        image: [HnadHoldingPhone],
        text: " We simplify your financial journey by connecting you with expert-backed solutions. At Finance Link Australia, we provide seamless, transparent, and tailored finance options to help you achieve your goals.",
        icons: ["home-icon1.png", "home-icon2.png"],
        overlay: true
    },
    "/products": {
        head: "FINANCE SOLUTIONS FOR ANY SITUATION",
        titleShort: "Flexible And",
        titleLong: "Affordable Finance For All",
        image: [HnadHoldingPhone],
        text: "Our mission is to make your financial journey as smooth and stress-free as possible. That’s why we’ve designed a straightforward and efficient financing process that grants you access to a vast network of over 50 trusted lenders. Whether you’re looking for a personal loan, auto financing, or a business loan, we make it easy to explore your options, compare rates, and apply seamlessly. With our hassle-free approach, you can secure the right loan quickly, giving you more time to focus on what truly matters.",
        icons: ["product-icon1.png", "product-icon2.png"],
        overlay: true
    },
    "/about": {
        head: "Where Finance Meets Simplicity.",
        titleShort: "Big dreams?",
        titleLong: "We're here to help you achieve them.",
        image: [AboutMain],
        text: "We all have big dreams, but making them happen isn't always easy. At Finance Link, we're more than just loans—we’re people who care. Our team is here to support your goals and create a space where you truly belong.",
        icons: ["product-icon1.png", "product-icon2.png"],
        overlay: false
    },
    "/partners": {
        head: "Collaborate with Finance Link.",
        titleShort: "Your Partnership",
        titleLong: "Our Priority",
        image: [Partners],
        text: "At Finance Link, we're committed to delivering exceptional service by working hand-in-hand with trusted industry professionals. No hidden fees—just honest, straightforward loans for people who need real support. If your business shares our values and can bring added value to our clients, we’d be honored to partner with you.",
        icons: ["product-icon1.png", "product-icon2.png"],
        overlay: false
    },
    "/personal-loans": {
        head: "Affordable Personal Loans—Fast.",
        titleShort: "Getting Financed",
        titleLong: "Has Never Been This Easy",
        image: [PersonalLoans],
        text: "Need fuss-free funding? We’ve got you covered! At Finance Link, we make the loan process simple, fast, and stress-free. Our friendly team is here to help you access affordable solutions tailored to your needs—without the hassle, hidden fees, or delays.",
        icons: ["product-icon1.png", "product-icon2.png"],
        overlay: false
    },
    "/personal-loans/car": {
        head: "Speedy and Low-Cost Car Financing",
        titleShort: "Our love for cars fuels us,",
        titleLong: "let us help you fall in love with yours!",
        image: [CarLoan],
        text: "Turn the key to your dream car with flexible financing made for you. Get a great car loan deal today and see how easy the journey can be!",
        icons: [],
        overlay: false
    },
    "/personal-loans/bike": {
        head: "Affordable and Fast Bike Loans",
        titleShort: "Hit the road your way,",
        titleLong: "with quick and flexible bike financing!",
        image: [BikeLoan],
        text: "Whether it's your first ride or an upgrade, our bike loans come with low rates and fast approvals to get you on two wheels without delay.",
        icons: [],
        overlay: false
    },
    "/personal-loans/caravan": {
        head: "Flexible Caravan Loans for Your Next Adventure",
        titleShort: "Set off on your amazing journey,",
        titleLong: "with affordable caravan financing options!",
        image: [Caravan],
        text: "Planning your next road trip? Our caravan loans offer flexible terms and low rates, so you can start your adventure with confidence.",
        icons: [],
        overlay: false
    },

    "/personal-loans/boat": {
        head: "Sail Away with Affordable Boat Loans",
        titleShort: "Get on the water,",
        titleLong: "with easy boat financing solutions!",
        image: [Boat],
        text: "From fishing boats to yachts, our boat loans offer low-interest rates and fast approvals to get you cruising in no time.",
        icons: [],
        overlay: false
    },

    "/personal-loans/jetski": {
        head: "Jet Ski Financing Made Easy",
        titleShort: "Ride the waves,",
        titleLong: "with quick and affordable jet ski loans!",
        image: [Jet],
        text: "Hit the water with a new jet ski! Our fast loan process and low rates make it easy to get on the waves without the hassle.",
        icons: [],
        overlay: false
    },

    "/personal-loans/wedding": {
        head: "Make Your Dream Wedding a Reality",
        titleShort: "Say 'I Do' to",
        titleLong: "affordable wedding financing options!",
        image: [Wed],
        text: "Create the wedding of your dreams with our personalized wedding loans. Flexible terms and quick approvals to help you celebrate in style.",
        icons: [],
        overlay: false
    },

    "/personal-loans/holiday": {
        head: "Turn Your Dream Holiday Into Reality",
        titleShort: "Escape to paradise,",
        titleLong: "with low-interest holiday financing!",
        image: [Wed],
        text: "Planning a getaway? Our holiday loans offer competitive rates and fast approvals, so you can start enjoying your vacation sooner.",
        icons: [],
        overlay: false
    },

    "/business-loans": {
        head: "Affordable Business Loans—Fast.",
        titleShort: "Fueling Your Business Growth",
        titleLong: "Securing Capital Has Never Been This Easy",
        image: [BusinessLoans],
        text: "Need fuss-free funding? We’ve got you covered! At Finance Link, we make the loan process simple, fast, and stress-free. Our friendly team is here to help you access affordable solutions tailored to your needs—without the hassle, hidden fees, or delays.",
        icons: ["product-icon1.png", "product-icon2.png"],
        overlay: false
    },
    "/business-loans/Truck-finance": {
        head: "Get the Right Truck Financing for Your Business",
        titleShort: "Drive your business forward with",
        titleLong: "affordable truck finance options tailored to your needs!",
        image: [Truck], // Replace with a truck-related image
        text: "Whether you're expanding your fleet or purchasing a single truck, we offer flexible loan options with low rates and fast approvals to get your business on the road.",
        icons: [],
        overlay: false
    },

    "/business-loans/Trailer-finance": {
        head: "Flexible Trailer Financing Solutions",
        titleShort: "Carry your business further with",
        titleLong: "easy trailer finance options!",
        image: [Trailer], // Replace with a trailer-related image
        text: "From flatbeds to enclosed trailers, we offer competitive rates and flexible terms to help you secure the trailer that fits your business needs.",
        icons: [],
        overlay: false
    },

    "/business-loans/Equipment-finance": {
        head: "Equip Your Business for Success",
        titleShort: "Get the tools you need with",
        titleLong: "affordable equipment finance options!",
        image: [Wed], // Replace with an equipment-related image
        text: "Upgrade or purchase essential business equipment with low-interest rates and fast approvals, helping you stay competitive and operational.",
        icons: [],
        overlay: false
    },

    "/business-loans/Commercial-Fitout": {
        head: "Transform Your Space with Commercial Fitout Loans",
        titleShort: "Create a professional environment with",
        titleLong: "flexible commercial fitout financing!",
        image: [Com], // Replace with a commercial fitout-related image
        text: "Whether you're renovating your office, store, or industrial space, we offer tailored finance options to help you create the perfect fitout for your business.",
        icons: [],
        overlay: false
    },

    "/business-loans/Unsecured-loan": {
        head: "Unsecured Business Loans for Growth",
        titleShort: "Get the funds you need without",
        titleLong: "securing your assets with an unsecured loan!",
        image: [Loan], // Replace with an unsecured loan-related image
        text: "Secure the financing you need without collateral. Our unsecured business loans offer fast access to funds with flexible terms to help your business grow.",
        icons: [],
        overlay: false
    },

    "/business-loans/Business-Overdraft": {
        head: "Stay Flexible with a Business Overdraft",
        titleShort: "Keep your cash flow moving with",
        titleLong: "a flexible business overdraft option!",
        image: [Business], // Replace with a business overdraft-related image
        text: "Manage your working capital more effectively with a business overdraft, giving you instant access to additional funds when you need them most.",
        icons: [],
        overlay: false
    },


};

export const loanConfigs: Record<string, LoanConfig> = {
    "/thanks": {
        titleShort: "Finance Link",
        titleLong: "THANK YOU!",
        images: Thanks,
        textF: "Thank you for reaching out to us! We appreciate your message and will respond as soon as possible. If there is anything urgent that requires immediate attention, please don't hesitate to let us know. We look forward to connecting with you soon and discussing how we can work together.",
        textL: ""
    },
    "/legal": {
        titleShort: "Finance Link",
        titleLong: "Legal Information",
        images: legal,
        textF: `𝗔𝘁 𝗙𝗶𝗻𝗮𝗻𝗰𝗲 𝗟𝗶𝗻𝗸, we take your privacy seriously and are committed to protecting your personal data. This Legal section outlines our 𝗣𝗿𝗶𝘃𝗮𝗰𝘆 𝗣𝗼𝗹𝗶𝗰𝘆, 𝗧𝗲𝗿𝗺𝘀 & 𝗖𝗼𝗻𝗱𝗶𝘁𝗶𝗼𝗻𝘀, and important disclaimers related to the use of our services. Please read the information below carefully to understand your rights and our responsibilities. 𝗣𝗿𝗶𝘃𝗮𝗰𝘆 𝗣𝗼𝗹𝗶𝗰𝘆. 𝗧𝗲𝗿𝗺𝘀 & 𝗖𝗼𝗻𝗱𝗶𝘁𝗶𝗼𝗻𝘀. 𝗖𝗿𝗲𝗱𝗶𝘁 𝗚𝘂𝗶𝗱𝗲. Finance Link reserves the right to update or modify terms at any time without prior notice. It is your responsibility to review our terms periodically.`,
        textL: `𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗨𝘀 For legal inquiries, data access requests, or anything related to privacy and compliance, please email us at Enquiries@finacelinkaustralia.com.au. Last Updated: April 2025
  `
    },
    "/personal-loans/car": {
        titleShort: "Drive away with",
        titleLong: "a great car finance deal!",
        textF: "Take advantage of low interest rates and minimal fees designed to make your loan more affordable. Our streamlined application process means you can apply quickly and easily, without the hassle.",
        textL: "Whether it's your first car or an upgrade, we offer flexible loan terms that fit your needs and budget.",
        images: CarLoan,
    },

    "/personal-loans/bike": {
        titleShort: "Ride away with",
        titleLong: "affordable bike financing options!",
        textF: "Take advantage of our low interest rates and flexible terms to get your dream bike. Our simple and fast application process ensures you’re on the road in no time.",
        textL: "With easy approvals and no hidden fees, we offer hassle-free bike financing that fits your budget and lifestyle. Start your ride today with just a few clicks.",
        images: BikeLoan,
    },

    "/personal-loans/caravan": {
        titleShort: "Hit the road with",
        titleLong: "affordable caravan financing!",
        textF: "Enjoy your travels with a caravan loan that offers low rates and flexible terms. Our fast and easy application process gets you on the road sooner.",
        textL: "Whether you’re planning a weekend getaway or a cross-country adventure, we make financing your caravan simple and stress-free.",
        images: Caravan,
    },

    "/personal-loans/boat": {
        titleShort: "Set sail with",
        titleLong: "affordable boat financing options!",
        textF: "Take advantage of low rates and quick approvals for your dream boat. Our simple process means you're cruising in no time.",
        textL: "From speedboats to yachts, our boat loans offer great flexibility and terms, so you can enjoy the water sooner.",
        images: Boat,
    },

    "/personal-loans/jetski": {
        titleShort: "Ride the waves with",
        titleLong: "affordable jet ski financing!",
        textF: "Get on the water quickly with our low-interest jet ski loans. We offer fast approvals and easy applications so you can start your adventure today.",
        textL: "With low rates and flexible terms, we make it easier than ever to own a jet ski. Let’s get you riding the waves in no time!",
        images: Jet,
    },

    "/personal-loans/wedding": {
        titleShort: "Make your dream wedding come true with",
        titleLong: "affordable wedding financing options!",
        textF: "Take the stress out of wedding planning with flexible financing options. Our low-interest rates and easy application process let you focus on your big day.",
        textL: "Whether it's a grand celebration or an intimate gathering, we help bring your wedding dreams to life without breaking the bank.",
        images: Wed,
    },

    "/personal-loans/holiday": {
        titleShort: "Escape to paradise with",
        titleLong: "affordable holiday financing!",
        textF: "Take the trip of a lifetime with our flexible and low-interest holiday loans. Fast approvals let you get started on your dream vacation right away.",
        textL: "From relaxing getaways to adventurous journeys, we help you finance your holiday stress-free with competitive rates and no hidden fees.",
        images: Wed,
    },
    "/business-loans/Truck-finance": {
        titleShort: "Drive your business forward with",
        titleLong: "affordable truck financing options!",
        textF: "Get the right truck financing for your business with low rates and flexible terms. Fast approvals and no hidden fees make it easy to get the truck you need.",
        textL: "Expand your fleet or replace old trucks with our competitive finance options. Get a fast decision and start operating without delays.",
        images: Truck,
    },

    "/business-loans/Trailer-finance": {
        titleShort: "Keep your business moving",
        titleLong: "with affordable trailer financing!",
        textF: "Whether you need a flatbed, box trailer, or specialized trailer, we offer low-interest loans with quick approvals to help your business expand.",
        textL: "Get the trailers you need without the financial hassle. Flexible loan terms designed to suit your business needs.",
        images: Trailer,
    },

    "/business-loans/Equipment-finance": {
        titleShort: "Equip your business with",
        titleLong: "affordable equipment financing!",
        textF: "Upgrade your business tools and machinery with flexible financing. Get fast access to the equipment you need to run and grow your business.",
        textL: "From construction equipment to office machinery, we offer competitive rates on loans to keep your business equipped and efficient.",
        images: Wed,
    },

    "/business-loans/Commercial-Fitout": {
        titleShort: "Transform your workspace with",
        titleLong: "flexible commercial fitout financing!",
        textF: "Create the ideal work environment with a loan for your commercial fitout. Whether you're expanding or renovating, we offer fast and flexible financing options.",
        textL: "From office renovations to complete shop fitouts, we make financing your workspace easy and stress-free.",
        images: Com,
    },

    "/business-loans/Unsecured-loan": {
        titleShort: "Grow your business with",
        titleLong: "an unsecured business loan!",
        textF: "No collateral? No problem! Our unsecured business loans offer fast access to the funds you need without the risk of securing your assets.",
        textL: "Get quick and easy access to capital with no hidden fees and flexible repayment options to help your business grow.",
        images: Loan,
    },

    "/business-loans/Business-Overdraft": {
        titleShort: "Stay flexible with",
        titleLong: "a business overdraft solution!",
        textF: "Keep your business running smoothly with a business overdraft. Access funds instantly and manage cash flow efficiently.",
        textL: "Our business overdraft facility allows you to tap into additional funds whenever you need them, without any complex processes.",
        images: Business,
    },


};