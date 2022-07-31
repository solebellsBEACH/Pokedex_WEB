import React, { useEffect, useState } from 'react'
import { Container, TabSelectorContainer, TabSelectorText, ContentTop, ContentBottom } from './styles'

interface IPokemonTabsGrid {
    filtersActiveds: string[];
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
    activeTab: string;
}

export const PokemonTabsGrid = ({ filtersActiveds, setActiveTab, activeTab}: IPokemonTabsGrid) => {
    {/* {filtersActiveds.map((item, index)=><Tab 
                    onClick={()=>{console.log(item)}}
                    key={item+index}>{item}</Tab>)} */}

    const TabSelector = (props: { label: string }) => {
        const { label } = props;
        return <TabSelectorContainer
            onClick={() => {
                // console.log('Clickou no ' + label)
                setActiveTab(label)
            }}
            isActive={activeTab == label}>
            <TabSelectorText isActive={activeTab == label}>{label}</TabSelectorText>
        </TabSelectorContainer>
    }
    return (
        <Container>
            <ContentTop>
                {filtersActiveds.map((item, index) => <TabSelector key={index + item} label={item} />)}
            </ContentTop>
            <ContentBottom>
            </ContentBottom>
        </Container>
    )
}