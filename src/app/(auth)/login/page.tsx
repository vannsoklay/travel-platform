import { Button, Card, Input } from "@nextui-org/react";

export default function Login() {
    return (
        <div className="h-[90vh] flex items-center justify-center">
            <Card className="p-4 w-96 space-y-4">
                <Input type="email" variant="faded" label="Email" />
                <Input type="password" variant="faded" label="Password" />
                <Button color="primary" size="md">
                    Login
                </Button>
            </Card>
        </div>
    );
}
