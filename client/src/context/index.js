import React, { createContext, useContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react'
import { ethers } from 'ethers';
import { useToast } from '@chakra-ui/react'

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract("0x1A6E0854Ce363fEd69B06bfcBAc8b790d021aAbf");
    const { mutateAsync: createCampaign} = useContractWrite(contract, "createCampaign")

    const address = useAddress();
    const connect = useMetamask();

    const toast = useToast()

    const publishCampaign = async (form) => {
        try {
          const data = await createCampaign([
            address, // owner
            form.title, // title
            form.description, // description
            form.goal, // goal
            new Date(form.deadline).getTime(), // deadline,
            form.image
          ])
          toast({
            title: 'Campaign created.',
            description: "Your campaign has been created.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          console.log("contract call success", data)
        } catch (error) {
          console.log("contract call failure", error)
          toast({
            title: 'Campaign creation failed.',
            description: "An error occured while creating your campaign.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
      }

    return (
        <StateContext.Provider 
            value={{ address, contract, connect, createCampaign: publishCampaign}}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);