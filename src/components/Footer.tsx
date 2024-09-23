import { Icon } from '@iconify/react';


export const Footer = () => {
    return (
        <footer className="relative h-20 flex items-center">
            <nav className="container mx-auto px-4 flex justify-center">
                <ul></ul>
                <ul className='flex space-x-2'>
                    <li>
                        <Icon icon="entypo-social:facebook-with-circle" fontSize={32}/>
                    </li>
                    <li>
                        <Icon icon="entypo-social:linkedin-with-circle" fontSize={32}/>
                    </li>
                    <li>
                        <Icon icon="entypo-social:instagram-with-circle" fontSize={32}/>
                    </li>
                    <li>
                        <Icon icon="entypo-social:youtube" fontSize={32}/>
                    </li>
                    <li>
                        <Icon icon="entypo-social:linkedin-with-circle" fontSize={32}/>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}