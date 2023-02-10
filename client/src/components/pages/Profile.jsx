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
  Avatar
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <Flex w="full" h="full" align="center" justify="center">
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Avatar name='Dan Abrahmov' bg="gray.400" src='https://bit.ly/dan-abramov' size='2xl' justifySelf="center" alignSelf="center"/>
          <Stack>
            <CardBody>
              <Heading size='md'>Soy yo xd</Heading>

              <Text py='2'>
                Descripcion xd
              </Text>
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