import { Box, Image, List, ListIcon, ListItem, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react"
import { MdCheckCircle, MdSettings } from "react-icons/md"
import { pokemonColors, returnPrice } from "../../../../core/hooks"
import { Container, ImageContainer, ImageContent, Content } from "./styles"
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { IPokemon } from "../../../../core/interfaces";


interface ICartItem{
  pokemon:IPokemon
}

export function CartItem({pokemon}:ICartItem) {

  const pokemonColor = pokemonColors({ pokemonType: 'fire' })

  const ImageBox = () => {
    return <ImageContainer
      pokemonColor={pokemonColor}
    >
      <ImageContent
        pokemonColor={pokemonColor}
      >
        <Image  boxSize='100px' src={pokemon.front_default}/>
      </ImageContent>
    </ImageContainer>
  }

  return (
    <Container>
      <ImageBox />
      <Content>
        <List marginLeft={8} marginBottom={10} spacing={3}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={pokemonColor.name} />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={pokemonColor.name} />
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={pokemonColor.name} />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={MdSettings} color={pokemonColor.name} />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
        </List>

        <Stat
          marginLeft={8}
        >
          <StatLabel>Collected Fees</StatLabel>
          <StatNumber
          >${returnPrice(pokemon.height)}</StatNumber>
          <StatHelpText
            display={'flex'}
            flexDirection='row'
          >Base Experience {pokemon.height} <Box
            marginLeft={2}
          >{pokemon.height < 15 ?
            <AiFillCaretDown

              color={pokemonColor.primary}
              size={20}
            /> :
            <AiFillCaretUp
              color={pokemonColor.primary}
              size={20}
            />
              }</Box>
          </StatHelpText>
        </Stat>
      </Content>
    </Container>
  )
}