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
    return (
        <div className="flex gap-1">
            {Array.from({ length: rating }, (i: number) => {
                return (
                    <div key={i}>
                        <FaStar className="w-8 h-8 fill-sky-400" />
                    </div>
                );
            })}
            {Array.from({ length: 5 - rating }, (i: number) => {
                return (
                    <div key={i}>
                        <FaStar className="w-8 h-8 fill-sky-950" />
                    </div>
                );
            })}
        </div>
    );
}
