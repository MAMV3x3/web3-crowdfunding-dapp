import { Box, Link, Icon, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const NavItem = ({path, icon, label, collapse}) => {
  return (
    <Box
        display="flex"
        alignItems="center"
        my={5}
    >
        <Link 
            href={path} gap={1} display="flex" alignItems="center" fontWeight="medium" w="full" color="gray.400" _hover={{textDecoration: 'none', color: useColorModeValue('gray.600', 'gray.200')}}
            justifyContent={collapse ? "" : "center"}
            
        >
            <Icon as={icon} fontSize={22} m={0} />
            <Text display={collapse ? "flex" : "none"}>{label}</Text>
        </Link>
    </Box>
  )
}

export default NavItem