import * as React from "react";

const SvgComponent = (props) => (
  <div style={{ display: "flex", gap: 10 }}>
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
        fill="#BFBBBB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m7.82 14.41-1.07.416.516-2.07 1.083-.434L9.909 6h3.848l-1.14 4.647 1.058-.428-.51 2.062-1.07.428-.636 2.613h5.791L16.595 18H6.94l.881-3.59Z"
        fill="#fff"
      />
    </svg>
    Litcoin
  </div>
);

export default SvgComponent;
