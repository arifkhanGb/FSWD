import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import btcimg from "../assets/btc.png"

// const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";

const Footer = () => {
  return (
    <Box
      backgroundColor={"black"}
      color={"white"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} >About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price. 
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={btcimg} />

          <Text>Crypto Currency.</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;