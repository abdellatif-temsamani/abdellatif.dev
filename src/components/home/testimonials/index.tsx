import TestimonialCard from "@/components/shared/card/testimonial";
import { testimonials } from "@/lib/testimonial";

/**
 * Testimonials component (home page)
 *
 * @returns {JSX.Element}
 */
export default function Testimonials(): JSX.Element {
    return (
        <div className="flex flex-col gap-14 sm:gap-10">
            <div className="flex flex-col gap-2">
                <h1>Happy Customers</h1>
                <p className="text-xs">
                    Hear What our Customers have to say about us
                </p>
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                {testimonials.map((testimonial) => {
                    return (
                        <TestimonialCard
                            testimonial={testimonial}
                            key={testimonial.user.name}
                        />
                    );
                })}
            </div>
        </div>
    );
}
