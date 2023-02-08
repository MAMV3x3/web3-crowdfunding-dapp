import React from 'react'
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
  ButtonGroup,
  Button,
  Progress,
  Spacer,

  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { transform } from 'framer-motion';

//Prueba info de card
let cardInfoTest = {
  "Owner" : "0x74845641561515156464",
  "Title" : "La baina",
  "Description" : "Una descripcion bien aca",
  "Goal" : "Mucho dinero",
  "DeadLine" : "Manana",
  "Image" : "https://avatars.githubusercontent.com/u/84602829?v=4",

}

//Prueba mapeo de categorias
let categories = [
  "Tecnologia",
  "Arte",
  "Cine",
  "Comida",
  "Juegos",
  "Musica",
  "Otro"
]


//Funcion creadora de Card (Provisionalmente con info de prueba "cardInfoTest")
function DisplayCard(){
  return(
    <Card maxW='300px'
    _hover={{
      transform: "scale(1.02)",
      transition : " all 0.4s ease-in-out",
      cursor : "pointer", 
    }}>
      <CardBody>
        <Image
          src={cardInfoTest.Image}
          alt={cardInfoTest.Title}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{cardInfoTest.Title}</Heading>
          <Text>
            {cardInfoTest.Description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {cardInfoTest.Goal}
            <Progress colorScheme='green' size='sm' value={20}/>
            <Flex>
              <Text fontSize="sm" color="green" as="b">1,000.00</Text>
              <Spacer/>
              <Text fontSize="sm" color="purple" as="b">{cardInfoTest.Goal}</Text>
            </Flex>
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Text fontSize="sm">Alguna observacion por aqui, si es que tiene</Text>
      </CardFooter>
    </Card>
  )
}

//Creacion de Sector de cartas por categoria
function DisplaySector(sector){
  return(
    <SimpleGrid spacing={1} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {/* <div>{sector}</div> */}
      {DisplayCard(sector)}
    </SimpleGrid>
  )
}

const Dashboard = () => {
  //categories array lecture
  let dashboardCategories = []
  let dashboardCategoriesContent = []

  categories.map((val)=>{
    dashboardCategories.push(
      <Tab>{val}</Tab>
    );
    dashboardCategoriesContent.push(
      <TabPanel>
        {DisplaySector(val)}
      </TabPanel>
    );
  })
  return (
    <Box w="full" p="70px">
      <Flex alignContent="center" justifyContent="space-between">
        {/* DashBoard */}
        <Tabs w="100%" variant='soft-rounded' colorScheme='purple'>
          <TabList>   {/* Categories Labels*/}
            {dashboardCategories}
          </TabList>
          <TabPanels> {/* Categories Content */}
            {dashboardCategoriesContent}
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  )
}

export default Dashboard