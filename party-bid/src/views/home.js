import React, { useEffect, useState, useRef, useCallback } from "react";
import { Layout } from "../components/Layout";
import { Box, Text, Image, Button, useDisclosure } from "@chakra-ui/react";
import ORB from "../assets/orb.svg";
import AVATAR from "../assets/avatar.svg";
import { NFTCard } from "../components/NFTCard";
import { LiveFeed } from "../components/LiveFeed";
import { Footer } from "../components/Footer";
import NearLogo from "../assets/near_logo.svg";
import { CreateTeamModal } from "../components/CreateBlocModal";
import { Coin1, Coin2 } from "../components/svgs";
import { useSpring, a, to } from "react-spring";
export const Home = () => {
  const {
    isOpen: isCreateBlockModalOpen,
    onOpen: onCreateBlocOpen,
    onClose: onCreateBlocClose,
  } = useDisclosure();
  const [{ st }, api] = useSpring(() => ({ st: 0 }));
  const [scrollTop, setScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      const t = ref.current?.getBoundingClientRect();
      setScrolling(t.top - scrollTop <= 0);
      if (scrolling) {
        api.start({ st: e.target.documentElement.scrollTop / 20 });
      } else {
        api.set();
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const AnimatedBox = a(Box);
  const ref = useRef(null);
  return (
    <Layout>
      {/* BG */}
      <Box
        position="absolute"
        height="500px"
        width="100%"
        bg="linear-gradient(#FDE0CD, #FFFCF3)"
        left="0"
        top="0"
        right="0"
        zIndex={-1}
      />
      <Image
        display={["none", null, "unset"]}
        position="absolute"
        src={ORB}
        right="0"
        top="100px"
        zIndex={-1}
      />
      <Box
        display={["flex", null, "unset"]}
        flexDir="column"
        alignItems={["center", null, "unset"]}
        mt="68px"
        fontWeight="700"
        fontSize="48px"
        lineHeight="58px"
      >
        <Box
          mt={[null, null, "60px"]}
          textAlign={["center", null, "unset"]}
          width="100%"
        >
          <Text>Join a team, pool NEAR</Text>
          <Text>
            Buy NFTs
            <Box
              ml="14px"
              as="span"
              background="linear-gradient(90.85deg, #4C5CE6 35.33%, #F95D12 62.15%)"
              backgroundClip="text"
            >
              together
            </Box>
          </Text>
          <Text fontWeight="500" fontSize="14px">
            Buy, tokenize, and sell NFTs on
            <Box ml="4px" as="span" color="#5951BF">
              NEAR
            </Box>
            , now with friends
          </Text>
        </Box>
        <Box display="flex" sx={{ columnGap: "10px" }}>
          <Button variant="primary" onClick={onCreateBlocOpen}>
            Create your BLOC
          </Button>
          <Button variant="outline">Join a BLOC</Button>
        </Box>
      </Box>
      <Box mt={["90px", null, "250px"]}>
        <Text mb="24px" fontSize="28px" fontWeight="700">
          Trending BLOCs
        </Text>
        <Box
          display="grid"
          justifyItems="center"
          gridTemplateColumns={["1fr", "1fr 1fr", null, "1fr 1fr 1fr"]}
          gap={["20px", "12px"]}
        >
          {["Lost", "Won", "Live"].map((status, idx) => (
            <NFTCard key={idx} moneyGoal={10} raised={3} status={status} />
          ))}
        </Box>
        <Box mt="24px" display="flex" justifyContent="center">
          <Button variant="primary" px="30px">
            See all BLOCs
          </Button>
        </Box>
        <Box mt="72px" display="flex" position="relative">
          <Box maxW={["100%", null, null, "700px"]} width="100%">
            <Box>
              <Text fontSize="36px" fontWeight="bold">
                Create a token and reap rewards
              </Text>
              <Text>
                BLOCfrens lets you create a BLOC collective to pool money and
                buy an NFT on NEAR. We help you create a token for members of
                your BLOC to hold and sell your NFT, together.
              </Text>
              <Box mt="20px" display="flex" sx={{ columnGap: "10px" }}>
                <Button variant="primary" onClick={onCreateBlocOpen}>
                  Create your BLOC
                </Button>
                <Button variant="outline">Join a BLOC</Button>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              position="absolute"
              display={["none", null, null, "unset"]}
              ref={ref}
            >
              <AnimatedBox
                position="absolute"
                style={{
                  transform: st.to(
                    (st) => `translate3d(${st}px, ${st}px, ${st}px)`
                  ),
                }}
              >
                <Coin1 />
              </AnimatedBox>
              <AnimatedBox
                position="absolute"
                sx={{
                  left: "117px",
                  top: "-55px",
                }}
                style={{
                  transform: st.to(
                    (st) => `translate3d(${-st}px, ${-st}px, ${-st}px)`
                  ),
                }}
              >
                <Coin2 />
              </AnimatedBox>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={["50px", null, "100px"]}>
        <Text mb="24px" fontSize="28px" fontWeight="700">
          Latest BLOC Activity
        </Text>
        <Box mb="100px">
          <LiveFeed
            feed={[
              {
                type: "Contribution",
                user: { name: "user.near", avatar: AVATAR },
                amount: "1.5 NEAR",
                blocName: "makeoBLOC",
              },
              {
                type: "Contribution",
                user: { name: "user.near", avatar: AVATAR },
                amount: "1.5 NEAR",
                blocName: "makeoBLOC",
              },
              {
                type: "Contribution",
                user: { name: "user.near", avatar: AVATAR },
                amount: "1.5 NEAR",
                blocName: "makeoBLOC",
              },
              {
                type: "Contribution",
                user: { name: "user.near", avatar: AVATAR },
                amount: "1.5 NEAR",
                blocName: "makeoBLOC",
              },
              {
                type: "Contribution",
                user: { name: "user.near", avatar: AVATAR },
                amount: "1.5 NEAR",
                blocName: "makeoBLOC",
              },
              {
                type: "Contribution",
                user: { name: "user.near", avatar: AVATAR },
                amount: "1.5 NEAR",
                blocName: "makeoBLOC",
              },
              {
                type: "Contribution",
                user: { name: "user.near", avatar: AVATAR },
                amount: "1.5 NEAR",
                blocName: "makeoBLOC",
              },
              {
                type: "Contribution",
                user: { name: "user.near", avatar: AVATAR },
                amount: "1.5 NEAR",
                blocName: "makeoBLOC",
              },
            ]}
          />
        </Box>
      </Box>
      <CreateTeamModal
        isOpen={isCreateBlockModalOpen}
        onClose={onCreateBlocClose}
      />
    </Layout>
  );
};
