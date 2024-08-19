import { Box } from "@chakra-ui/react";

const ItemListConteiner = ({greeting})=>{
    return( 
        <Box
            width={"100vw"}
            height={"90vh"} 
            display={"flex"} 
            alignItems={"center"} 
            justifyContent={"center"}
        >
            {greeting}
        </Box>
    );
};

export default ItemListConteiner;