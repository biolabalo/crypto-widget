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
        fill="#23292F"
      />
      <path
        d="M17.302 6h2.168l-4.511 4.468a4.216 4.216 0 0 1-5.918 0L4.526 6h2.171l3.428 3.392a2.667 2.667 0 0 0 3.747 0L17.302 6ZM6.672 18.422H4.5l4.541-4.495a4.216 4.216 0 0 1 5.918 0l4.541 4.495h-2.171L13.875 15a2.667 2.667 0 0 0-3.747 0L6.67 18.422h.001Z"
        fill="#fff"
      />
    </svg>
    Ripple
  </div>
);

export default SvgComponent;
