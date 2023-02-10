import {React, useState} from "react";
import {
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,

} from "@chakra-ui/react";
import CategoryPanel from "../Elements/CategoryPanel";
import { transform } from "framer-motion";
import { daysLeft } from "../../utils";


//Mapeo de categorias
let categories = [
  "Tecnologia",
  "Arte",
  "Cine",
  "Comida",
  "Juegos",
  "Musica",
  "Otro",
];


const Dashboard = () => {
  //categories array lecture
  let dashboardCategories = [];   //Menu categories
  let dashboardCategoriesContent = [];  //Categories content
  const [category , setCategory] = useState(0);
  let selectedCategory = categories[category];
  console.log(selectedCategory);

  categories.map((val) => {
    dashboardCategories.push(<Tab>{val}</Tab>);
    dashboardCategoriesContent.push(<TabPanel><CategoryPanel category={val} /></TabPanel>);
  });
  return (
    <Box w="full" p="70px">
      <Flex alignContent="center" justifyContent="space-between">
        {/* DashBoard */}
        <Tabs w="100%" variant="soft-rounded" colorScheme="purple" onChange={(index) => setCategory(index)}>
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
