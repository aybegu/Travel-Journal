import jelly from './images/jellyfish.jpg'
import jasper from './images/jasper.jpg'
import suspensionBridge from './images/suspension-bridge.jpg'
import banff  from './images/Banff.jpg'
import fuji  from './images/mt-fuji.jpg'
import operaHouse  from './images/opera-house.jpg'
import parliament  from './images/parliament.jpg'


const data = [
    {
        id: 1,
        title: "Ameland",
        location: "HOLLAND",
        googleMapsUrl: "https://goo.gl/maps/DTeWdH1AWaLdzfAg9",
        startDate: "01 Jun, 2018",
        endDate: "15 Jun, 2018",
        description: "Ameland is a municipality and one of the West Frisian Islands off the north coast of the Netherlands. It consists mostly of sand dunes. It is the third major island of the West Frisians. The island has four villages, and one small part-village.",
        imageUrl: "https://source.unsplash.com/bRDKh3ajan8"
    },
    {
        id: 2,
        title: "Vancouver Aquarium",
        location: "CANADA",
        googleMapsUrl:
            "https://www.google.com/maps/place/Vancouver+Aquarium/@49.3004911,-123.1330714,17z/data=!3m1!4b1!4m5!3m4!1s0x5486718d7aca6ca7:0x5f251627980ee358!8m2!3d49.3004876!4d-123.1308774",
        startDate: "12 Jan, 2014",
        endDate: "24 Jan, 2014",
        description:
            "The Vancouver Aquarium is a public aquarium located in Stanley Park in Vancouver, British Columbia, Canada. Aquarium is a centre for marine research, ocean literacy education, climate activism, conservation and marine animal rehabilitation.",
        imageUrl: `${jelly}`,
    },
    {
        id: 3,
        title: "Jasper National Park",
        location: "CANADA",
        googleMapsUrl:
            "https://www.google.com/maps/place/Jasper+National+Park+Of+Canada/@52.873383,-117.9564825,17z/data=!3m1!4b1!4m5!3m4!1s0x538329cb9142871b:0xe1724a6dce9bd192!8m2!3d52.873383!4d-117.9542938",
        startDate: "27 Aug, 2015",
        endDate: "11 Sep, 2015",
        description:
            "Extending over 11,000 square kilometres, it's the largest national park in the Canadian Rockies and part of UNESCO's Canadian Rocky Mountain Parks World Heritage Site.",
        imageUrl: `${jasper}`
    },
    {
        id: 4,
        title: "Capilano Suspension Bridge",
        location: "CANADa",
        googleMapsUrl:
            "https://www.google.com/maps/place/Capilano+Suspension+Bridge+Park/@49.3428644,-123.1171184,17z/data=!3m1!4b1!4m5!3m4!1s0x54866fd200dcde49:0xf350b3ec85130f5e!8m2!3d49.3428609!4d-123.1149244",
        startDate: "22 May, 2016",
        endDate: "8 Jul, 2016",
        description:
            "Capilano Suspension Bridge Park is one of the most popular tourist attractions in Vancouver. The Capilano Suspension bridge is 140 metres long and 70 metres above the river. ",
        imageUrl: `${suspensionBridge}`
    },
    {
        id: 5,
        title: "Vermilion Lakes",
        location: "CANADA",
        googleMapsUrl:
            "https://www.google.com/maps/place/Vermilion+Lakes+Viewpoint/@51.182312,-115.6054652,17z/data=!3m1!4b1!4m5!3m4!1s0x5370ca63cee38e21:0xe1de4add20b407c1!8m2!3d51.1823087!4d-115.6032712",
        startDate: "8 Jun, 2017",
        endDate: "19 Jun, 2017",
        description:
            "A network of lush marshlands and expansive lakes in the Bow Valley, the Vermilion Lakes are a popular spot for visitors and locals seeking easy solace from the lively town of Banff.",
        imageUrl: `${banff}`
    },
    {
        id: 6,
        title: "Parliament Hill",
        location: "CANADA",
        googleMapsUrl:
            "https://www.google.com/maps/place/Parliament+Hill/@45.4235937,-75.700929,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce04ff4fe494ef:0x26bb54f60c29f6e!8m2!3d45.4235937!4d-75.700929",
        startDate: "4 Mar, 2018",
        endDate: "20 Mar, 2018",
        description:
            "Parliament Hill, is an area of Crown land on the southern banks of the Ottawa River in downtown Ottawa, Ontario, Canada. Its Gothic revival suite of buildings, and their architectural elements of national symbolic importance, is the home of the Parliament of Canada.",
        imageUrl: `${parliament}`
    },
    {
        id: 7,
        title: "Sydney Opera House",
        location: "AUSTRALIA",
        googleMapsUrl:
            "https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.213108,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967",
        startDate: "27 May, 2023",
        endDate: "8 Jun, 2023",
        description:
            "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
        imageUrl: `${operaHouse}`
    },
    {
        id: 8,
        title: "YangMinShan National Park",
        location: "TAIWAN",
        googleMapsUrl: "https://goo.gl/maps/f2F9e4okeNeMWqt57",
        startDate: "25 Mar, 2000",
        endDate: "26 Mar, 2000",
        description: "Yangmingshan National Park is one of the nine national parks in Taiwan, located between Taipei and New Taipei City. It is known for its cherry blossoms, hot springs, sulfur deposits, fumaroles, venomous snakes, and hiking trails, including Taiwan's tallest dormant volcano, Seven Star Mountain.",
        imageUrl: "https://source.unsplash.com/i49LRkvtjA0"
    },
    {
        id: 9,
        title: "Neist Point, Isle of Skye",
        location: "SCOTLAND",
        googleMapsUrl: "https://goo.gl/maps/rSborusdufeUdof7A",
        startDate: "10 Oct, 2009",
        endDate: "11 Oct, 2009",
        description: "Skye is one of the top locations in Scotland to visit. It is famous for its scenery and landscapes. The Island of Skye is 50 miles long and the largest of the Inner Hebrides. The capital is Portree.",
        imageUrl: "https://source.unsplash.com/45NHFWL80_A"
    },
    {
        id: 10,
        title: "Mount Fuji",
        location: "JAPAN",
        googleMapsUrl:
            "https://www.google.com/maps/place/Mount+Fuji/@35.3615353,138.7044974,13.74z/data=!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634",
        startDate: "12 Jan, 2019",
        endDate: "24 Jan, 2019",
        description:
            "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: `${fuji}`
    },
];

export default data;