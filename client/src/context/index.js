import React, { createContext, useContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react'
import { ethers } from 'ethers';
import BigNumberJS from 'bignumber.js'

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0x1A6E0854Ce363fEd69B06bfcBAc8b790d021aAbf');
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

    const address = useAddress();
    const connect = useMetamask();

    const publishCampaign = async (form) => {
        const goalInWei = ethers.utils.parseEther(form.goal);
        console.log("form", form);
        console.log("goalInWei", goalInWei);
        try {
            const data = await createCampaign([
                address,
                form.title,
                form.description,
                goalInWei,
                new Date(form.deadline).getTime(),
                form.image
            ])

            console.log("data", data);
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <StateContext.Provider 
            value={{ address, contract, connect, publishCampaign}}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);