// Sample data for developers and their properties
const developers = [
    {
        id: 1,
        name: "MRC Group",
        logo: "MRC",
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
        name: "People’s Real Estate LTD",
        logo: "PRE",
        flatsCount: 9,
        flats: [
            {
                id: 1201,
                name: "People’s Residency A-102",
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
                name: "People’s Heights B-304",
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
                name: "People’s Villa C-201",
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
const hotels = [
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
const studentHostels = [
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

// Global variables
let isUserLoggedIn = false;
let currentUser = null;
let pendingAction = null;
let currentSection = 'home';
let filteredData = [];

// DOM elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const darkModeToggle = document.getElementById('darkModeToggle');
const searchInput = document.getElementById('searchInput');
const typeFilter = document.getElementById('typeFilter');
const priceFilter = document.getElementById('priceFilter');
const locationFilter = document.getElementById('locationFilter');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderDevelopers();
    renderHotels();
    renderStudentHostels();
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateDarkModeIcon(savedTheme === 'dark');
    }
});

function initializeApp() {
    // Set initial section
    showSection('home');
    
    // Initialize filtered data
    filteredData = [...getAllProperties()];
}

function setupEventListeners() {
    // Navigation
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Search and filters
    searchInput.addEventListener('input', handleSearch);
    typeFilter.addEventListener('change', handleFilter);
    priceFilter.addEventListener('change', handleFilter);
    locationFilter.addEventListener('change', handleFilter);
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('href').substring(1);
            showSection(section);
            setActiveNavLink(link);
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Scroll handling for navbar
    window.addEventListener('scroll', handleScroll);
    
    // Modal close on outside click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateDarkModeIcon(newTheme === 'dark');
}

function updateDarkModeIcon(isDark) {
    const icon = darkModeToggle.querySelector('i');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

function handleScroll() {
    if (window.scrollY > 100) {
        navbar.style.background = document.documentElement.getAttribute('data-theme') === 'dark' 
            ? 'rgba(15, 23, 42, 0.98)' 
            : 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = document.documentElement.getAttribute('data-theme') === 'dark' 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
    }
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section, .hero, .search-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show requested section
    const section = document.getElementById(sectionName);
    if (section) {
        section.style.display = 'block';
        currentSection = sectionName;
    }
    
    // Special handling for home section
    if (sectionName === 'home') {
        document.querySelector('.hero').style.display = 'flex';
        document.querySelector('.search-section').style.display = 'block';
    }
    
    // Update navigation
    updateNavigation(sectionName);
}

function updateNavigation(activeSection) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeSection}`) {
            link.classList.add('active');
        }
    });
}

function setActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

function renderDevelopers() {
    const developersGrid = document.getElementById('developersGrid');
    developersGrid.innerHTML = '';
    
    developers.forEach(developer => {
        const developerCard = createDeveloperCard(developer);
        developersGrid.appendChild(developerCard);
    });
}

function createDeveloperCard(developer) {
    const card = document.createElement('div');
    card.className = 'developer-card';
    card.onclick = () => showDeveloperFlats(developer);
    
    card.innerHTML = `
        <div class="developer-logo">${developer.logo}</div>
        <h3 class="developer-name">${developer.name}</h3>
        <p class="developer-flats">${developer.flatsCount} properties available</p>
    `;
    
    return card;
}

function showDeveloperFlats(developer) {
    const modal = document.getElementById('developerModal');
    const modalTitle = document.getElementById('modalDeveloperName');
    const flatsGrid = document.getElementById('flatsGrid');
    
    modalTitle.textContent = developer.name;
    flatsGrid.innerHTML = '';
    
    developer.flats.forEach(flat => {
        const flatCard = createFlatCard(flat);
        flatsGrid.appendChild(flatCard);
    });
    
    modal.style.display = 'block';
}

function createFlatCard(flat) {
    const card = document.createElement('div');
    card.className = 'flat-card';
    card.onclick = () => showFlatDetails(flat);
    
    const statusClass = `status-${flat.status}`;
    const priceText = flat.type === 'rent' 
        ? `৳${flat.price.toLocaleString()}/month` 
        : `৳${flat.price.toLocaleString()}`;
    
    card.innerHTML = `
        <div class="flat-header">
            <div>
                <h4 class="flat-name">${flat.name}</h4>
                <p class="flat-location"><i class="fas fa-map-marker-alt"></i> ${flat.location}</p>
            </div>
            <span class="flat-status ${statusClass}">${flat.status}</span>
        </div>
        <div class="flat-price">${priceText}</div>
        <div class="flat-actions">
            <button class="btn btn-small btn-primary">View Details</button>
            <button class="btn btn-small btn-outline" onclick="event.stopPropagation(); contactOwner('${flat.contact.phone}', 'call')">
                <i class="fas fa-phone"></i> Call
            </button>
        </div>
    `;
    
    return card;
}

function showFlatDetails(flat) {
    const modal = document.getElementById('flatModal');
    const modalTitle = document.getElementById('flatModalTitle');
    const modalContent = document.getElementById('flatModalContent');
    
    modalTitle.textContent = flat.name;
    
    const priceText = flat.type === 'rent' 
        ? `৳${flat.price.toLocaleString()}/month` 
        : `৳${flat.price.toLocaleString()}`;
    
    modalContent.innerHTML = `
        <div class="flat-details">
            <div class="flat-images">
                <div class="flat-image">🏢</div>
                <div class="flat-image">🛏️</div>
                <div class="flat-image">🚿</div>
            </div>
            
            <div class="flat-info">
                <div class="info-section">
                    <h4>Basic Information</h4>
                    <ul class="info-list">
                        <li><span>Location</span><span>${flat.location}</span></li>
                        <li><span>Size</span><span>${flat.size}</span></li>
                        <li><span>Bedrooms</span><span>${flat.bedrooms}</span></li>
                        <li><span>Bathrooms</span><span>${flat.bathrooms}</span></li>
                        <li><span>Floor</span><span>${flat.floor}</span></li>
                        <li><span>Status</span><span class="flat-status status-${flat.status}">${flat.status}</span></li>
                    </ul>
                </div>
                
                <div class="info-section">
                    <h4>Price & Type</h4>
                    <ul class="info-list">
                        <li><span>Price</span><span>${priceText}</span></li>
                        <li><span>Type</span><span>${flat.type === 'rent' ? 'For Rent' : 'For Sale'}</span></li>
                    </ul>
                    
                    <h4>Facilities</h4>
                    <ul class="info-list">
                        ${flat.facilities.map(facility => `<li><span>${facility}</span><span>✓</span></li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="info-section">
                <h4>Description</h4>
                <p>${flat.description}</p>
            </div>
            
            <div class="contact-buttons">
                <button class="btn btn-contact btn-call" onclick="contactOwner('${flat.contact.phone}', 'call')">
                    <i class="fas fa-phone"></i> Call
                </button>
                <button class="btn btn-contact btn-whatsapp" onclick="contactOwner('${flat.contact.whatsapp}', 'whatsapp')">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </button>
                <button class="btn btn-contact btn-email" onclick="contactOwner('${flat.contact.email}', 'email')">
                    <i class="fas fa-envelope"></i> Email
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function renderHotels() {
    const hotelsGrid = document.getElementById('hotelsGrid');
    hotelsGrid.innerHTML = '';
    
    hotels.forEach(hotel => {
        const hotelCard = createHotelCard(hotel);
        hotelsGrid.appendChild(hotelCard);
    });
}

function createHotelCard(hotel) {
    const card = document.createElement('div');
    card.className = 'hotel-card';
    card.onclick = () => showHotelDetails(hotel);
    
    card.innerHTML = `
        <div class="hotel-image">${hotel.image}</div>
        <div class="hotel-content">
            <h3 class="hotel-name">${hotel.name}</h3>
            <p class="hotel-location">
                <i class="fas fa-map-marker-alt"></i> ${hotel.location}
            </p>
            <div class="hotel-price">৳${hotel.price.toLocaleString()}/night</div>
            <div class="hotel-actions">
                <button class="btn btn-small btn-primary">View Details</button>
                <button class="btn btn-small btn-outline" onclick="event.stopPropagation(); contactOwner('${hotel.contact.phone}', 'call')">
                    <i class="fas fa-phone"></i> Book
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function showHotelDetails(hotel) {
    const modal = document.getElementById('hotelModal');
    const modalTitle = document.getElementById('hotelModalTitle');
    const modalContent = document.getElementById('hotelModalContent');
    
    modalTitle.textContent = hotel.name;
    
    modalContent.innerHTML = `
        <div class="flat-details">
            <div class="flat-images">
                <div class="flat-image">${hotel.image}</div>
                <div class="flat-image">🛏️</div>
                <div class="flat-image">🍽️</div>
            </div>
            
            <div class="flat-info">
                <div class="info-section">
                    <h4>Hotel Information</h4>
                    <ul class="info-list">
                        <li><span>Location</span><span>${hotel.location}</span></li>
                        <li><span>Price per night</span><span>৳${hotel.price.toLocaleString()}</span></li>
                    </ul>
                </div>
                
                <div class="info-section">
                    <h4>Facilities</h4>
                    <ul class="info-list">
                        ${hotel.facilities.map(facility => `<li><span>${facility}</span><span>✓</span></li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="info-section">
                <h4>Description</h4>
                <p>${hotel.description}</p>
            </div>
            
            <div class="contact-buttons">
                <button class="btn btn-contact btn-call" onclick="contactOwner('${hotel.contact.phone}', 'call')">
                    <i class="fas fa-phone"></i> Call
                </button>
                <button class="btn btn-contact btn-whatsapp" onclick="contactOwner('${hotel.contact.whatsapp}', 'whatsapp')">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </button>
                <button class="btn btn-contact btn-email" onclick="contactOwner('${hotel.contact.email}', 'email')">
                    <i class="fas fa-envelope"></i> Email
                </button>
                <button class="btn btn-contact btn-secondary" onclick="window.open('${hotel.mapLink}', '_blank')">
                    <i class="fas fa-map"></i> View on Map
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function contactOwner(contact, type) {
    switch(type) {
        case 'call':
            window.open(`tel:${contact}`);
            break;
        case 'whatsapp':
            window.open(`https://wa.me/${contact.replace(/[^0-9]/g, '')}`);
            break;
        case 'email':
            window.open(`mailto:${contact}`);
            break;
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function getAllProperties() {
    const allFlats = developers.flatMap(dev => 
        dev.flats.map(flat => ({...flat, developerName: dev.name, category: 'real-estate'}))
    );
    const allHotels = hotels.map(hotel => ({...hotel, category: 'hotel'}));
    const allHostels = studentHostels.map(hostel => ({...hostel, category: 'hostel'}));
    return [...allFlats, ...allHotels, ...allHostels];
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    applyFilters();
}

function handleFilter() {
    applyFilters();
}

function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const typeValue = typeFilter.value;
    const priceValue = priceFilter.value;
    const locationValue = locationFilter.value;
    
    let filtered = getAllProperties();
    
    // Search filter
    if (searchTerm) {
        filtered = filtered.filter(item => 
            item.name?.toLowerCase().includes(searchTerm) ||
            item.location?.toLowerCase().includes(searchTerm) ||
            item.developerName?.toLowerCase().includes(searchTerm)
        );
    }
    
    // Type filter
    if (typeValue !== 'all') {
        if (typeValue === 'hotel') {
            filtered = filtered.filter(item => item.category === 'hotel');
        } else if (typeValue === 'hostel') {
            filtered = filtered.filter(item => item.category === 'hostel');
        } else {
            filtered = filtered.filter(item => item.type === typeValue);
        }
    }
    
    // Price filter
    if (priceValue !== 'all') {
        const [min, max] = priceValue.includes('+') 
            ? [parseInt(priceValue.replace('+', '')), Infinity]
            : priceValue.split('-').map(p => parseInt(p));
        
        filtered = filtered.filter(item => {
            const price = item.price || 0;
            return price >= min && (max === Infinity || price <= max);
        });
    }
    
    // Location filter
    if (locationValue !== 'all') {
        filtered = filtered.filter(item => 
            item.location?.toLowerCase().includes(locationValue.toLowerCase())
        );
    }
    
    filteredData = filtered;
    displaySearchResults();
}

function displaySearchResults() {
    // This function would show filtered results in the search section
    // For now, we'll update the existing grids based on filters
    
    if (currentSection === 'real-estate') {
        updateDevelopersDisplay();
    } else if (currentSection === 'hotels') {
        updateHotelsDisplay();
    } else if (currentSection === 'student-hostels') {
        updateHostelsDisplay();
    }
}

function updateDevelopersDisplay() {
    const relevantFlats = filteredData.filter(item => item.category === 'real-estate');
    
    // Group by developer
    const groupedByDeveloper = {};
    relevantFlats.forEach(flat => {
        if (!groupedByDeveloper[flat.developerName]) {
            groupedByDeveloper[flat.developerName] = [];
        }
        groupedByDeveloper[flat.developerName].push(flat);
    });
    
    // Update developers grid to show only relevant developers
    const developersGrid = document.getElementById('developersGrid');
    developersGrid.innerHTML = '';
    
    developers.forEach(developer => {
        if (groupedByDeveloper[developer.name]) {
            const updatedDeveloper = {
                ...developer,
                flats: groupedByDeveloper[developer.name],
                flatsCount: groupedByDeveloper[developer.name].length
            };
            const developerCard = createDeveloperCard(updatedDeveloper);
            developersGrid.appendChild(developerCard);
        }
    });
}

function updateHotelsDisplay() {
    const relevantHotels = filteredData.filter(item => item.category === 'hotel');
    
    const hotelsGrid = document.getElementById('hotelsGrid');
    hotelsGrid.innerHTML = '';
    
    relevantHotels.forEach(hotel => {
        const hotelCard = createHotelCard(hotel);
        hotelsGrid.appendChild(hotelCard);
    });
}

// Utility functions
function formatPrice(price, type) {
    const formatted = price.toLocaleString();
    return type === 'rent' ? `৳${formatted}/month` : `৳${formatted}`;
}

function getStatusBadge(status) {
    const statusClasses = {
        available: 'status-available',
        rented: 'status-rented',
        sold: 'status-sold'
    };
    
    return `<span class="flat-status ${statusClasses[status]}">${status}</span>`;
}

// Student Hostels Functions
function renderStudentHostels() {
    const hostelsGrid = document.getElementById('hostelsGrid');
    hostelsGrid.innerHTML = '';
    
    studentHostels.forEach(hostel => {
        const hostelCard = createHostelCard(hostel);
        hostelsGrid.appendChild(hostelCard);
    });
}

function createHostelCard(hostel) {
    const card = document.createElement('div');
    card.className = 'hostel-card';
    card.onclick = () => showHostelDetails(hostel);
    
    const statusClass = hostel.status === 'available' ? 'status-available-hostel' : 'status-occupied';
    
    card.innerHTML = `
        <div class="hostel-image">${hostel.image}</div>
        <div class="hostel-content">
            <h3 class="hostel-name">${hostel.name}</h3>
            <p class="hostel-location">
                <i class="fas fa-map-marker-alt"></i> ${hostel.location}
            </p>
            <div class="hostel-price">৳${hostel.price.toLocaleString()}/month</div>
            <p class="text-secondary mb-1">
                <i class="fas fa-users"></i> ${hostel.capacity} ${hostel.capacity === 1 ? 'person' : 'people'} • 
                <i class="fas fa-bed"></i> ${hostel.roomType}
            </p>
            <span class="flat-status ${statusClass}">${hostel.status}</span>
            <div class="hostel-actions mt-2">
                <button class="btn btn-small btn-primary">View Details</button>
                <button class="btn btn-small btn-outline" onclick="event.stopPropagation(); initiateContact('${hostel.contact.phone}', 'call')">
                    <i class="fas fa-phone"></i> Call
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function showHostelDetails(hostel) {
    const modal = document.getElementById('hostelModal');
    const modalTitle = document.getElementById('hostelModalTitle');
    const modalContent = document.getElementById('hostelModalContent');
    
    modalTitle.textContent = hostel.name;
    
    const statusClass = hostel.status === 'available' ? 'status-available-hostel' : 'status-occupied';
    
    modalContent.innerHTML = `
        <div class="flat-details">
            <div class="flat-images">
                <div class="flat-image">${hostel.image}</div>
                <div class="flat-image">🛏️</div>
                <div class="flat-image">📚</div>
            </div>
            
            <div class="flat-info">
                <div class="info-section">
                    <h4>Hostel Information</h4>
                    <ul class="info-list">
                        <li><span>Location</span><span>${hostel.location}</span></li>
                        <li><span>Price per month</span><span>৳${hostel.price.toLocaleString()}</span></li>
                        <li><span>Capacity</span><span>${hostel.capacity} ${hostel.capacity === 1 ? 'person' : 'people'}</span></li>
                        <li><span>Room Type</span><span>${hostel.roomType}</span></li>
                        <li><span>Gender</span><span>${hostel.gender}</span></li>
                        <li><span>Status</span><span class="flat-status ${statusClass}">${hostel.status}</span></li>
                    </ul>
                </div>
                
                <div class="info-section">
                    <h4>Facilities</h4>
                    <ul class="info-list">
                        ${hostel.facilities.map(facility => `<li><span>${facility}</span><span>✓</span></li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="info-section">
                <h4>Description</h4>
                <p>${hostel.description}</p>
            </div>
            
            <div class="contact-buttons">
                <button class="btn btn-contact btn-call" onclick="initiateContact('${hostel.contact.phone}', 'call')">
                    <i class="fas fa-phone"></i> Call
                </button>
                <button class="btn btn-contact btn-schedule" onclick="initiateSchedule('${hostel.name}', 'hostel')">
                    <i class="fas fa-calendar"></i> Schedule Visit
                </button>
                <button class="btn btn-contact btn-whatsapp" onclick="contactOwner('${hostel.contact.whatsapp}', 'whatsapp')">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </button>
                <button class="btn btn-contact btn-email" onclick="contactOwner('${hostel.contact.email}', 'email')">
                    <i class="fas fa-envelope"></i> Email
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function updateHostelsDisplay() {
    const relevantHostels = filteredData.filter(item => item.category === 'hostel');
    
    const hostelsGrid = document.getElementById('hostelsGrid');
    hostelsGrid.innerHTML = '';
    
    relevantHostels.forEach(hostel => {
        const hostelCard = createHostelCard(hostel);
        hostelsGrid.appendChild(hostelCard);
    });
}

// Authentication Functions
function initiateContact(contact, type) {
    if (type === 'call' || !isUserLoggedIn) {
        if (type === 'call') {
            contactOwner(contact, type);
        } else {
            pendingAction = { action: 'contact', contact, type };
            showAuthModal();
        }
    } else {
        contactOwner(contact, type);
    }
}

function initiateSchedule(propertyName, propertyType) {
    if (!isUserLoggedIn) {
        pendingAction = { action: 'schedule', propertyName, propertyType };
        showAuthModal();
    } else {
        showScheduleModal(propertyName, propertyType);
    }
}

function showAuthModal() {
    const modal = document.getElementById('authModal');
    modal.style.display = 'block';
}

function switchAuthTab(tab) {
    // Remove active class from all tabs and forms
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    
    // Add active class to selected tab and form
    event.target.classList.add('active');
    document.getElementById(tab + 'Form').classList.add('active');
    
    // Update modal title
    const title = tab === 'signin' ? 'Sign In to Continue' : 'Create Your Account';
    document.getElementById('authModalTitle').textContent = title;
}

function toggleAuthMethod(method) {
    const currentForm = document.querySelector('.auth-form.active');
    
    // Remove active class from all auth options
    currentForm.querySelectorAll('.auth-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Remove active class from all method forms
    currentForm.querySelectorAll('.auth-method-form').forEach(form => {
        form.classList.remove('active');
    });
    
    // Add active class to selected option
    event.target.classList.add('active');
    
    // Show corresponding form
    const activeTab = document.querySelector('.auth-tab.active').textContent.toLowerCase().replace(' ', '');
    const formId = method + activeTab.charAt(0).toUpperCase() + activeTab.slice(1) + 'Form';
    document.getElementById(formId).classList.add('active');
}

function authenticateWith(provider) {
    const button = event.target;
    button.classList.add('loading');
    button.disabled = true;
    
    setTimeout(() => {
        if (provider === 'google') {
            // Simulate Google authentication
            currentUser = {
                name: "John Doe",
                email: "john.doe@gmail.com",
                provider: "google"
            };
            isUserLoggedIn = true;
            showSuccessMessage("Successfully signed in with Google!");
            handleSuccessfulAuth();
        }
        
        button.classList.remove('loading');
        button.disabled = false;
    }, 2000);
}

function sendOTP(formType) {
    const phoneInput = document.getElementById(formType + 'Phone');
    const button = event.target;
    
    if (!phoneInput.value) {
        showErrorMessage("Please enter your phone number");
        return;
    }
    
    button.classList.add('loading');
    button.disabled = true;
    
    setTimeout(() => {
        // Show OTP form
        document.getElementById('otp' + formType.charAt(0).toUpperCase() + formType.slice(1) + 'Form').classList.remove('hidden');
        showSuccessMessage("OTP sent to your phone number!");
        
        button.classList.remove('loading');
        button.disabled = false;
    }, 2000);
}

function verifyOTP(formType) {
    const otpInput = document.getElementById(formType + 'OTP');
    const button = event.target;
    
    if (!otpInput.value || otpInput.value.length !== 6) {
        showErrorMessage("Please enter a valid 6-digit OTP");
        return;
    }
    
    button.classList.add('loading');
    button.disabled = true;
    
    setTimeout(() => {
        // Simulate OTP verification
        const phoneInput = document.getElementById(formType + 'Phone');
        currentUser = {
            name: formType === 'signup' ? document.getElementById(formType + 'NamePhone').value : "User",
            phone: phoneInput.value,
            provider: "phone"
        };
        isUserLoggedIn = true;
        showSuccessMessage("Successfully verified!");
        handleSuccessfulAuth();
        
        button.classList.remove('loading');
        button.disabled = false;
    }, 2000);
}

function handleSuccessfulAuth() {
    setTimeout(() => {
        closeModal('authModal');
        
        // Execute pending action if any
        if (pendingAction) {
            if (pendingAction.action === 'contact') {
                contactOwner(pendingAction.contact, pendingAction.type);
            } else if (pendingAction.action === 'schedule') {
                showScheduleModal(pendingAction.propertyName, pendingAction.propertyType);
            }
            pendingAction = null;
        }
    }, 1500);
}

// Schedule Visit Functions
function showScheduleModal(propertyName, propertyType) {
    const modal = document.getElementById('scheduleModal');
    const propertyNameElement = document.getElementById('schedulePropertyName');
    
    propertyNameElement.textContent = propertyName;
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('visitDate').min = today;
    
    modal.style.display = 'block';
}

// Enhanced Flat Details with Schedule Option
function showEnhancedFlatDetails(flat) {
    const modal = document.getElementById('flatModal');
    const modalTitle = document.getElementById('flatModalTitle');
    const modalContent = document.getElementById('flatModalContent');
    
    modalTitle.textContent = flat.name;
    
    const priceText = flat.type === 'rent' 
        ? `৳${flat.price.toLocaleString()}/month` 
        : `৳${flat.price.toLocaleString()}`;
    
    modalContent.innerHTML = `
        <div class="flat-details">
            <div class="flat-images">
                <div class="flat-image">🏢</div>
                <div class="flat-image">🛏️</div>
                <div class="flat-image">🚿</div>
            </div>
            
            <div class="flat-info">
                <div class="info-section">
                    <h4>Basic Information</h4>
                    <ul class="info-list">
                        <li><span>Location</span><span>${flat.location}</span></li>
                        <li><span>Size</span><span>${flat.size}</span></li>
                        <li><span>Bedrooms</span><span>${flat.bedrooms}</span></li>
                        <li><span>Bathrooms</span><span>${flat.bathrooms}</span></li>
                        <li><span>Floor</span><span>${flat.floor}</span></li>
                        <li><span>Status</span><span class="flat-status status-${flat.status}">${flat.status}</span></li>
                    </ul>
                </div>
                
                <div class="info-section">
                    <h4>Price & Type</h4>
                    <ul class="info-list">
                        <li><span>Price</span><span>${priceText}</span></li>
                        <li><span>Type</span><span>${flat.type === 'rent' ? 'For Rent' : 'For Sale'}</span></li>
                    </ul>
                    
                    <h4>Facilities</h4>
                    <ul class="info-list">
                        ${flat.facilities.map(facility => `<li><span>${facility}</span><span>✓</span></li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="info-section">
                <h4>Description</h4>
                <p>${flat.description}</p>
            </div>
            
            <div class="contact-buttons">
                <button class="btn btn-contact btn-call" onclick="initiateContact('${flat.contact.phone}', 'call')">
                    <i class="fas fa-phone"></i> Call
                </button>
                <button class="btn btn-contact btn-schedule" onclick="initiateSchedule('${flat.name}', 'flat')">
                    <i class="fas fa-calendar"></i> Schedule Visit
                </button>
                <button class="btn btn-contact btn-virtual" onclick="initiateSchedule('${flat.name}', 'virtual')">
                    <i class="fas fa-video"></i> Virtual Tour
                </button>
                <button class="btn btn-contact btn-whatsapp" onclick="contactOwner('${flat.contact.whatsapp}', 'whatsapp')">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </button>
                <button class="btn btn-contact btn-email" onclick="contactOwner('${flat.contact.email}', 'email')">
                    <i class="fas fa-envelope"></i> Email
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Enhanced Hotel Details with Schedule Option
function showEnhancedHotelDetails(hotel) {
    const modal = document.getElementById('hotelModal');
    const modalTitle = document.getElementById('hotelModalTitle');
    const modalContent = document.getElementById('hotelModalContent');
    
    modalTitle.textContent = hotel.name;
    
    modalContent.innerHTML = `
        <div class="flat-details">
            <div class="flat-images">
                <div class="flat-image">${hotel.image}</div>
                <div class="flat-image">🛏️</div>
                <div class="flat-image">🍽️</div>
            </div>
            
            <div class="flat-info">
                <div class="info-section">
                    <h4>Hotel Information</h4>
                    <ul class="info-list">
                        <li><span>Location</span><span>${hotel.location}</span></li>
                        <li><span>Price per night</span><span>৳${hotel.price.toLocaleString()}</span></li>
                    </ul>
                </div>
                
                <div class="info-section">
                    <h4>Facilities</h4>
                    <ul class="info-list">
                        ${hotel.facilities.map(facility => `<li><span>${facility}</span><span>✓</span></li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="info-section">
                <h4>Description</h4>
                <p>${hotel.description}</p>
            </div>
            
            <div class="contact-buttons">
                <button class="btn btn-contact btn-call" onclick="initiateContact('${hotel.contact.phone}', 'call')">
                    <i class="fas fa-phone"></i> Call
                </button>
                <button class="btn btn-contact btn-schedule" onclick="initiateSchedule('${hotel.name}', 'hotel')">
                    <i class="fas fa-calendar"></i> Book Room
                </button>
                <button class="btn btn-contact btn-whatsapp" onclick="contactOwner('${hotel.contact.whatsapp}', 'whatsapp')">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </button>
                <button class="btn btn-contact btn-email" onclick="contactOwner('${hotel.contact.email}', 'email')">
                    <i class="fas fa-envelope"></i> Email
                </button>
                <button class="btn btn-contact btn-secondary" onclick="window.open('${hotel.mapLink}', '_blank')">
                    <i class="fas fa-map"></i> View on Map
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Form Submission Handlers
document.addEventListener('DOMContentLoaded', function() {
    // Email signin form
    document.getElementById('emailSigninForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('signinEmail').value;
        const password = document.getElementById('signinPassword').value;
        
        if (email && password) {
            const button = e.target.querySelector('button[type="submit"]');
            button.classList.add('loading');
            button.disabled = true;
            
            setTimeout(() => {
                currentUser = { name: "User", email, provider: "email" };
                isUserLoggedIn = true;
                showSuccessMessage("Successfully signed in!");
                handleSuccessfulAuth();
                
                button.classList.remove('loading');
                button.disabled = false;
            }, 2000);
        }
    });
    
    // Email signup form
    document.getElementById('emailSignupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        
        if (name && email && password) {
            const button = e.target.querySelector('button[type="submit"]');
            button.classList.add('loading');
            button.disabled = true;
            
            setTimeout(() => {
                currentUser = { name, email, provider: "email" };
                isUserLoggedIn = true;
                showSuccessMessage("Account created successfully!");
                handleSuccessfulAuth();
                
                button.classList.remove('loading');
                button.disabled = false;
            }, 2000);
        }
    });
    
    // Schedule form
    document.getElementById('scheduleForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const visitType = document.getElementById('visitType').value;
        const visitDate = document.getElementById('visitDate').value;
        const visitTime = document.getElementById('visitTime').value;
        const notes = document.getElementById('visitNotes').value;
        
        const button = e.target.querySelector('button[type="submit"]');
        button.classList.add('loading');
        button.disabled = true;
        
        setTimeout(() => {
            showSuccessMessage(`${visitType === 'in-person' ? 'In-person visit' : 'Virtual tour'} scheduled for ${visitDate} at ${visitTime}`);
            closeModal('scheduleModal');
            
            button.classList.remove('loading');
            button.disabled = false;
            
            // Reset form
            e.target.reset();
        }, 2000);
    });
});

// Utility Functions
function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message success';
    messageDiv.textContent = message;
    
    // Insert at top of modal body if modal is open
    const openModal = document.querySelector('.modal[style*="block"] .modal-body');
    if (openModal) {
        openModal.insertBefore(messageDiv, openModal.firstChild);
        setTimeout(() => messageDiv.remove(), 5000);
    }
}

function showErrorMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message error';
    messageDiv.textContent = message;
    
    // Insert at top of modal body if modal is open
    const openModal = document.querySelector('.modal[style*="block"] .modal-body');
    if (openModal) {
        openModal.insertBefore(messageDiv, openModal.firstChild);
        setTimeout(() => messageDiv.remove(), 5000);
    }
}

// Override existing functions to use enhanced versions
function showFlatDetails(flat) {
    showEnhancedFlatDetails(flat);
}

function showHotelDetails(hotel) {
    showEnhancedHotelDetails(hotel);
}

// Export functions for global access
window.showSection = showSection;
window.showDeveloperFlats = showDeveloperFlats;
window.showFlatDetails = showFlatDetails;
window.showHotelDetails = showHotelDetails;
window.showHostelDetails = showHostelDetails;
window.contactOwner = contactOwner;
window.closeModal = closeModal;
window.switchAuthTab = switchAuthTab;
window.toggleAuthMethod = toggleAuthMethod;
window.authenticateWith = authenticateWith;
window.sendOTP = sendOTP;
window.verifyOTP = verifyOTP;
window.initiateContact = initiateContact;
window.initiateSchedule = initiateSchedule;
