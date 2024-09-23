import { Button, Card, Input } from "@nextui-org/react";

export default function Register() {
    return (
        <div className="h-screen flex items-center justify-center">
            <Card className="p-4 w-96 space-y-4">
                <Input type="email" variant="faded" label="Email" />
                <Input type="password" variant="faded" label="Password" />
                <Button color="primary" size="md">
                    Register
                </Button>
            </Card>
        </div>
    );
}
