import { useFormStatus } from "react-dom";

import Button from ".";

export default function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button width="half" disabled={pending} type="submit">
            Send
        </Button>
    );
}
