/**
 *  This file simulate a fake API
*/

// import images
import BitconImg from '../assets/images/bitcon.png';
import EthereumImg from '../assets/images/ethereum.png';
import LitecoinImg from '../assets/images/litecoin.png';

export const navData = [
  {
    name: 'Products',
    href: '#',
  },
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];


/* eslint-disable */

export const currency = [
  {
    image: BitconImg,
    name: 'Bitcoin',
    abbr: 'BTC',
    description:
      'Digital currency in which a record of transactions is maintained.',
  },
  {
    image: EthereumImg,
    name: 'Ethereum',
    abbr: 'ETH',
    description:
      'Blockchain technology to create and run decentralized digital applications.',
  },
  {
    image: LitecoinImg,
    name: 'Litecoin',
    abbr: 'LTC',
    description:
      'Cryptocurrency that enables instant payments to anyone in the world.',
  },
];

/* eslint-enable */
