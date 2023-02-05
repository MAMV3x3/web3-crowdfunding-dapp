import { Flex, Box, Spacer, Divider } from '@chakra-ui/react'
import React from 'react'
import LogoSearch from './LogoSearch'
import NavItem from '../Navigation/NavItem'
import { MdOutlineSpaceDashboard, MdWorkOutline, MdBolt, MdAlignVerticalBottom, MdOutlineSentimentVerySatisfied } from "react-icons/md";
import AvatarTheme from './AvatarTheme'

const Sidebar = ({collapse}) => {
  return (
    <Flex
        w="full"
        flexDir="column"
        h="100%"
    >
        <LogoSearch collapse = {collapse} />
        <Spacer />
        <Divider/>
        <NavItem path='/' label='Dashboard' icon={MdOutlineSpaceDashboard} collapse = {collapse}/>
        <NavItem path='/profile' label='My Campaigns' icon={MdWorkOutline} collapse = {collapse}/>
        <NavItem path='/launch-campaign' label='Launch' icon={MdBolt} collapse = {collapse}/>
        <NavItem path='/' label='Top Trending' icon={MdAlignVerticalBottom} collapse = {collapse}/>
        <NavItem path='/' label='Surprise me' icon={MdOutlineSentimentVerySatisfied} collapse = {collapse}/>
        <Divider />
        <Spacer />
        <AvatarTheme collapse = {collapse}/>
    </Flex>
  )
}

export default Sidebar