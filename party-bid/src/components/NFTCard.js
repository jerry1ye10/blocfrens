import React, { useMemo } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import StockNFT from "../assets/stock_nft.png";
import NearLogo from "../assets/near_logo.svg";
const statusObjectHandler = (status) => {
  switch (status) {
    case "Lost":
      return { bg: "#FBEBEB", color: "#8A4E4E", text: "BLOC Lost" };
    case "Won":
      return { bg: "#F0FBEB", color: "#4F8A4E", text: "BLOC Won" };
    case "Live":
    default:
      return { bg: "#ECEBFB", color: "#524E8A", text: "BLOC Live" };
  }
};

export const NFTCard = ({ status, moneyGoal, members, raised }) => {
  const statusObject = useMemo(() => statusObjectHandler(status), [status]);
  return (
    <Box
      display="flex"
      flexDir="column"
      bg="white"
      borderRadius="20px"
      p="13px"
      filter="drop-shadow(0px 0px 10px #D8D7E6)"
      transition={"all 0.2s ease-in"}
      _hover={{
        filter: "drop-shadow(0px 10px 20px #D8D7E6)",
        transform: "translate3d(0px, -5px, 12px)",
      }}
      width="fit-content"
    >
      <Image src={StockNFT} />
      <Box display="flex" justifyContent="space-between">
        <Text fontSize="24px">BLOCSana</Text>
        <Image
          transform={{ transition: "all 1s ease" }}
          _hover={{
            filter: "drop-shadow(0px 0px 10px rgba(82, 78, 138, 0.21))",
          }}
          src={NearLogo}
        />
      </Box>
      <Box
        height="min-content"
        display="flex"
        flexDir="column"
        color="#615F77"
        fontSize="14px"
        lineHeight="15.39px"
        fontWeight="500"
      >
        <Box>Buy price: {moneyGoal} NEAR</Box>
        <Box>{members} members</Box>
        <Box
          position="relative"
          mt="10px"
          sx={{ "& *": { borderRadius: "10px" } }}
        >
          <Box
            position="absolute"
            width="100%"
            height="6px"
            bg="linear-gradient(269.99deg, #FFF7E9 0.01%, #ECEBFB 101.44%)"
          />
          <Box
            bg="#524E8A"
            position="absolute"
            width={`${(raised / moneyGoal) * 100}%`}
            transition="width 1s ease-in-out"
            height="6px"
          />
        </Box>
        <Text mt="10px" color="#9998A8" fontSize="10px">
          Raised {raised} / {moneyGoal} NEAR
        </Text>
        <Box
          mt="20px"
          mx="-13px"
          mb="-13px"
          borderBottomRadius="20px"
          height="30px"
          bg={statusObject.bg}
          color={statusObject.color}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text>{statusObject.text}</Text>
        </Box>
      </Box>
    </Box>
  );
};
