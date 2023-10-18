import React from "react";
import CustomCard from "./CustomCard";
import { Grid } from "@mui/material";

const cardData = [
  {
    titledes:'Website Work',
    title: "Why Understanding Your Tools Is Essential",
    content: "Level 8 Digital is a leading full-service omnichannel agency building digital experiences for clients across the globe. Our goal is to accelerate sales for our B2B and B2C clients by delivering award-winning digital storefronts, solutions and mobile apps.",
    schedule:'Schedule A Free Discovery Session',
    imageUrl: "/home/img-7.png",
  },
  {
    titledes:'Website Work',
    title: "What Design Teams Can Learn From Nature",
    content: "Level 8 Digital is a leading full-service omnichannel agency building digital experiences for clients across the globe. Our goal is to accelerate sales for our B2B and B2C clients by delivering award-winning digital storefronts, solutions and mobile apps.",
    schedule:'Schedule A Free Discovery Session',
    imageUrl: "/home/img-8.png",
  },
  {
    titledes:'Website Work',
    title: "Design Culture Has Changed, Here’s How.",
    content: "Level 8 Digital is a leading full-service omnichannel agency building digital experiences for clients across the globe. Our goal is to accelerate sales for our B2B and B2C clients by delivering award-winning digital storefronts, solutions and mobile apps.",
    schedule:'Schedule A Free Discovery Session',
    imageUrl: "/home/img-9.png",
  },
  {
    titledes:'Website Work',
    title: "The Importance Of Understanding Color",
    content: "Level 8 Digital is a leading full-service omnichannel agency building digital experiences for clients across the globe. Our goal is to accelerate sales for our B2B and B2C clients by delivering award-winning digital storefronts, solutions and mobile apps.    ",
    schedule:'Schedule A Free Discovery Session',
    imageUrl: "/home/img-10.png",
  },
];

function Card() {
  return (
    <div className="card-container">
    <Grid container spacing={1} style={{marginTop:200}}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index} >
          <CustomCard
            titledes={card.titledes}
            title={card.title}
            content={card.content}
            imageUrl={card.imageUrl}
            schedule={card.schedule}
          />
        </Grid>
      ))} 
    </Grid>
  </div>
  );
}

export default Card;
