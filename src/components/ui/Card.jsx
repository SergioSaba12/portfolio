// components/ui/Card.jsx
import { memo } from "react";

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Card = memo(function Card({ children, className, hoverable }) {
    return (
        <div className={cn("card-apple", hoverable && "hover-scale cursor-pointer", className)}>
            {children}
        </div>
    );
});

export default Card;
