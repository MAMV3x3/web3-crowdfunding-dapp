import { Box, Flex, IconButton, Avatar} from '@chakra-ui/react'
import React from 'react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const AvatarTheme = ({collapse}) => {
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
            <Avatar name='Dan Abrahmov' bg="gray.400" src='https://bit.ly/dan-abramov' size='md'/>
        </Box>
        <IconButton aria-label='' variant="ghost" icon={<SunIcon />} fontSize={25} color="gray.400" borderRadius="50%"></IconButton>
    </Flex>
  )
}

export default AvatarTheme