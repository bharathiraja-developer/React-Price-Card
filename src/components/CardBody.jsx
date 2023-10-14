import React from "react";

function CardBody(props) {
  return (
    <div>
      <ul className="list">
        <li>
          {props.type === "FREE"
            ? "✔ Single Users"
            : props.type === "PLUS"
            ? "✔ 5 Users"
            : "✔ Unlimited Users"}
        </li>
        {props.content.map((content) => (
          <li key={content.id}>
            {props.type === "FREE" && content.free ? (
              <p>✔ {content.content}</p>
            ) : props.type === "PLUS" && content.plus ? (
              <p>✔ {content.content}</p>
            ) : props.type === "PRO" ? (
              <p>✔ {content.content}</p>
            ) : (
              <p className="disabledText">✖ {content.content}</p>
            )}
          </li>
        ))}
      </ul>
      {props.type === "FREE" ? (
        <button className="disabledButton">
          <b>BUTTON</b>
        </button>
      ) : props.type === "PLUS" ? (
        <button className="disabledButton">
          <b>BUTTON</b>
        </button>
      ) : (
        <button>
          <b>BUTTON</b>
        </button>
      )}
    </div>
  );
}

export default CardBody;
