import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Why you choose GTFX",
  desc: "Secure Transaction Easily Builds And Solving With Community.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Secure Transaction",
      desc: "Blockchain technology is secure as it is decentralised and distributed. There is no single point of failure, which makes it much harder to corrupt.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Verified Multitools And Trust",
      desc: "We build git edgeware carefully and securely for everyone verified transactions safe and no leakage of your data.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Fastest Transaction",
      desc: "Vertical scaling involves adding processing power and memory to each node, thus creating more powerful nodes.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Git Wallets",
  desc: "Git Wallets crypto wallet that can be utilized for purchasing, selling, transferring, as well as storing digital currency. It securely stores a wide range of digital assets in offline storage.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Secure transfers with verified Sign Kit.",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Easily buy and sell within the wallet.",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Pay for Gas in Git Edgeware.",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
