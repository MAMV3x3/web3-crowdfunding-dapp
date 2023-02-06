import React from 'react'
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

let categorias = [
  {
    "name":"Artes",
    "image":"https://i.pinimg.com/236x/0f/87/9a/0f879a397a001c50010b1ac8dadd559f.jpg"
  },
  {
    "name":"Tecnologia",
    "image":"https://i.pinimg.com/564x/c5/d8/6a/c5d86a3aa320bba2fb2aa90edfe1a181.jpg"
  },
  {
    "name":"Emprendimiento",
    "image":"https://i.pinimg.com/564x/ca/34/d6/ca34d6d18a6f328c631eac46b92a79d9.jpg"
  }
]

function newCategorieCard(obj){
  let name = obj.name;
  let imgUrl = obj.image;
  return(
    <Flex bgImage={imgUrl} h="200px" w="200px" alignContent="center" justifyContent='center' borderRadius="20px">
      <Text fontSize="3xl" as="b" color="blue.300">
        {name}
      </Text>
    </Flex>
  )
}

const Dashboard = () => {
  let projectCategories = []
  categorias.map((val)=>{
    projectCategories.push(newCategorieCard(val));
  });

  return (
    <Box w="full" p="70px">
      <Flex alignContent="center" justifyContent="space-between">
        {projectCategories}
      </Flex>
    </Box>
  )
}

export default Dashboard