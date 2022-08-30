import { Box, Heading, Image, LinkBox, List, ListIcon, ListItem, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react"
import { MdCheckCircle, MdSettings } from "react-icons/md"
import { capitalizeFirstLetter, pokemonColors, returnPrice } from "../../../../core/hooks"
import { Container, ImageContainer, ImageContent, Content } from "./styles"
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { IPokemon, IPossiblePokemonKeys } from "../../../../core/interfaces";
import { MinusIcon } from '@chakra-ui/icons'
import { PromocaoText } from "../../../pokemonScreen/components/ProductContainer/styles";

interface ICartItem {
  pokemon: { _id: string; name: string; front_default: string; height: number, type: "fire" | "grass" | "electric" | "water" | "ground" | "rock" | "fairy" | "poison" | "bug" | "dragon" | "psychic" | "flying" | "fighting" | "normal" }
}

export function CartItem({ pokemon }: ICartItem) {

  const pokemonColor = pokemonColors({ pokemonType: pokemon.type })

  const ImageBox = () => {
    return <ImageContainer
      pokemonColor={pokemonColor}
    >
      <ImageContent
        pokemonColor={pokemonColor}
      >
        <Image boxSize='100px' src={pokemon.front_default} />
      </ImageContent>
    </ImageContainer>
  }

  return (
    <Container>
      <ImageBox />
      <Content>
      <LinkBox
      marginLeft={8}
      as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                    <Heading size='md' my='2'>
                        {capitalizeFirstLetter(pokemon.name)}
                    </Heading>
                    <Stat>
                        <StatHelpText>$  {(returnPrice(pokemon.height) * 1.8).toFixed(2)}</StatHelpText>
                    </Stat>
                    <Heading size='lg' my='0'>
                        $ {returnPrice(pokemon.height).toFixed(2)}
                    </Heading>
                    <PromocaoText>em<div style={{ color: pokemonColor.primary }}>10x {(returnPrice(pokemon.height) / 10).toFixed(1)}</div><div style={{ color: pokemonColor.primary }} id='cents'>00</div> <div style={{ color: pokemonColor.primary }}>sem juros</div></PromocaoText>
                </LinkBox>

        <Stat
          marginLeft={8}
        >
          <StatLabel>Price</StatLabel>
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