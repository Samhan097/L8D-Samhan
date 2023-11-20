import { OutboundRounded } from "@mui/icons-material";
import React from "react";

export default function CustomCard({ titledes,title, content, imageUrl,schedule }) {
  const imageSize = "300px"; // Adjust the image size as needed

  const cardStyle = {
    width: "200", // Ensure the card takes up available space
    padding: '40px',
    paddingTop:0,
    borderLeft: "1px solid #ccc", // Add a vertical line to separate cards
  };

  const imageStyle = {
    width: imageSize, // Set the image width
    height: imageSize, // Set the image height
  };

  return (
    <div className="custom-card" style={cardStyle}>
      <img src={imageUrl} alt={title} style={imageStyle} />
    <p style={{color:'#B8B8B8'}}>{titledes}</p>
      <h2 >{title}</h2>
      <p style={{marginTop:40,color:'#33333380'}}>{content}</p>
      <p style={{marginTop:70}}>{schedule}
      <OutboundRounded style={{ color: '#333333', verticalAlign: 'middle', marginLeft: 10 }} />
      
      </p>
    </div>
  );
}
