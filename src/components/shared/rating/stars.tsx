import { Key } from "react";
import { FaStar } from "react-icons/fa6";

/**
 * @type {StarsProps}
 *
 * @param rating
 */
type StarsProps = {
    rating: number;
    key: Key;
};

/**
 * Card component
 *
 * @param {StarsProps}
 */
export default function Stars({ rating, key }: Readonly<StarsProps>) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: rating }, (v: number, _) => {
                return (
                    <FaStar
                        key={`${key}_${v}`}
                        className="w-8 h-8 fill-sky-400"
                    />
                );
            })}
            {Array.from({ length: 5 - rating }, (v: number, _) => {
                return (
                    <FaStar
                        key={`${key}_${v}`}
                        className="w-8 h-8 fill-sky-950"
                    />
                );
            })}
        </div>
    );
}
