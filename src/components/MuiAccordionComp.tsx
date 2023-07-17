import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import { AiOutlineHeart } from "react-icons/ai";
import { GiPriceTag } from "react-icons/gi";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { PiPencilDuotone } from "react-icons/pi";

const data = [
  { title: "Made With Love", description: "text", icon: AiOutlineHeart },
  { title: "Free of Use", description: "text", icon: GiPriceTag },
  {
    title: "Fully Support Available",
    description: "text",
    icon: LiaSuitcaseSolid,
  },
  {
    title: "Flat and Modern UI & UX",
    description: "text",
    icon: PiPencilDuotone,
  },
];

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme, expanded }) => ({
  backgroundColor: expanded ? "#33D2FD" : "",
  boxShadow: "0 6px 9px rgba(35, 39, 47, 0.1)",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const MuiAccordionComp = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="w-full flex flex-col gap-y-4">
      {data.map((item, id) => {
        const Icon = item.icon;
        return (
          <Accordion
            expanded={expanded === `panel${id + 1}`}
            onChange={handleChange(`panel${id + 1}`)}
            key={id}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Icon className="h-6 w-6 mr-4" />
              <Typography className="font-extrabold text-base text-[#233148]">
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="pl-12 text-white">
                {item.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default MuiAccordionComp;
