import { Box, Flex, IconButton, Avatar} from '@chakra-ui/react'
import React from 'react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useStateContext } from '../../context'
import { useNavigate } from 'react-router-dom'
import { useColorMode } from '@chakra-ui/color-mode'

const AvatarTheme = ({collapse}) => {
  const navigate = useNavigate();
  const { connect, address } = useStateContext();
  const { colorMode, toggleColorMode } = useColorMode()
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

            <Avatar name='Dan Abrahmov' bg="gray.400" src='https://bit.ly/dan-abramov' size='md' 
                onClick={() => {
                    if(address){
                        navigate('/profile')
                    } else{
                        connect()
                    }
                }}
            />
        </Box>
        <IconButton 
            onClick={toggleColorMode}
            aria-label='' variant="ghost" icon={ 
                colorMode === 'light' ? <MoonIcon /> : <SunIcon />
             } fontSize={25} color="gray.400" borderRadius="50%"></IconButton>
    </Flex>
  )
}

export default AvatarTheme