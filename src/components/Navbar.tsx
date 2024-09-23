import { Navbar as MyNavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export const Navbar = () => {
    return (
        <MyNavbar maxWidth="2xl" className="bg-transparent absolute drop-shadow-none backdrop-blur-none backdrop-saturate-150 h-20">
            <NavbarContent justify="start">
                <NavbarBrand>
                    <p className="font-bold text-inherit">Adventure</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-8 font-semibold" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#" className="text-white">
                        Discover
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className="text-white">
                        Explore
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className="text-white">
                        Adventures
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className="text-white">
                        Categories
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="secondary" href="#" radius="full" className="w-24 font-semibold text-green-900 bg-white" variant="solid">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </MyNavbar>
    )
}