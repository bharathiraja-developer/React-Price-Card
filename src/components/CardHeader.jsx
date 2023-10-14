import React from "react";

function CardHeader({ type }) {
  return (
    <div>
      <p>
        <b>{type}</b>
      </p>
      <h2 className="Black">
        {type === "FREE"
          ? "$0/month"
          : type === "PLUS"
          ? "$9/month"
          : "$49/month"}
      </h2>
      <hr />
    </div>
  );
}

export default CardHeader;
