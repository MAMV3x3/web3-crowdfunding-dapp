import React from 'react'
import {
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";

let categories = [
  "Tecnologia",
  "Arte",
  "Cine",
  "Comida",
  "Juegos",
  "Musica",
  "Otro"
]


function DisplaySector(sector){
  return(
    <div>{sector}</div>
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
        <Tabs variant='soft-rounded' colorScheme='purple'>
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