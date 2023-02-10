import React from 'react'
import {
  Box,
  Flex,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Icon,
  Progress,
  Spacer,
  Avatar,
  Tag,
  SimpleGrid,

} from "@chakra-ui/react";
import { MdCalendarToday } from "react-icons/md";



let categoriesBg = {
  "All": "green",
  "Tecnologia": "blue",
  "Arte": "pink",
  "Cine": "yellow",
  "Comida": "cyan",
  "Juegos": "red",
  "Musica": "purple",
  "Otro": "gray",
};


//Funcion creadora de Card (Provisionalmente con info de prueba "cardInfoTest")
function DisplayCard(category, data) {
    return (
      <Card
        size={"md"}
        _hover={{
          transform: "scale(1.01)",
          boxShadow: "lg",
          cursor: "pointer",
        }}
        transition="0.3s"
        variant="elevated"
        m="2"
        // bg={categoriesBg[category]}
      >
        <CardBody>
          <Image
            src={data.Image}
            alt={data.Title}
            borderRadius="lg"
          />
          <Tag mt="5" colorScheme={categoriesBg[data.Category]} borderRadius="full" px="2" py="1">
            {data.Category}
          </Tag>
          <Stack mt="5" spacing="2">
            <Heading size="md">{data.Title}</Heading>
            <Text textAlign="justify">{data.Description}</Text>
            <Flex alignItems="center" flexDir="row-reverse" gap={2} maxW="full">
              <Icon as={MdCalendarToday} />
              <Text fontSize="sm" color="gray.500" as="p" isTruncated>
                {data.DeadLine}
              </Text>
            </Flex>
            <Progress colorScheme="green" size="sm" value={20} />
            <Flex>
              <Text fontSize="sm" color="green" as="b">
                1,000.00
              </Text>
              <Spacer />
              <Text fontSize="sm" color="purple.500" as="b">
                {data.Goal}
              </Text>
            </Flex>
            {/* deadline  */}
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            gap={3}
            maxW="full"
          >
            <Box>
              <Avatar
                size="sm"
                name={data.Owner}
                src="https://bit.ly/broken-link"
              />
            </Box>
            <Text fontSize="sm" color="gray.500" as="p" isTruncated>
              {data.Owner}
            </Text>
          </Flex>
        </CardFooter>
      </Card>
    );
}

//Creacion de Sector de cartas por categoria
function CategoryPanel(props) {
  let cardsArr = []
  let data = require("../Elements/fetchReplace.json");
  data.proof.map((val)=>{
    cardsArr.push(DisplayCard(props.category,val));
  });
  return (
    <SimpleGrid spacing={1} templateColumns="repeat(auto-fill, minmax(200px, 1fr))" >
      {cardsArr}
    </SimpleGrid>
  )
}

export default CategoryPanel
