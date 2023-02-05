import React, { useState } from "react";
import { ethers } from "ethers";
import { MdPermIdentity } from "react-icons/md";
import { checkIfImage } from "../../utils";
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
import { InfoIcon, LinkIcon } from "@chakra-ui/icons";
import { useStateContext } from "../../context";
import { useNavigate } from "react-router-dom";

const CreateCampaign = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { publishCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    goal: "",
    deadLine: "",
    image: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkIfImage(form.image, async (exists) => {
        if(exists){
            setIsLoading(true);
            console.log(ethers.utils.parseEther(form.goal));
            await publishCampaign(form);
            setIsLoading(false);
            navigate('/');
        } else{
            alert('Provide valid image URL')
            setForm({...form, image: ''})
        }
    })
  };

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      padding={10}
      w="full"
      overflowY="auto"
    >
      <Box
        w="full"
        maxW="500px"
        bg="white"
        borderRadius="3xl"
        padding={10}
        boxShadow="md"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="gray.700"
          textAlign="center"
        >
          Launch a Campaign
        </Text>
      </Box>
      <Divider my={10} />
      <Flex
        flexDir="column"
        alignItems="center"
        w="full"
        maxW="90%"
        bg="white"
        borderRadius="3xl"
        padding={10}
        boxShadow="md"
        justifyContent="center"
      >
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Stack spacing={50}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  placeholder="What's your name? 👀"
                  aria-label="Your Name"
                  value={form.name}
                  onChange={(e) => handleFormFieldChange('name', e)}
                />
                <InputRightElement children={<MdPermIdentity />} />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Campaign Title</FormLabel>
              <Input
                type="text"
                placeholder="What's the title of your campaign? 🚀"
                aria-label="Campaign Title"
                value={form.title}
                onChange={(e) => handleFormFieldChange('title', e)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea
                type="text"
                placeholder="What's your campaign about? 🤔"
                aria-label="Description"
                value={form.description}
                resize="vertical"
                minH={200}
                onChange={(e) => handleFormFieldChange('description', e)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="goal">Goal</FormLabel>
              <InputGroup>
                <Input
                  type="number"
                  step="any"
                  placeholder="How much do you want to raise? 💰"
                  aria-label="Goal"
                  value={form.goal}
                  onChange={(e) => handleFormFieldChange('goal', e)}
                />
                <InputRightElement
                  children={<i class="fa-brands fa-ethereum"></i>}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="deadLine">DeadLine</FormLabel>
              <Input
                type="date"
                placeholder="When do you want to end your campaign? 📅"
                aria-label="DeadLine"
                value={form.deadLine}
                onChange={(e) => handleFormFieldChange('deadLine', e)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="image">Image</FormLabel>
              <InputGroup>
              <Input
                type="text"
                placeholder="Add an image URL for your campaign! 🖼️"
                aria-label="Image"
                value={form.image}
                onChange={(e) => handleFormFieldChange('image', e)}
              />
                <InputRightElement
                    children={<LinkIcon />}
                >
                </InputRightElement>
                </InputGroup>
            </FormControl>
            <Divider />
            <Button
                type="submit"
                colorScheme="blue"
                variant="solid"
                size="lg"
                w="full"
                mt={10}
            >
                Launch Campaign 🚀
            </Button>
          </Stack>
        </form>
        {/* You'll get 95% of the raised ammount with an info label */}
        <Flex
          flexDir="row"
          alignItems="center"
          justifyContent="center"
          mt={10}
          gap={2}
        >
          <InfoIcon color="gray.500" />
          <Text
            fontSize="1xl"
            fontWeight="medium"
            color="gray.500"
            textAlign="center"
          >
            You'll get 95% of the raised ammount.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CreateCampaign;
