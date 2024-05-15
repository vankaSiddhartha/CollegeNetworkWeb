import {
  Button,
  Flex,
  Heading,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  Center,
} from '@chakra-ui/react';

export default function LandingPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('gray.800', 'white');
  const textColor = useColorModeValue('white', 'gray.800');
  const buttonBg = useColorModeValue('blue.500', 'blue.300');
  const buttonHoverBg = useColorModeValue('blue.600', 'blue.400');
const shareText = 'Share this in your college WhatsApp group if you\'re a Thalas fan because Thala for a reason.';
const handleShare = () => {
  const message = encodeURIComponent(shareText);
  const whatsappUrl = `https://wa.me/?text=https://collegenetwork.vercel.app/`;

  window.open(whatsappUrl, '_blank');
};
const openApp = ()=>{
    window.open("https://drive.google.com/file/d/1HHm5DPMYSnQ_QfMG4X46t8S0rsy40Fm7/view?usp=sharing",'_blank')
}


  return (
    <Stack bg={bg} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={{ base: 4, md: 8 }} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={{ base: 'md', md: 'lg' }}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color={textColor}>
            <Text as={'span'} bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
              College Network
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.400'}>
            Get ready for the ultimate social platform designed exclusively for college students! College Network is
            coming soon, where you'll be able to share your experiences, seek academic advice, and connect with peers
            across campuses.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align={{ base: 'stretch', md: 'center' }}>
            <Button onClick={openApp} rounded={'full'} bg={buttonBg} color={'white'} _hover={{ bg: buttonHoverBg }} size={{ base: 'sm', md: 'md' }}>
              Download Beta version
            </Button>
            <Button
              rounded={'full'}
              variant="outline"
              color={textColor}
              size={{ base: 'sm', md: 'md' }}
              onClick={onOpen}
            >
              Don't click me
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} align={'center'} justify={'center'} p={{ base: 4, md: 8 }}>
        <Image
          alt={'Login Image'}
          objectFit={'contain'}
          maxW={'60%'}
          src={
            'https://firebasestorage.googleapis.com/v0/b/college-network-f83f1.appspot.com/o/images%2Fcn_mobile.png?alt=media&token=5882ce5c-df62-466d-bb08-5ea0105ad009'
          }
        />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share with your college group</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              alt={'Dhoni Image'}
              marginStart={'20'}
              objectFit={'contain'}
              maxW={'50%'}
              src={
                'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png'
              }
              mb={4}
            />
            <Text>{shareText}</Text>
            <Button onClick={handleShare}>Share</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
}
