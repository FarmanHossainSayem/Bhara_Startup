// Sample data for developers and their properties
export const developers = [
    {
        id: 1,
        name: "MRC Group",
        logo: "MRC",
        logoImage: "/images/developers/mrc-logo.jpg",
        flatsCount: 15,
        flats: [
            {
                id: 101,
                name: "MRC Residential Complex A-301",
                location: "Kandirpar",
                status: "available",
                price: 18000,
                type: "rent",
                size: "1200 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "3rd Floor",
                facilities: ["Parking", "Generator", "Security", "Lift"],
                description: "Spacious 3-bedroom apartment with modern amenities in the heart of Kandirpar. Perfect for families looking for comfort and convenience.",
                images: [
                    "/images/properties/mrc-complex-1.jpg",
                    "/images/properties/mrc-complex-2.jpg",
                    "/images/properties/mrc-complex-3.jpg"
                ],
                contact: {
                    phone: "+880-1234-567890",
                    whatsapp: "+880-1234-567890",
                    email: "info@mrcgroup.com"
                }
            },
            {
                id: 102,
                name: "MRC Tower B-205",
                location: "Tomsom Bridge",
                status: "available",
                price: 25000,
                type: "rent",
                size: "1500 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "2nd Floor",
                facilities: ["Parking", "Generator", "Security", "Lift", "Gym"],
                description: "Luxurious 4-bedroom apartment with premium facilities near Tomsom Bridge. Ideal for executives and large families.",
                images: [
                    "/images/properties/mrc-tower-1.jpg",
                    "/images/properties/mrc-tower-2.jpg",
                    "/images/properties/mrc-tower-3.jpg"
                ],
                contact: {
                    phone: "+880-1234-567890",
                    whatsapp: "+880-1234-567890",
                    email: "info@mrcgroup.com"
                }
            },
            {
                id: 103,
                name: "MRC Villa C-101",
                location: "Cumilla Sadar",
                status: "sold",
                price: 4500000,
                type: "sale",
                size: "2000 sq ft",
                bedrooms: 5,
                bathrooms: 4,
                floor: "Ground Floor",
                facilities: ["Parking", "Garden", "Security", "Generator"],
                description: "Beautiful villa with garden space in Cumilla Sadar. Perfect for those seeking luxury living with privacy.",
                contact: {
                    phone: "+880-1234-567890",
                    whatsapp: "+880-1234-567890",
                    email: "info@mrcgroup.com"
                }
            }
        ]
    },
    {
        id: 2,
        name: "SEL Development",
        logo: "SEL",
        flatsCount: 12,
        flats: [
            {
                id: 201,
                name: "SEL Heights A-402",
                location: "Kotbari",
                status: "available",
                price: 22000,
                type: "rent",
                size: "1350 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "4th Floor",
                facilities: ["Parking", "Generator", "Security", "Lift", "Rooftop Garden"],
                description: "Modern apartment with rooftop garden access in peaceful Kotbari area. Great for young professionals and small families.",
                contact: {
                    phone: "+880-1234-567891",
                    whatsapp: "+880-1234-567891",
                    email: "contact@seldev.com"
                }
            },
            {
                id: 202,
                name: "SEL Paradise B-301",
                location: "Cumilla Cantonment",
                status: "rented",
                price: 30000,
                type: "rent",
                size: "1600 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "3rd Floor",
                facilities: ["Parking", "Generator", "Security", "Lift", "Swimming Pool"],
                description: "Premium apartment with swimming pool access in the prestigious Cantonment area.",
                contact: {
                    phone: "+880-1234-567891",
                    whatsapp: "+880-1234-567891",
                    email: "contact@seldev.com"
                }
            }
        ]
    },
    {
        id: 3,
        name: "Gold Silver Properties",
        logo: "GSP",
        flatsCount: 20,
        flats: [
            {
                id: 301,
                name: "Gold Silver Tower A-501",
                location: "Kandirpar",
                status: "available",
                price: 16000,
                type: "rent",
                size: "1100 sq ft",
                bedrooms: 2,
                bathrooms: 2,
                floor: "5th Floor",
                facilities: ["Parking", "Generator", "Security", "Lift"],
                description: "Affordable 2-bedroom apartment with city view in prime Kandirpar location. Perfect for young couples and small families.",
                contact: {
                    phone: "+880-1234-567892",
                    whatsapp: "+880-1234-567892",
                    email: "info@goldsilver.com"
                }
            },
            {
                id: 302,
                name: "Silver Court B-203",
                location: "Tomsom Bridge",
                status: "available",
                price: 3200000,
                type: "sale",
                size: "1400 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "2nd Floor",
                facilities: ["Parking", "Generator", "Security", "Lift", "Community Hall"],
                description: "Well-designed 3-bedroom apartment for sale with community facilities near Tomsom Bridge.",
                contact: {
                    phone: "+880-1234-567892",
                    whatsapp: "+880-1234-567892",
                    email: "info@goldsilver.com"
                }
            }
        ]
    },
    {
        id: 4,
        name: "Royal Builders",
        logo: "RB",
        flatsCount: 8,
        flats: [
            {
                id: 401,
                name: "Royal Residency A-101",
                location: "Cumilla Sadar",
                status: "available",
                price: 28000,
                type: "rent",
                size: "1700 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "1st Floor",
                facilities: ["Parking", "Generator", "Security", "Lift", "Playground"],
                description: "Spacious ground floor apartment with playground access, perfect for families with children.",
                contact: {
                    phone: "+880-1234-567893",
                    whatsapp: "+880-1234-567893",
                    email: "info@royalbuilders.com"
                }
            }
        ]
    },
    {
        id: 5,
        name: "Silver Developers Ltd",
        logo: "SDL",
        flatsCount: 10,
        flats: [
            {
                id: 501,
                name: "Silver Dream",
                location: "Shaheed Shamsul Haque Sarak",
                status: "available",
                price: 20000,
                type: "rent",
                size: "1250 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "2nd Floor",
                facilities: ["Parking", "Security", "Lift"],
                description: "Comfortable 3-bedroom apartment with great ventilation and modern facilities.",
                contact: {
                    phone: "+8801712999980",
                    whatsapp: "+8801712999980",
                    email: "farukgoldsilver@yahoo.com"
                }
            },
            {
                id: 502,
                name: "Silver Afia Garden",
                location: "Doctor Para, Badur Tola, Sadar, Cumilla",
                status: "available",
                price: 35000,
                type: "sale",
                size: "A=1405sft, B=1240sft, C=1026sft, D=1000sft",
                bedrooms: 3,
                bathrooms: 3,
                "number of apartments": 32,
                "number of Units": 4,
                lift: 1,
                Facing: "west",
                "total floors": "GF to 8th",
                facilities: ["Parking", "Generator", "Security", "Lift", "Community Hall"],
                "sort summary": "3 bed, 3 baths, Living, Family Living, Dining, Kitchen & 3 verandas",
                contact: {
                    phone: "+880-1234-567894",
                    whatsapp: "+880-1234-567894",
                    email: "contact@dreamhomes.com"
                }
            }
        ]
    },
    {
        id: 6,
        name: "AFSU Developers Ltd.",
        logo: "AFSU",
        flatsCount: 10,
        flats: [
            {
                id: 501,
                name: "AFSU Residency A-202",
                location: "Kotbari, Cumilla",
                status: "available",
                price: 21000,
                type: "rent",
                size: "1250 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "2nd Floor",
                facilities: ["Parking", "Security", "Lift"],
                description: "Modern 3-bedroom apartment in Kotbari, Cumilla with all basic facilities. Ideal for small families.",
                contact: {
                    phone: "+880-1234-567895",
                    whatsapp: "+880-1234-567895",
                    email: "contact@afsudevelopers.com"
                }
            },
            {
                id: 502,
                name: "AFSU Heights B-305",
                location: "Tomsom Bridge, Cumilla",
                status: "available",
                price: 3600000,
                type: "sale",
                size: "1500 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "3rd Floor",
                facilities: ["Parking", "Generator", "Security", "Lift", "Community Hall"],
                description: "Spacious 4-bedroom apartment for sale in Tomsom Bridge area, Cumilla with luxury features and community hall access.",
                contact: {
                    phone: "+880-1234-567895",
                    whatsapp: "+880-1234-567895",
                    email: "contact@afsudevelopers.com"
                }
            }
        ]
    },
    {
        id: 7,
        name: "Fair and Faith Trading Ltd.",
        logo: "FFT",
        flatsCount: 9,
        flats: [
            {
                id: 601,
                name: "Fair Residency A-101",
                location: "Kandirpar, Cumilla",
                status: "available",
                price: 19000,
                type: "rent",
                size: "1150 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "1st Floor",
                facilities: ["Parking", "Security", "Lift"],
                description: "Comfortable 3-bedroom apartment in Kandirpar, Cumilla with all modern amenities.",
                contact: {
                    phone: "+880-1234-567896",
                    whatsapp: "+880-1234-567896",
                    email: "info@fairfaith.com"
                }
            },
            {
                id: 602,
                name: "Faith Tower B-304",
                location: "Cumilla Cantonment",
                status: "rented",
                price: 28000,
                type: "rent",
                size: "1450 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "3rd Floor",
                facilities: ["Parking", "Generator", "Security", "Lift", "Playground"],
                description: "Spacious 4-bedroom apartment in Cantonment area with extra facilities and playground access.",
                contact: {
                    phone: "+880-1234-567896",
                    whatsapp: "+880-1234-567896",
                    email: "info@fairfaith.com"
                }
            },
            {
                id: 603,
                name: "Faith Court C-502",
                location: "Kotbari, Cumilla",
                status: "available",
                price: 3300000,
                type: "sale",
                size: "1550 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "5th Floor",
                facilities: ["Parking", "Security", "Lift", "Community Hall"],
                description: "Luxury 4-bedroom flat for sale in Kotbari, Cumilla. Perfect for buyers looking for modern lifestyle.",
                contact: {
                    phone: "+880-1234-567896",
                    whatsapp: "+880-1234-567896",
                    email: "info@fairfaith.com"
                }
            }
        ]
    },
    {
        id: 8,
        name: "Kazi Architect & Developments LTD",
        logo: "KAD",
        flatsCount: 7,
        flats: [
            {
                id: 701,
                name: "Kazi Residency A-204",
                location: "Racecourse, Cumilla",
                status: "available",
                price: 24000,
                type: "rent",
                size: "1300 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "2nd Floor",
                facilities: ["Parking", "Generator", "Security", "Lift"],
                description: "Modern 3-bedroom apartment at Racecourse with excellent ventilation and spacious living area.",
                contact: {
                    phone: "+880-1234-567897",
                    whatsapp: "+880-1234-567897",
                    email: "contact@kaziarchitect.com"
                }
            },
            {
                id: 702,
                name: "Kazi Heights B-401",
                location: "Tomsom Bridge, Cumilla",
                status: "available",
                price: 27000,
                type: "rent",
                size: "1450 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "4th Floor",
                facilities: ["Parking", "Security", "Lift", "Community Hall"],
                description: "Spacious 4-bedroom apartment near Tomsom Bridge with community hall and modern design.",
                contact: {
                    phone: "+880-1234-567897",
                    whatsapp: "+880-1234-567897",
                    email: "contact@kaziarchitect.com"
                }
            },
            {
                id: 703,
                name: "Kazi Villa C-101",
                location: "Kotbari, Cumilla",
                status: "sold",
                price: 4200000,
                type: "sale",
                size: "2000 sq ft",
                bedrooms: 5,
                bathrooms: 4,
                floor: "Ground Floor",
                facilities: ["Parking", "Garden", "Security"],
                description: "Beautiful villa with private garden in Kotbari. Perfect for buyers seeking luxury and privacy.",
                contact: {
                    phone: "+880-1234-567897",
                    whatsapp: "+880-1234-567897",
                    email: "contact@kaziarchitect.com"
                }
            }
        ]
    },
    {
        id: 9,
        name: "Latif Holdings Pvt. Ltd",
        logo: "LHP",
        flatsCount: 6,
        flats: [
            {
                id: 801,
                name: "Latif Residency A-303",
                location: "Shashongacha, Cumilla",
                status: "available",
                price: 20000,
                type: "rent",
                size: "1200 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "3rd Floor",
                facilities: ["Parking", "Generator", "Security", "Lift"],
                description: "Affordable 3-bedroom apartment in Shashongacha, Cumilla with all essential amenities for families.",
                contact: {
                    phone: "+880-1234-567898",
                    whatsapp: "+880-1234-567898",
                    email: "info@latifholdings.com"
                }
            },
            {
                id: 802,
                name: "Latif Heights B-502",
                location: "Kandirpar, Cumilla",
                status: "available",
                price: 31000,
                type: "rent",
                size: "1550 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "5th Floor",
                facilities: ["Parking", "Generator", "Security", "Lift", "Rooftop Garden"],
                description: "Premium 4-bedroom flat in Kandirpar with rooftop garden access and modern living spaces.",
                contact: {
                    phone: "+880-1234-567898",
                    whatsapp: "+880-1234-567898",
                    email: "info@latifholdings.com"
                }
            },
            {
                id: 803,
                name: "Latif Villa C-101",
                location: "Cumilla Cantonment",
                status: "sale",
                price: 3800000,
                type: "sale",
                size: "1800 sq ft",
                bedrooms: 5,
                bathrooms: 4,
                floor: "Ground Floor",
                facilities: ["Parking", "Garden", "Security", "Generator"],
                description: "Luxury villa in Cumilla Cantonment with private garden and premium lifestyle facilities.",
                contact: {
                    phone: "+880-1234-567898",
                    whatsapp: "+880-1234-567898",
                    email: "info@latifholdings.com"
                }
            }
        ]
    },
    {
        id: 10,
        name: "Golden Builders",
        logo: "GB",
        flatsCount: 8,
        flats: [
            {
                id: 901,
                name: "Golden Residency A-201",
                location: "Kandirpar, Cumilla",
                status: "available",
                price: 23000,
                type: "rent",
                size: "1280 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "2nd Floor",
                facilities: ["Parking", "Security", "Lift", "Generator"],
                description: "Comfortable 3-bedroom flat in central Kandirpar with modern facilities and great connectivity.",
                contact: {
                    phone: "+880-1234-567899",
                    whatsapp: "+880-1234-567899",
                    email: "info@goldenbuilders.com"
                }
            },
            {
                id: 902,
                name: "Golden Tower B-404",
                location: "Racecourse, Cumilla",
                status: "available",
                price: 26000,
                type: "rent",
                size: "1400 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "4th Floor",
                facilities: ["Parking", "Security", "Lift", "Rooftop Garden"],
                description: "Spacious 4-bedroom apartment in Racecourse, Cumilla with rooftop garden access.",
                contact: {
                    phone: "+880-1234-567899",
                    whatsapp: "+880-1234-567899",
                    email: "info@goldenbuilders.com"
                }
            },
            {
                id: 903,
                name: "Golden Villa C-101",
                location: "Kotbari, Cumilla",
                status: "sale",
                price: 4000000,
                type: "sale",
                size: "1900 sq ft",
                bedrooms: 5,
                bathrooms: 4,
                floor: "Ground Floor",
                facilities: ["Parking", "Garden", "Security"],
                description: "Exclusive villa for sale in Kotbari with private garden and premium design, ideal for luxury living.",
                contact: {
                    phone: "+880-1234-567899",
                    whatsapp: "+880-1234-567899",
                    email: "info@goldenbuilders.com"
                }
            }
        ]
    },
    {
        id: 11,
        name: "Sarna Kutir Developers Ltd",
        logo: "SKDL",
        flatsCount: 7,
        flats: [
            {
                id: 1101,
                name: "Sarna Kutir Residency A-202",
                location: "Kandirpar, Cumilla",
                status: "available",
                price: 22000,
                type: "rent",
                size: "1250 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "2nd Floor",
                facilities: ["Parking", "Security", "Lift", "Generator"],
                description: "Well-planned 3-bedroom flat in Kandirpar, Cumilla with spacious rooms and modern amenities.",
                contact: {
                    phone: "+880-1234-567811",
                    whatsapp: "+880-1234-567811",
                    email: "info@sarnakutir.com"
                }
            },
            {
                id: 1102,
                name: "Sarna Heights B-305",
                location: "Shashongacha, Cumilla",
                status: "available",
                price: 27000,
                type: "rent",
                size: "1450 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "3rd Floor",
                facilities: ["Parking", "Security", "Lift", "Rooftop Garden"],
                description: "Modern 4-bedroom apartment in Shashongacha with rooftop garden and premium fittings.",
                contact: {
                    phone: "+880-1234-567811",
                    whatsapp: "+880-1234-567811",
                    email: "info@sarnakutir.com"
                }
            },
            {
                id: 1103,
                name: "Sarna Villa C-101",
                location: "Kotbari, Cumilla",
                status: "sale",
                price: 3900000,
                type: "sale",
                size: "1850 sq ft",
                bedrooms: 5,
                bathrooms: 4,
                floor: "Ground Floor",
                facilities: ["Parking", "Garden", "Security", "Generator"],
                description: "Elegant villa in Kotbari with private garden, designed for families who seek comfort and exclusivity.",
                contact: {
                    phone: "+880-1234-567811",
                    whatsapp: "+880-1234-567811",
                    email: "info@sarnakutir.com"
                }
            }
        ]
    },
    {
        id: 12,
        name: "People's Real Estate LTD",
        logo: "PRE",
        flatsCount: 9,
        flats: [
            {
                id: 1201,
                name: "People's Residency A-102",
                location: "Racecourse, Cumilla",
                status: "available",
                price: 21000,
                type: "rent",
                size: "1200 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "1st Floor",
                facilities: ["Parking", "Security", "Lift"],
                description: "Affordable 3-bedroom flat at Racecourse, Cumilla. Perfect for small families seeking comfort and convenience.",
                contact: {
                    phone: "+880-1234-567812",
                    whatsapp: "+880-1234-567812",
                    email: "contact@peoplesrealestate.com"
                }
            },
            {
                id: 1202,
                name: "People's Heights B-304",
                location: "Tomsom Bridge, Cumilla",
                status: "available",
                price: 26000,
                type: "rent",
                size: "1400 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "3rd Floor",
                facilities: ["Parking", "Security", "Lift", "Generator"],
                description: "Spacious 4-bedroom apartment near Tomsom Bridge with backup generator and modern design.",
                contact: {
                    phone: "+880-1234-567812",
                    whatsapp: "+880-1234-567812",
                    email: "contact@peoplesrealestate.com"
                }
            },
            {
                id: 1203,
                name: "People's Villa C-201",
                location: "Kotbari, Cumilla",
                status: "sale",
                price: 3700000,
                type: "sale",
                size: "1800 sq ft",
                bedrooms: 5,
                bathrooms: 4,
                floor: "Ground Floor",
                facilities: ["Parking", "Garden", "Security", "Community Hall"],
                description: "Premium villa for sale in Kotbari with garden space and community facilities, designed for luxury living.",
                contact: {
                    phone: "+880-1234-567812",
                    whatsapp: "+880-1234-567812",
                    email: "contact@peoplesrealestate.com"
                }
            }
        ]
    },
    {
        id: 13,
        name: "Asra Properties",
        logo: "ASP",
        flatsCount: 8,
        flats: [
            {
                id: 1301,
                name: "Asra Residency A-102",
                location: "Kandirpar, Cumilla",
                status: "available",
                price: 21500,
                type: "rent",
                size: "1240 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "1st Floor",
                facilities: ["Parking", "Lift", "Generator", "Security"],
                description: "Modern 3-bedroom apartment in Kandirpar with a spacious layout and reliable amenities.",
                contact: {
                    phone: "+880-1234-567813",
                    whatsapp: "+880-1234-567813",
                    email: "info@asraproperties.com"
                }
            },
            {
                id: 1302,
                name: "Asra Heights B-305",
                location: "Shashongacha, Cumilla",
                status: "available",
                price: 27500,
                type: "rent",
                size: "1420 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "3rd Floor",
                facilities: ["Parking", "Lift", "Security", "Rooftop Garden"],
                description: "Spacious 4-bedroom flat in Shashongacha with rooftop garden access and community facilities.",
                contact: {
                    phone: "+880-1234-567813",
                    whatsapp: "+880-1234-567813",
                    email: "info@asraproperties.com"
                }
            },
            {
                id: 1303,
                name: "Asra Villa C-201",
                location: "Kotbari, Cumilla",
                status: "sale",
                price: 3950000,
                type: "sale",
                size: "1880 sq ft",
                bedrooms: 5,
                bathrooms: 4,
                floor: "2nd Floor",
                facilities: ["Parking", "Garden", "Generator", "Security"],
                description: "Luxury villa in Kotbari with a private garden and premium architecture, ideal for families.",
                contact: {
                    phone: "+880-1234-567813",
                    whatsapp: "+880-1234-567813",
                    email: "info@asraproperties.com"
                }
            }
        ]
    },
    {
        id: 14,
        name: "New Life Land Properties Ltd",
        logo: "NLLP",
        flatsCount: 8,
        flats: [
            {
                id: 1501,
                name: "New Life Residency A-101",
                location: "Kandirpar, Cumilla",
                status: "available",
                price: 21800,
                type: "rent",
                size: "1230 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "1st Floor",
                facilities: ["Parking", "Security", "Lift", "Generator"],
                description: "Modern 3-bedroom apartment in Kandirpar with open living spaces and reliable amenities.",
                contact: {
                    phone: "+880-1234-567815",
                    whatsapp: "+880-1234-567815",
                    email: "info@newlifeland.com"
                }
            },
            {
                id: 1502,
                name: "New Life Heights B-302",
                location: "Racecourse, Cumilla",
                status: "available",
                price: 28500,
                type: "rent",
                size: "1480 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "3rd Floor",
                facilities: ["Parking", "Security", "Lift", "Rooftop Garden"],
                description: "Spacious 4-bedroom flat in Racecourse with rooftop garden access and community amenities.",
                contact: {
                    phone: "+880-1234-567815",
                    whatsapp: "+880-1234-567815",
                    email: "info@newlifeland.com"
                }
            },
            {
                id: 1503,
                name: "New Life Villa C-201",
                location: "Kotbari, Cumilla",
                status: "sale",
                price: 4050000,
                type: "sale",
                size: "1920 sq ft",
                bedrooms: 5,
                bathrooms: 4,
                floor: "2nd Floor",
                facilities: ["Parking", "Garden", "Security", "Generator"],
                description: "Beautiful villa in Kotbari for sale, offering spacious design and a private garden for peaceful living.",
                contact: {
                    phone: "+880-1234-567815",
                    whatsapp: "+880-1234-567815",
                    email: "info@newlifeland.com"
                }
            }
        ]
    },
    {
        id: 15,
        name: "Building Technology Ideas LTD",
        logo: "BTI",
        flatsCount: 9,
        flats: [
            {
                id: 1601,
                name: "BTI Residency A-202",
                location: "Kandirpar, Cumilla",
                status: "available",
                price: 23500,
                type: "rent",
                size: "1280 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "2nd Floor",
                facilities: ["Parking", "Security", "Lift", "Generator"],
                description: "Modern 3-bedroom flat in Kandirpar with reliable facilities and excellent layout for family living.",
                contact: {
                    phone: "+880-1234-567816",
                    whatsapp: "+880-1234-567816",
                    email: "info@bti.com"
                }
            },
            {
                id: 1602,
                name: "BTI Heights B-405",
                location: "Shashongacha, Cumilla",
                status: "available",
                price: 29500,
                type: "rent",
                size: "1500 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "4th Floor",
                facilities: ["Parking", "Lift", "Security", "Rooftop Garden", "Community Hall"],
                description: "Spacious 4-bedroom apartment in Shashongacha with rooftop garden and community hall facilities.",
                contact: {
                    phone: "+880-1234-567816",
                    whatsapp: "+880-1234-567816",
                    email: "info@bti.com"
                }
            },
            {
                id: 1603,
                name: "BTI Villa C-101",
                location: "Kotbari, Cumilla",
                status: "sale",
                price: 4300000,
                type: "sale",
                size: "2000 sq ft",
                bedrooms: 5,
                bathrooms: 4,
                floor: "Ground Floor",
                facilities: ["Parking", "Garden", "Security", "Generator"],
                description: "Exclusive villa for sale in Kotbari offering premium lifestyle, spacious garden, and high-end finishes.",
                contact: {
                    phone: "+880-1234-567816",
                    whatsapp: "+880-1234-567816",
                    email: "info@bti.com"
                }
            }
        ]
    },
    {
        id: 16,
        name: "Suman Properties Ltd",
        logo: "SPL",
        flatsCount: 7,
        flats: [
            {
                id: 1701,
                name: "SPL Residency A-102",
                location: "Kandirpar, Cumilla",
                status: "available",
                price: 21000,
                type: "rent",
                size: "1180 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "1st Floor",
                facilities: ["Parking", "Security", "Lift", "Generator"],
                description: "Comfortable 3-bedroom apartment in Kandirpar with modern facilities and convenient access to city amenities.",
                contact: {
                    phone: "+880-1234-567817",
                    whatsapp: "+880-1234-567817",
                    email: "info@sumanproperties.com"
                }
            },
            {
                id: 1702,
                name: "SPL Heights B-305",
                location: "Racecourse, Cumilla",
                status: "available",
                price: 27500,
                type: "rent",
                size: "1450 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "3rd Floor",
                facilities: ["Parking", "Lift", "Security", "Community Hall"],
                description: "Spacious 4-bedroom flat in Racecourse offering community hall access and family-friendly design.",
                contact: {
                    phone: "+880-1234-567817",
                    whatsapp: "+880-1234-567817",
                    email: "info@sumanproperties.com"
                }
            },
            {
                id: 1703,
                name: "SPL Villa C-201",
                location: "Kotbari, Cumilla",
                status: "sale",
                price: 3900000,
                type: "sale",
                size: "1850 sq ft",
                bedrooms: 5,
                bathrooms: 4,
                floor: "2nd Floor",
                facilities: ["Parking", "Garden", "Security", "Generator"],
                description: "Elegant villa in Kotbari for sale, featuring spacious interiors and private garden space for luxury living.",
                contact: {
                    phone: "+880-1234-567817",
                    whatsapp: "+880-1234-567817",
                    email: "info@sumanproperties.com"
                }
            }
        ]
    },
    {
        id: 17,
        name: "Big Properties Ltd",
        logo: "BPL",
        flatsCount: 10,
        flats: [
            {
                id: 1801,
                name: "BPL Residency A-103",
                location: "Kandirpar, Cumilla",
                status: "available",
                price: 24000,
                type: "rent",
                size: "1300 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "1st Floor",
                facilities: ["Parking", "Security", "Lift", "Generator"],
                description: "Well-planned 3-bedroom flat in Kandirpar with excellent ventilation and modern amenities.",
                contact: {
                    phone: "+880-1234-567818",
                    whatsapp: "+880-1234-567818",
                    email: "info@bigproperties.com"
                }
            },
            {
                id: 1802,
                name: "BPL Heights B-404",
                location: "Shashongacha, Cumilla",
                status: "available",
                price: 31000,
                type: "rent",
                size: "1550 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "4th Floor",
                facilities: ["Parking", "Security", "Lift", "Community Hall", "Rooftop Garden"],
                description: "Spacious 4-bedroom apartment in Shashongacha with rooftop garden and community hall facilities for residents.",
                contact: {
                    phone: "+880-1234-567818",
                    whatsapp: "+880-1234-567818",
                    email: "info@bigproperties.com"
                }
            },
            {
                id: 1803,
                name: "BPL Villa C-301",
                location: "Kotbari, Cumilla",
                status: "sale",
                price: 4600000,
                type: "sale",
                size: "2100 sq ft",
                bedrooms: 5,
                bathrooms: 4,
                floor: "3rd Floor",
                facilities: ["Parking", "Garden", "Security", "Generator"],
                description: "Luxury villa in Kotbari available for sale, offering spacious living, a private garden, and premium fittings.",
                contact: {
                    phone: "+880-1234-567818",
                    whatsapp: "+880-1234-567818",
                    email: "info@bigproperties.com"
                }
            }
        ]
    },
    {
        id: 18,
        name: "Reliance Development Association Ltd",
        logo: "RDAL",
        flatsCount: 9,
        flats: [
            {
                id: 1901,
                name: "RDAL Residency A-204",
                location: "Kandirpar, Cumilla",
                status: "available",
                price: 22500,
                type: "rent",
                size: "1250 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "2nd Floor",
                facilities: ["Parking", "Security", "Lift", "Generator"],
                description: "Comfortable 3-bedroom flat in Kandirpar with excellent facilities and family-friendly design.",
                contact: {
                    phone: "+880-1234-567819",
                    whatsapp: "+880-1234-567819",
                    email: "info@rdal.com"
                }
            },
            {
                id: 1902,
                name: "RDAL Heights B-406",
                location: "Shashongacha, Cumilla",
                status: "available",
                price: 30500,
                type: "rent",
                size: "1520 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "4th Floor",
                facilities: ["Parking", "Security", "Lift", "Rooftop Garden", "Community Hall"],
                description: "Spacious 4-bedroom apartment with rooftop garden and community hall in Shashongacha, ideal for modern living.",
                contact: {
                    phone: "+880-1234-567819",
                    whatsapp: "+880-1234-567819",
                    email: "info@rdal.com"
                }
            },
            {
                id: 1903,
                name: "RDAL Villa C-101",
                location: "Kotbari, Cumilla",
                status: "sale",
                price: 4200000,
                type: "sale",
                size: "1950 sq ft",
                bedrooms: 5,
                bathrooms: 4,
                floor: "Ground Floor",
                facilities: ["Parking", "Garden", "Security", "Generator"],
                description: "Beautiful villa for sale in Kotbari featuring a private garden, luxury fittings, and a secure environment.",
                contact: {
                    phone: "+880-1234-567819",
                    whatsapp: "+880-1234-567819",
                    email: "info@rdal.com"
                }
            }
        ]
    },
    {
        id: 19,
        name: "Intex Building Ltd",
        logo: "IBL",
        flatsCount: 9,
        flats: [
            {
                id: 2101,
                name: "IBL Residency A-201",
                location: "Kandirpar, Cumilla",
                status: "available",
                price: 23800,
                type: "rent",
                size: "1275 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "2nd Floor",
                facilities: ["Parking", "Security", "Lift", "Generator"],
                description: "Modern 3-bedroom apartment in Kandirpar with spacious rooms and excellent facilities.",
                contact: {
                    phone: "+880-1234-567821",
                    whatsapp: "+880-1234-567821",
                    email: "info@intexbuilding.com"
                }
            },
            {
                id: 2102,
                name: "IBL Heights B-306",
                location: "Shashongacha, Cumilla",
                status: "available",
                price: 31500,
                type: "rent",
                size: "1530 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "3rd Floor",
                facilities: ["Parking", "Security", "Lift", "Rooftop Garden", "Community Hall"],
                description: "Spacious 4-bedroom flat with rooftop garden and community facilities in Shashongacha.",
                contact: {
                    phone: "+880-1234-567821",
                    whatsapp: "+880-1234-567821",
                    email: "info@intexbuilding.com"
                }
            },
            {
                id: 2103,
                name: "IBL Villa C-102",
                location: "Kotbari, Cumilla",
                status: "sale",
                price: 4350000,
                type: "sale",
                size: "1980 sq ft",
                bedrooms: 5,
                bathrooms: 4,
                floor: "Ground Floor",
                facilities: ["Parking", "Garden", "Security", "Generator"],
                description: "Luxury villa in Kotbari for sale featuring premium interiors, a private garden, and secure environment.",
                contact: {
                    phone: "+880-1234-567821",
                    whatsapp: "+880-1234-567821",
                    email: "info@intexbuilding.com"
                }
            }
        ]
    },
    {
        id: 20,
        name: "Golden Holdings",
        logo: "GH",
        flatsCount: 8,
        flats: [
            {
                id: 2001,
                name: "Golden Residency A-105",
                location: "Kandirpar, Cumilla",
                status: "available",
                price: 23000,
                type: "rent",
                size: "1260 sq ft",
                bedrooms: 3,
                bathrooms: 2,
                floor: "1st Floor",
                facilities: ["Parking", "Security", "Lift", "Generator"],
                description: "Elegant 3-bedroom apartment in Kandirpar with modern amenities, ideal for families seeking comfort and convenience.",
                contact: {
                    phone: "+880-1234-567820",
                    whatsapp: "+880-1234-567820",
                    email: "info@goldenholdings.com"
                }
            },
            {
                id: 2002,
                name: "Golden Heights B-307",
                location: "Racecourse, Cumilla",
                status: "available",
                price: 29800,
                type: "rent",
                size: "1490 sq ft",
                bedrooms: 4,
                bathrooms: 3,
                floor: "3rd Floor",
                facilities: ["Parking", "Lift", "Security", "Rooftop Garden"],
                description: "Spacious 4-bedroom apartment in Racecourse with rooftop garden and premium facilities for modern living.",
                contact: {
                    phone: "+880-1234-567820",
                    whatsapp: "+880-1234-567820",
                    email: "info@goldenholdings.com"
                }
            },
            {
                id: 2003,
                name: "Golden Villa C-401",
                location: "Kotbari, Cumilla",
                status: "sale",
                price: 4450000,
                type: "sale",
                size: "2050 sq ft",
                bedrooms: 5,
                bathrooms: 4,
                floor: "Ground Floor",
                facilities: ["Parking", "Garden", "Security", "Generator"],
                description: "Luxury villa in Kotbari available for sale, featuring spacious design, private garden, and premium lifestyle.",
                contact: {
                    phone: "+880-1234-567820",
                    whatsapp: "+880-1234-567820",
                    email: "info@goldenholdings.com"
                }
            }
        ]
    }
];

// Sample data for hotels
export const hotels = [
    {
        id: 1,
        name: "Cumilla Grand Hotel",
        location: "Kandirpar, Cumilla",
        price: 3500,
        image: "🏨",
        description: "Luxury hotel in the heart of Cumilla with modern amenities and excellent service.",
        facilities: ["Free WiFi", "Restaurant", "Room Service", "Parking", "AC"],
        contact: {
            phone: "+880-1234-567800",
            whatsapp: "+880-1234-567800",
            email: "booking@cumillagrand.com"
        },
        mapLink: "https://maps.google.com/?q=Kandirpar,Cumilla"
    },
    {
        id: 2,
        name: "Hotel Paradise Inn",
        location: "Tomsom Bridge, Cumilla",
        price: 2800,
        image: "🏩",
        description: "Comfortable mid-range hotel with excellent location near Tomsom Bridge.",
        facilities: ["Free WiFi", "Restaurant", "Parking", "AC", "24/7 Reception"],
        contact: {
            phone: "+880-1234-567801",
            whatsapp: "+880-1234-567801",
            email: "info@paradiseinn.com"
        },
        mapLink: "https://maps.google.com/?q=Tomsom+Bridge,Cumilla"
    },
    {
        id: 3,
        name: "City Residence Hotel",
        location: "Cumilla Sadar",
        price: 2200,
        image: "🏪",
        description: "Budget-friendly hotel with clean rooms and essential amenities.",
        facilities: ["Free WiFi", "Restaurant", "Parking", "AC"],
        contact: {
            phone: "+880-1234-567802",
            whatsapp: "+880-1234-567802",
            email: "booking@cityresidence.com"
        },
        mapLink: "https://maps.google.com/?q=Cumilla+Sadar"
    },
    {
        id: 4,
        name: "Green Valley Resort",
        location: "Kotbari, Cumilla",
        price: 4200,
        image: "🏞️",
        description: "Beautiful resort on the outskirts with nature views and peaceful environment.",
        facilities: ["Free WiFi", "Restaurant", "Swimming Pool", "Parking", "AC", "Garden"],
        contact: {
            phone: "+880-1234-567803",
            whatsapp: "+880-1234-567803",
            email: "resort@greenvalley.com"
        },
        mapLink: "https://maps.google.com/?q=Kotbari,Cumilla"
    },
    {
        id: 5,
        name: "Executive Suites",
        location: "Cumilla Cantonment",
        price: 5500,
        image: "🏢",
        description: "Premium business hotel with executive facilities and conference rooms.",
        facilities: ["Free WiFi", "Restaurant", "Conference Room", "Gym", "Parking", "AC"],
        contact: {
            phone: "+880-1234-567804",
            whatsapp: "+880-1234-567804",
            email: "executive@suites.com"
        },
        mapLink: "https://maps.google.com/?q=Cumilla+Cantonment"
    }
];

// Sample data for student hostels
export const studentHostels = [
    {
        id: 1,
        name: "Cumilla University Student Hostel",
        location: "Cumilla University Area",
        price: 8000,
        image: "🏠",
        type: "hostel",
        status: "available",
        capacity: 4,
        roomType: "Shared Room",
        gender: "Male",
        description: "Clean and affordable hostel near Cumilla University with all basic amenities for students.",
        facilities: ["Free WiFi", "Study Room", "Common Kitchen", "Laundry", "Security", "Generator"],
        contact: {
            phone: "+880-1234-567900",
            whatsapp: "+880-1234-567900",
            email: "info@cuniverse-hostel.com"
        },
        category: "hostel"
    },
    {
        id: 2,
        name: "Scholar's Residence",
        location: "Kandirpar, Near Cumilla College",
        price: 6500,
        image: "🏡",
        type: "hostel",
        status: "available",
        capacity: 6,
        roomType: "Shared Room",
        gender: "Female",
        description: "Safe and comfortable hostel for female students with 24/7 security and home-like environment.",
        facilities: ["Free WiFi", "Study Room", "Common Kitchen", "Laundry", "24/7 Security", "Garden"],
        contact: {
            phone: "+880-1234-567901",
            whatsapp: "+880-1234-567901",
            email: "contact@scholars-residence.com"
        },
        category: "hostel"
    },
    {
        id: 3,
        name: "Metro Student Lodge",
        location: "Tomsom Bridge Area",
        price: 9500,
        image: "🏘️",
        type: "hostel",
        status: "available",
        capacity: 2,
        roomType: "Twin Sharing",
        gender: "Co-ed",
        description: "Modern hostel with air-conditioned rooms and premium facilities for serious students.",
        facilities: ["Free WiFi", "AC Rooms", "Study Room", "Common Kitchen", "Laundry", "Security", "Gym"],
        contact: {
            phone: "+880-1234-567902",
            whatsapp: "+880-1234-567902",
            email: "booking@metrolodge.com"
        },
        category: "hostel"
    },
    {
        id: 4,
        name: "Green Valley Student Home",
        location: "Kotbari, Cumilla",
        price: 7000,
        image: "🌳",
        type: "hostel",
        status: "occupied",
        capacity: 8,
        roomType: "Shared Room",
        gender: "Male",
        description: "Peaceful hostel surrounded by nature, perfect for students who prefer a quiet study environment.",
        facilities: ["Free WiFi", "Study Room", "Common Kitchen", "Laundry", "Security", "Garden", "Library"],
        contact: {
            phone: "+880-1234-567903",
            whatsapp: "+880-1234-567903",
            email: "info@greenvalley-home.com"
        },
        category: "hostel"
    },
    {
        id: 5,
        name: "Smart Student Hub",
        location: "Cumilla Sadar",
        price: 10000,
        image: "🏢",
        type: "hostel",
        status: "available",
        capacity: 1,
        roomType: "Single Room",
        gender: "Co-ed",
        description: "Premium single rooms with modern amenities and high-speed internet for focused studying.",
        facilities: ["Free WiFi", "Single Rooms", "Study Desk", "AC", "Common Kitchen", "Laundry", "Security"],
        contact: {
            phone: "+880-1234-567904",
            whatsapp: "+880-1234-567904",
            email: "hub@smartstudent.com"
        },
        category: "hostel"
    }
];