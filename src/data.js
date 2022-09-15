const roomData = [
    { 
        id: "1",
        name: "Single Economy",
        extras: ['Plush pillows and breathable bed linens',
            'Soft, oversized bath towels',
            'Full-sized, pH-balanced toiletries',
            'Complimentary refreshments',
            'Adequate safety/security',
            'Internet',
            'Comfortable beds'],
        information: {
            price: "$100",
            size: "200 SQFT",
            maxCap: "1 Person",
            pets: 'Not Allowed',
            breakfast: 'Free Breakfast Included'
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-1.05b90599.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id:"2",
        name: "Single Basic",
        extras: ['Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'],
        information: {
            price: "$150",
            size: "250 SQFT",
            maxCap: "1 Person",
            pets: 'Not Allowed'
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-2.48c60181.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art pafrty wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id: "3",
        name: "Single Standard",
        extras: ['Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'],
        information: {
            price: "$250",
            size: "300 SQFT",
            maxCap: "1 Person",
            pets: 'Allowed'
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-3.92fc5b83.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id: "4",
        name: "Single Deluxe",
        extras: ['Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'],
        information: {
            price: "$300",
            size: "350 SQFT",
            maxCap: "1 Person",
            pets: 'Allowed',
            breakfast: 'Free Breakfast Included'
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-4.10d2e64a.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    { 
        id: "5",
        name: "Double Economy",
        extras: ['Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'],
        information: {
            price: "$200",
            size: "400 SQFT",
            maxCap: "2 People",
            pets: 'Not Allowed'
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-5.a7c5e078.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id:"6",
        name: "Double Basic",
        extras: ['Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'],
        information: {
            price: "$250",
            size: "450 SQFT",
            maxCap: "2 People",
            pets: 'Not Allowed'
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-6.3697aea3.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art pafrty wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id: "7",
        name: "Double Standard",
        extras: ['Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'],
        information: {
            price: "$300",
            size: "500 SQFT",
            maxCap: "2 People",
            pets: 'Allowed'
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-7.d2c011f0.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id: "8",
        name: "Double Deluxe",
        extras: ['Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'],
        information: {
            price: "$400",
            size: "600 SQFT",
            maxCap: "2 People",
            pets: 'Allowed',
            breakfast: 'Free Breakfast Included'
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-8.5b658df9.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    { 
        id: "9",
        name: "Family Economy",
        extras: ['Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'],
        information: {
            price: "$300",
            size: "700 SQFT",
            maxCap: "3 People",
            pets: 'Not Allowed'
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-9.18aabe9f.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id:"10",
        name: "Family Basic",
        extras: ['Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'],
        information: {
            price: "$350",
            size: "800 SQFT",
            maxCap: "4 People",
            pets: 'Not Allowed'
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-10.681615dc.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art pafrty wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id: "11",
        name: "Family Standard",
        extras: ['Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'],
        information: {
            price: "$400",
            size: "850 SQFT",
            maxCap: "5 People",
            pets: 'Allowed'
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-11.1605f19e.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id: "12",
        name: "Family Deluxe",
        extras: ['Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'],
        information: {
            price: "$500",
            size: "900 SQFT",
            maxCap: "6 People",
            pets: 'Allowed',
            breakfast: 'Free Breakfast Included'
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-12.7dee4920.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id: "13",
        name: "Presidential",
        extras: ['Plush pillows and breathable bed linens',
        'Soft, oversized bath towels',
        'Full-sized, pH-balanced toiletries',
        'Complimentary refreshments',
        'Adequate safety/security',
        'Internet',
        'Comfortable beds'],
        information: {
            price: "$600",
            size: "1000 SQFT",
            maxCap: "10 People",
            pets: 'Allowed',
            breakfast: 'Free Breakfast Included'
        },
        img: "../images/home-third-room-img.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    } 
]

export default roomData