import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AiOutlinePlus } from "react-icons/ai";
export default function SimpleAccordion() {
  return (
    <div>
      <Accordion sx={{ mt: 4 }}>
        <AccordionSummary
          expandIcon={<AiOutlinePlus color="#037B35" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            color: "primary.main",
            minHeight: "60px",
          }}
        >
          <Typography>Do you provide customer support?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: "primary.main",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AiOutlinePlus color="#FCBD17" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            color: "#FCBD17",
            minHeight: "60px",
          }}
        >
          <Typography>How much traffic can the hosting handle?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: "#FCBD17",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AiOutlinePlus color="#037B35" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{
            color: "primary.main",
            minHeight: "60px",
          }}
        >
          <Typography>Do you have any questions for us?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: "primary.main",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AiOutlinePlus color="#FCBD17" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{
            color: "#FCBD17",
          }}
        >
          <Typography>What is your return policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: "#FCBD17",
              minHeight: "60px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
