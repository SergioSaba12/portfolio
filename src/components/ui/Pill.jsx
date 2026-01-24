// components/ui/Pill.jsx
import { memo } from "react";

const Pill = memo(function Pill({ children }) {
    return <span className="pill-apple">{children}</span>;
});

export default Pill;
