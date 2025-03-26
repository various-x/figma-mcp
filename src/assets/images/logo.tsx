import React from "react";

const Logo: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", ...style }}>
      <span
        style={{
          color: "#1890ff",
          fontWeight: "bold",
          fontSize: "18px",
          letterSpacing: "1px",
        }}
      >
        COOL
      </span>
      <span
        style={{
          marginLeft: "2px",
          fontWeight: "normal",
          fontSize: "16px",
        }}
      >
        Logistics
      </span>
    </div>
  );
};

export default Logo;
