type BottomLinksProps = {
  sectionName: string;
  links: string[];
};

// Bottom Links
const bottomLinks: BottomLinksProps[] = [
  { sectionName: "Company", links: ["Home", "Jobs", "Press"] },
  { sectionName: "Development", links: ["iOS", "Android"] },
  { sectionName: "Community", links: ["Social", "Forum", "Contact", "FAQ"] },
  { sectionName: "Info", links: ["Terms of Service", "Privacy Policy"] },
];

export default bottomLinks;
