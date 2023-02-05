import { Box, Flex, IconButton, Icon, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { StarIcon, Search2Icon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const LogoSearch = ({collapse}) => {
  return (
    <Flex
        w="full"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={collapse ? "row" : "column"}
        gap={4}
    >
        <Box
            display="flex"
            alignItems="center"
            gap={2}
        >
            <Link to='/'>
                <Image boxSize="25px" src='https://portfolio-template-25y.pages.dev/static/media/logo.2ee0cc2d.svg' alt='Dan Abramov' />
            </Link>
            {collapse &&
                <Text fontWeight="bold" fontSize={18}>Studn.</Text>
            }
        </Box>
        <IconButton aria-label='Search' variant="ghost" icon={<Search2Icon />} fontSize={25} color="gray.400" borderRadius="50%"></IconButton>
    </Flex>
  )
}

export default LogoSearch