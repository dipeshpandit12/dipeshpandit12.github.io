import { Grid,GridItem } from "@chakra-ui/react";
import Navbar from "../components/mainComponents/Navbar";
import Footer from "../components/mainComponents/Footer";

// eslint-disable-next-line react/prop-types
export default function Rootlayout({children}){
    return(
        <>
        <Grid
            height="100vh"
            templateRows='repeat(10, 1fr)'
            templeteColumns="repeat(6,1fr)"
        >
            <GridItem   bg='white' rowSpan={1} colSpan={6}>
            {/* note here: rowspan means how many row do you want to give for that section, and same is for colspan */}
                <Navbar/>
            </GridItem>

            <GridItem  rowSpan={9}  colSpan={6} bg='lightblue'>
            {children}
            </GridItem>

            <GridItem  rowSpan={1} colSpan={6}>
                <Footer/>
            </GridItem>
        </Grid>
        </>
    )
}