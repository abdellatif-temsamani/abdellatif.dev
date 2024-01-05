import { FaStar } from "react-icons/fa6";

/**
 * @type {StarsProps}
 *
 * @param rating
 */
type StarsProps = {
    rating: number;
};

/**
 * Card component
 *
 * @param {StarsProps} { rating }
 */
export default function Stars({ rating }: Readonly<StarsProps>) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: rating }, (v: number, _) => {
                return (
                    <div key={v}>
                        <FaStar className="w-8 h-8 fill-sky-400" />
                    </div>
                );
            })}
            {Array.from({ length: 5 - rating }, (v: number, _) => {
                return (
                    <div key={v}>
                        <FaStar className="w-8 h-8 fill-sky-950" />
                    </div>
                );
            })}
        </div>
    );
}
