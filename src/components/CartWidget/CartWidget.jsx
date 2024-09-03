import { Flex, Text} from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
    return (
        <Flex 
            align={"center"}
            height={"100%"} 
            justifyContent={"space-between"} 
            width={"60px"}>
            <BsCart3 size={25}/>
            <Text fontSize={"1.5rem"}> 0</Text>
        </Flex>
    )
}

export default CartWidget;