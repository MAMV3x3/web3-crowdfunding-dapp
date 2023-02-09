import React from "react";
import {
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  SimpleGrid,
  Icon,
  ButtonGroup,
  Button,
  Progress,
  Spacer,
  Avatar,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Tag,
} from "@chakra-ui/react";
import { MdCalendarToday } from "react-icons/md";
import { transform } from "framer-motion";
import { daysLeft } from "../../utils";

//Prueba info de card
let cardInfoTest = {
  Owner: "0x74845641561515156464asyudgyasgydasyi",
  Title: "La baina",
  Description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet",
  Goal: "Mucho dinero",
  DeadLine: "Manana",
  Image: "https://m.media-amazon.com/images/I/71IvgWm7IoL._AC_SY355_.jpg",
};

//Prueba mapeo de categorias
let categories = [
  "Tecnologia",
  "Arte",
  "Cine",
  "Comida",
  "Juegos",
  "Musica",
  "Otro",
];

//Funcion creadora de Card (Provisionalmente con info de prueba "cardInfoTest")
function DisplayCard() {
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
    >
      <CardBody>
        <Image
          src={cardInfoTest.Image}
          alt={cardInfoTest.Title}
          borderRadius="lg"
        />
        <Tag mt="5" colorScheme="purple" borderRadius="full" px="2" py="1">
          {categories[0]}
        </Tag>
        <Stack mt="5" spacing="2">
          <Heading size="md">{cardInfoTest.Title}</Heading>
          <Text textAlign="justify">{cardInfoTest.Description}</Text>
          <Flex alignItems="center" flexDir="row-reverse" gap={2} maxW="full">
            <Icon as={MdCalendarToday} />
            <Text fontSize="sm" color="gray.500" as="p" isTruncated>
              {cardInfoTest.DeadLine}
            </Text>
          </Flex>
          <Progress colorScheme="green" size="sm" value={20} />
          <Flex>
            <Text fontSize="sm" color="green" as="b">
              1,000.00
            </Text>
            <Spacer />
            <Text fontSize="sm" color="purple.500" as="b">
              {cardInfoTest.Goal}
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
              name={cardInfoTest.Owner}
              src="https://bit.ly/broken-link"
            />
          </Box>
          <Text fontSize="sm" color="gray.500" as="p" isTruncated>
            {cardInfoTest.Owner}
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
}

//Creacion de Sector de cartas por categoria
function DisplaySector(sector) {
  return (
    <SimpleGrid
      spacing={1}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {/* <div>{sector}</div> */}
      {DisplayCard(sector)}
    </SimpleGrid>
  );
}

const Dashboard = () => {
  //categories array lecture
  let dashboardCategories = [];
  let dashboardCategoriesContent = [];

  categories.map((val) => {
    dashboardCategories.push(<Tab>{val}</Tab>);
    dashboardCategoriesContent.push(<TabPanel>{DisplaySector(val)}</TabPanel>);
  });
  return (
    <Box w="full" p="70px">
      <Flex alignContent="center" justifyContent="space-between">
        {/* DashBoard */}
        <Tabs w="100%" variant="soft-rounded" colorScheme="purple">
          <TabList>
            {" "}
            {/* Categories Labels*/}
            {dashboardCategories}
          </TabList>
          <TabPanels>
            {" "}
            {/* Categories Content */}
            {dashboardCategoriesContent}
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
};

export default Dashboard;
