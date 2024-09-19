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
        if (index < rating) {
            return "fill-sky-400";
        } else {
            return "fill-sky-950";
        }
    }
    return (
        <div className="flex gap-1">
            {new Array(5).fill(5).map((_, index: number) => {
                return (
                    <div key={index}>
                        <FaStar className={`size-8   ${setStarColor(index)}`} />
                    </div>
                );
            })}
        </div>
    );
}
