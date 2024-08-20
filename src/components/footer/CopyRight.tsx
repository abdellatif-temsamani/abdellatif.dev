import Link from "next/link";

export default function CopyRight() {
    return (
        <div className="flex flex-col gap-10 justify-between xl:flex-row xl:gap-0">
            <p className="text-sm sm:text-base">
                Copyright © 2023 Abdellatif.dev All Rights Reserved.
            </p>
            <ul className="flex flex-col gap-4 sm:flex-row">
                <li>
                    <Link href="/policy">Policy</Link>
                </li>
                <li>
                    <Link href="/terms">Terms Of Service</Link>
                </li>
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>
        </div>
    );
}
