import {Flex,Image,HStack,Heading,Box, Icon,Show,Hide,Menu,MenuButton,MenuItem,MenuList} from "@chakra-ui/react"
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export default function Navbar(){

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Resume', path: '/resume' },
      ];

    return(
        <Flex as="nav" py={{base:"1rem",lg:"0.8rem"}} px={{base:"1rem",lg:"5rem"}}  alignItems="center" justifyContent="space-between">
            <Box>
                <Image
                    borderRadius="full"
                    boxSize="3rem"
                    src='https://yt3.googleusercontent.com/ytc/AIdro_mU5rR9LPftROqYtRdcjn9z9UXh1s_YKx78uWrHr_j9gv4=s176-c-k-c0x00ffffff-no-rj'
                    alt='logo'
                />
            </Box>
            <Box>
                <Hide below='md'>
                <HStack>
                    {navLinks.map((link, index) => (
                        <Link key={index} to={link.path} >
                            <Heading px="1.5rem" size="sm">{link.name}</Heading>
                        </Link>
                    ))}
                </HStack>
                </Hide>
            </Box>
            <HStack gap={4}>
                <Icon boxSize="2rem" as={FaLinkedin}>LInkedin</Icon>
                <Icon  boxSize="2rem" as={FaGithub}>Github</Icon>
                <Show below='md'>
                    <Menu>
                        <MenuButton
                            as={ HamburgerIcon }
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                            boxSize="2rem"
                        />
                        <MenuList>
                        {navLinks.map((link, index) => (
                                <Link key={index} to={link.path}>
                                    <MenuItem>
                                        <Heading size="md">{link.name}</Heading>
                                    </MenuItem>
                                </Link>
                        ))}
                        </MenuList>
                    </Menu>
                </Show>
            </HStack>
        </Flex>
    )
}