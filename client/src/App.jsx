import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Sidebar from './components/Sidebar'

const App = () => {
  const [collapse, setCollapse] = React.useState(false)
  return (
    <HStack
      w="full"
      h="100vh"
      bg="gray.100"
      padding={10}
    >
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? 350 : 100}
        bg="white"
        alignItems="center"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        borderRadius="3xl"
        transition="ease-in-out 0.5s"
      >
        <Sidebar collapse={collapse}/>

      </Flex>
      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
        overflowY="auto"
      >
        <IconButton 
          aria-label='Menu Collapse'
          icon={<HamburgerIcon />}
          position="absolute"
          top={6}
          left={6}
          onClick={() => setCollapse(!collapse)}
        />
        <Text fontSize={100} color="gray.300">Main</Text>
      </Flex>
    </HStack>
  )
}

export default App