import { testimonials } from "@/lib/testimonial";

import TestimonialCard from "../../(shared)/(card)/testimonial";
import H1 from "../../(shared)/(title)/H1";

export default function Testimonials() {
    return (
        <div className="flex flex-col gap-14 sm:gap-10">
            <div className="flex flex-col gap-2">
                <H1>Happy Customers</H1>
                <p className="text-xs">Hear What our Customers have to say about us</p>
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                {testimonials.map((testimonial) => {
                    return (
                        <TestimonialCard
                            testimonial={testimonial}
                            key={testimonial.starts}
                        />
                    );
                })}
            </div>
        </div>
    );
}
