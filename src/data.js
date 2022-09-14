const roomData = [
    { 
        id: "1",
        name: "Single Economy",
        extras: ["DSTV", "AC"],
        information: {
            price: "$100",
            size: "200ft",
            maxCap: "1 People"
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-1.05b90599.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id:"2",
        name: "Single Basic",
        extras: ["DSTV", "AC", "fan"],
        information: {
            price: "$150",
            size: "250ft",
            maxCap: "1 People"
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-2.48c60181.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art pafrty wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id: "3",
        name: "Single Standard",
        extras: ["DSTV", "AC"],
        information: {
            price: "$250",
            size: "400ft",
            maxCap: "1 People"
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-3.92fc5b83.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id: "4",
        name: "Single Deluxe",
        extras: ["DSTV", "AC"],
        information: {
            price: "$300",
            size: "400ft",
            maxCap: "2 People"
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-4.10d2e64a.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    { 
        id: "5",
        name: "Double Economy",
        extras: ["DSTV", "AC"],
        information: {
            price: "$200",
            size: "400ft",
            maxCap: "2 People"
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-5.a7c5e078.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id:"6",
        name: "Double Basic",
        extras: ["DSTV", "AC", "fan"],
        information: {
            price: "$250",
            size: "400ft",
            maxCap: "2 People"
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-6.3697aea3.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art pafrty wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id: "7",
        name: "Double Standard",
        extras: ["DSTV", "AC"],
        information: {
            price: "$300",
            size: "400ft",
            maxCap: "2 People"
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-7.d2c011f0.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id: "8",
        name: "Double Deluxe",
        extras: ["DSTV", "AC"],
        information: {
            price: "$400",
            size: "400ft",
            maxCap: "2 People"
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-8.5b658df9.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    { 
        id: "9",
        name: "Family Economy",
        extras: ["DSTV", "AC"],
        information: {
            price: "$300",
            size: "400ft",
            maxCap: "2 People"
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-9.18aabe9f.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id:"10",
        name: "Family Basic",
        extras: ["DSTV", "AC", "fan"],
        information: {
            price: "$350",
            size: "400ft",
            maxCap: "2 People"
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-10.681615dc.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art pafrty wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id: "11",
        name: "Family Standard",
        extras: ["DSTV", "AC"],
        information: {
            price: "$400",
            size: "400ft",
            maxCap: "2 People"
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-11.1605f19e.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id: "12",
        name: "Family Deluxe",
        extras: ["DSTV", "AC"],
        information: {
            price: "$500",
            size: "400ft",
            maxCap: "2 People"
        },
        img: "https://mukul-breach-resort-project.netlify.app/static/media/room-12.7dee4920.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    },
    {
        id: "13",
        name: "Presidential",
        extras: ["DSTV", "AC"],
        information: {
            price: "$600",
            size: "400ft",
            maxCap: "1 People"
        },
        img: "../images/home-third-room-img.jpeg",
        details: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
    } 
]

export default roomData