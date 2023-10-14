import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

function Card(props) {
  // data
  let content = [
    {
      id: 2,
      content: "50GB Storage",
      free: true,
      plus: true,
    },
    {
      id: 3,
      content: "Unlimited Public Projects",
      free: true,
      plus: true,
    },
    {
      id: 4,
      content: "Community Access",
      free: true,
      plus: true,
    },
    {
      id: 5,
      content: "Unlimited Private Projects",
      free: false,
      plus: true,
    },
    {
      id: 6,
      content: "Deticated Phone Support",
      free: false,
      plus: true,
    },
    {
      id: 7,
      content: "Free Subdomain",
      free: false,
      plus: true,
    },
    {
      id: 8,
      content: "Monthly Status Reports",
      free: false,
      plus: false,
    },
  ];
  return (
    <div className="card">
      <CardHeader type={props.type} />
      <CardBody content={content} type={props.type} />
    </div>
  );
}

export default Card;
