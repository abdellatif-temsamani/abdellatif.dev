import { FaStar } from "react-icons/fa6";

type StarsProps = {
    rating: number;
};

/**
 * Card component
 *
 * @param {StarsProps}
 */
export default function Stars({ rating }: Readonly<StarsProps>) {
    function setStarColor(index: number): string {
        const base = "size-8 ";
        if (index < rating) {
            return base + "fill-sky-400";
        } else {
            return base + "fill-sky-950";
        }
    }
    return (
        <div className="flex gap-1">
            {new Array(5).fill(5).map((_, index: number) => {
                return (
                    <div key={index}>
                        <FaStar className={setStarColor(index)} />
                    </div>
                );
            })}
        </div>
    );
}
