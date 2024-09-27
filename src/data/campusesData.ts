import Images from '../assets/images';
import { StaticImageData } from 'next/image';

export interface Campus {
  name: string;
  uni: string;
  pictureName: StaticImageData;
  logo: StaticImageData;
  blackLogo: StaticImageData;
  description: string;
  coords: [number, number];
  website: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  items: {
    id: number;
    name: string;
    designation: string;
    image: StaticImageData;
    socialsLink: string;
  }[];
}

export const campuses: Campus[] = [
    {
      name: 'Startup Exchange at Georgia Tech',
      uni: 'Georgia Tech',
      pictureName: Images.gtParticipating,
      logo: Images.sxgt,
      blackLogo: Images.sxgtBlack,
      description: 'A space for Georgia Tech makers, builders, & creators to exchange their ideas.',
      coords: [33.7756, -84.3963], // Atlanta, GA (Georgia Tech)
      website: 'https://www.startupexchangegt.org/',
      instagram: 'https://www.instagram.com/startupexchangegt/',
      linkedin: 'https://www.linkedin.com/company/gtstartupexchange/',
      items: [
        {
          id: 1,
          name: 'Harish',
          designation: 'CS @ GT',
          image: Images.harish,
          socialsLink: 'https://x.com/TheHarishViswa',
        },
        {
          id: 2,
          name: 'Varoon',
          designation: 'CS @ GT',
          image: Images.varoon,
          socialsLink: 'https://x.com/varoonkodithala',
        },
        {
          id: 3,
          name: 'Adi',
          designation: 'CS @ GT',
          image: Images.adi,
          socialsLink: 'https://www.linkedin.com/in/adityagupta001/',
        },
      ],
    },
    {
      name: 'buildIllinois',
      uni: 'University of Illinois Urbana-Champaign',
      pictureName: Images.uiucParticipating,
      logo: Images.buildIllinois,
      blackLogo: Images.buildIllinoisBlack,
      description: 'The community for artists, founders, and creatives at UIUC.',
      coords: [40.1020, -88.2272], // Urbana-Champaign, IL (UIUC)
      website: 'https://lu.ma/buildillinois',
      instagram: 'https://www.instagram.com/buildillinois/',
      linkedin: 'https://www.linkedin.com/company/buildillinois/',
      items: [
        {
          id: 1,
          name: 'Ishan',
          designation: 'CS @ UIUC',
          image: Images.ishan,
          socialsLink: 'https://x.com/_ishand_',
        },
        {
          id: 2,
          name: 'Aryan',
          designation: 'CS @ UIUC',
          image: Images.aryan,
          socialsLink: 'https://x.com/Aryan_Gandhi101',
        },
        {
          id: 3,
          name: 'Keshav',
          designation: 'CS @ UIUC',
          image: Images.keshav,
          socialsLink: 'https://x.com/krimson_wings',
        },
      ],
    },
    {
      name: 'V1 @ Michigan',
      uni: 'University of Michigan',
      pictureName: Images.umichParticipating,
      logo: Images.v1Michigan,
      blackLogo: Images.v1MichiganBlack,
      description: 'V1 is UMich\'s community for ambitious student builders — engineers, artists, designers, founders, scientists, and more.',
      coords: [42.2780, -83.7382], // Ann Arbor, MI (University of Michigan)
      website: 'https://v1michigan.com/',
      twitter: 'https://x.com/V1Michigan',
      instagram: 'https://www.instagram.com/v1michigan/',
      linkedin: 'https://www.linkedin.com/company/v1-michigan/',
      items: [
        {
          id: 1,
          name: 'Shrey',
          designation: 'CS @ UMich',
          image: Images.shrey,
          socialsLink: 'https://x.com/shrey150',
        },
        {
          id: 2,
          name: 'Dev',
          designation: 'CS @ UMich',
          image: Images.dev,
          socialsLink: 'https://x.com/dev_kunjadia',
        },
        // {
        //   id: 3,
        //   name: 'Keshav',
        //   designation: 'CS @ UIUC',
        //   image: Images.keshav,
        //   socialsLink: 'https://x.com/krimson_wings',
        // },
      ],
    },
    {
      name: 'rev at Northeastern',
      uni: 'Northeastern University',
      pictureName: Images.northeasternParticipating,
      logo: Images.rev,
      blackLogo: Images.revBlack,
      description: 'rev is Northeastern\'s space where students collaborate to work on side projects and take any idea from inception to reality.',
      coords: [42.3398, -71.0892], // Boston, MA (Northeastern University)
      website: 'https://www.rev.school/',
      twitter: 'https://x.com/rev_neu',
      instagram: 'https://www.instagram.com/rev_neu/',
      linkedin: 'https://www.linkedin.com/company/revschool/',
      items: [
        {
          id: 1,
          name: 'Allen',
          designation: 'CS @ Northeastern',
          image: Images.allen,
          socialsLink: 'https://x.com/alnln222',
        },
        {
          id: 2,
          name: 'Sebastian',
          designation: 'CS @ Northeastern',
          image: Images.sebastian,
          socialsLink: 'https://www.linkedin.com/in/sebastianmsepulveda/',
        },
      ],
    },
    {
      name: 'Cornell Armada',
      uni: 'Cornell University',
      pictureName: Images.cornellParticipating,
      logo: Images.cornellArmada,
      blackLogo: Images.cornellArmadaBlack,
      description: '​Steering a collective of Cornell\'s builders to ship',
      website: 'https://x.com/cornellarmada',
      coords: [42.4534, -76.4735], // Ithaca, NY (Cornell University)
      items: [
        {
          id: 1,
          name: 'Ronald',
          designation: 'CS @ Cornell',
          image: Images.cornellRonald,
          socialsLink: 'https://www.linkedin.com/in/ronaldleung1/',
        },
        {
          id: 2,
          name: 'Rahul',
          designation: 'CS @ Cornell',
          image: Images.cornellRahul,
          socialsLink: 'https://www.linkedin.com/in/rahul-ramarao-1a584a285/',
        },
        {
          id: 3,
          name: 'Simon',
          designation: 'CS @ Cornell',
          image: Images.cornellSimon,
          socialsLink: 'https://www.linkedin.com/in/simon-ilincev/',
        },
        {
          id: 4,
          name: 'Rishi',
          designation: 'CS @ Cornell',
          image: Images.cornellRishi,
          socialsLink: 'https://x.com/rishi__gurjar',
        },
      ],
    },
    {
      name: 'Studio at Duke',
      uni: 'Duke University',
      pictureName: Images.dukeParticipating,
      logo: Images.studio,
      blackLogo: Images.studioBlack,
      description: 'A collection of artists, engineers, writers, and everything in between.',
      website: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScOYmHWHfLRPm_xsqv1M9k5L1nbEXY8xTR1F1nvk3wkQAP-jA/closedform',
      coords: [36.0014, -78.9382], // Durham, NC (Duke University)
      items: [
        {
          id: 1,
          name: 'Katie',
          designation: 'CS @ Duke',
          image: Images.katie,
          socialsLink: 'https://www.tiktok.com/@katiexsocials',
        },
        {
          id: 2,
          name: 'Priyanshi',
          designation: 'CS @ Duke',
          image: Images.priyanshi,
          socialsLink: 'https://www.linkedin.com/in/priyanshiahuja/',
        },
      ],
    },
    {
      name: 'Purdue Founders',
      uni: 'Purdue University',
      pictureName: Images.purdueParticipating,
      logo: Images.purdueFounders,
      blackLogo: Images.purdueFoundersBlack,
      description: 'We’re a community of founders navigating the earliest stages of starting a company.',
      website: 'https://www.purduefounders.com/',
      instagram: 'https://www.instagram.com/purduefounders/',
      linkedin: 'https://www.linkedin.com/company/purduefounders/',
      coords: [40.4237, -86.9212], // West Lafayette, IN (Purdue University)
      items: [
        {
          id: 1,
          name: 'Shantanu',
          designation: 'CS @ Purdue',
          image: Images.purdueShantanu,
          socialsLink: 'https://x.com/shnuOS',
        },
        {
          id: 1,
          name: 'Jack',
          designation: 'CS @ Purdue',
          image: Images.purdueJack,
          socialsLink: 'https://x.com/JackBlair87/',
        },
      ],
    },
    {
      name: '021 at MSU',
      uni: 'Michigan State University',
      pictureName: Images.msuParticipating,
      logo: Images.zeroOneLogo,
      blackLogo: Images.zeroOneLogoBlack,
      description: '​​021 @ msu is a weekly co-working session for you to take your passion projects from zero to one alongside other ambitious builders.',
      website: 'https://discord.com/invite/MFQAHmCaXH',
      coords: [42.7018, -84.4822], // East Lansing, MI (Michigan State University)
      items: [
        {
          id: 1,
          name: 'Advait',
          designation: 'CS @ MSU',
          image: Images.advait,
          socialsLink: 'https://x.com/advaitpaliwal',
        },
      ],
    },
    {
      name: 'E-Club at Virginia Tech',
      uni: 'Virginia Tech',
      pictureName: Images.vtParticipating,
      logo: Images.eClub,
      blackLogo: Images.eClubBlack,
      description: 'Right at the center of Virginia Tech\'s startup ecosystem, we bridge gaps between students, industry leaders, and startups that are building spectacular products.',
      website: 'https://www.eclubvt.com/',
      instagram: 'https://www.instagram.com/eclub.vt',
      linkedin: 'https://www.linkedin.com/company/vteclub/',
      coords: [37.2284, -80.4234], // Blacksburg, VA (Virginia Tech)
      items: [
        {
          id: 1,
          name: 'Ebenezer',
          designation: 'CS @ VT',
          image: Images.vtEbenezer,
          socialsLink: 'https://www.linkedin.com/in/ebenezer-zergabachew/',
        },
      ],
    },
    {
      name: 'SCEE @ UCSC',
      uni: 'University of California, Santa Cruz',
      pictureName: Images.ucscParticipating,
      logo: Images.scee,
      blackLogo: Images.sceeBlack,
      description: 'SCEE aims to build a diverse community of student innovators and creative problem solvers.',
      website: 'https://www.scee.ucsc.edu/',
      instagram: 'https://www.instagram.com/scee.ucsc/',
      linkedin: 'https://www.linkedin.com/company/scee-student-creativity-and-entrepreneurial-empowerment/',
      coords: [36.9916, -122.0583], // Santa Cruz, CA (University of California, Santa Cruz)
      items: [
        {
          id: 1,
          name: 'Ishaan Bansal',
          designation: 'CS @ UC Santa Cruz',
          image: Images.ucscIshaan,
          socialsLink: 'https://www.linkedin.com/in/ishaan-bansal/',
        },
      ],
    },
    {
      name: 'Hack Nights @ UC Davis',
      uni: 'University of California, Davis',
      pictureName: Images.comingSoon,
      logo: Images.sxLogo,
      blackLogo: Images.sxLogoBlack,
      description: 'Coming soon.',
      website: '',
      coords: [38.5382, -121.7617], // Davis, CA (University of California, Davis)
      items: [
        // {
        //   id: 1,
        //   name: 'Shrey Gupta',
        //   designation: 'CS @ UC Davis',
        //   image: Images.ucdShrey,
        //   socialsLink: 'https://www.linkedin.com/in/shreyguptaoc/',
        // },
      ],
    },
    {
      name: 'Startup Exchange at Cal',
      uni: 'University of California, Berkeley',
      pictureName: Images.comingSoon,
      logo: Images.sxLogo,
      blackLogo: Images.sxLogoBlack,
      description: 'Coming soon.',
      website: 'https://www.startup.exchange/',
      coords: [37.8719, -122.2585], // Berkeley, CA (University of California, Berkeley)
      items: [
        {
          id: 1,
          name: '',
          designation: '',
          image: Images.comingSoonPoc,
          socialsLink: '',
        },
      ],
    },
    {
      name: 'Startup Exchange at Columbia',
      uni: 'Columbia University',
      pictureName: Images.comingSoon,
      logo: Images.sxLogo,
      blackLogo: Images.sxLogoBlack,
      description: 'Coming soon.',
      website: 'https://www.startup.exchange/',
      coords: [40.8075, -73.9626], // New York, NY (Columbia University)
      items: [
        {
          id: 1,
          name: '',
          designation: '',
          image: Images.comingSoonPoc,
          socialsLink: '',
        },
      ],
    },
    {
      name: 'Startup Exchange at UCF',
      uni: 'University of Central Florida',
      pictureName: Images.comingSoon,
      logo: Images.sxLogo,
      blackLogo: Images.sxLogoBlack,
      description: 'Coming soon.',
      website: 'https://www.startup.exchange/',
      coords: [28.6024, -81.2001], // Orlando, FL (University of Central Florida)
      items: [
        {
          id: 1,
          name: '',
          designation: '',
          image: Images.comingSoonPoc,
          socialsLink: '',
        },
      ],
    },
  ];