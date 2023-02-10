import React from 'react'
import {
  Box,
  Flex,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Avatar,
  Stat,
  StatLabel,
  StatNumber,
  Divider,
  Spacer,
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <Flex w="full" h="full" align="center" justify="center">
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          p={6}
          w={{ base: 'full', sm: 'auto' }}
          shadow='md'
        >
          <Avatar name='Dan Abrahmov' bg="gray.400" src='https://bit.ly/dan-abramov' size='2xl' justifySelf="center" alignSelf="center"/>
          <Stack
            p={4}
          >
            <CardBody>
              <Heading size="md" maxW={'sm'} isTruncated>0x0o0s0d0os0asd0oas00o</Heading>

              <Text py='2'>
                Descripcion xd
              </Text>
              <Stat
                py='2'
              >
                <StatLabel>Earnings</StatLabel>
                <StatNumber>0.00 ETH</StatNumber>
              </Stat>
              <Spacer />
              <Stat
                py='2'
              >
                <StatLabel>Campaigns</StatLabel>
                <StatNumber>0</StatNumber>
              </Stat>
            </CardBody>
            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                Edit profile
              </Button>
            </CardFooter>
          </Stack>
        </Card>
    </Flex>
  )
}

export default Profile