import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
      overflowX='hidden'
    >
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem
        area='main'
        paddingX={{
          base: 4,
          lg: 10,
        }}
      >
        <GameHeading />
        <Flex>
          <Box marginRight={5}>
            <SortSelector />
          </Box>
          <PlatformSelector />
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
