import React from 'react'
import styled from 'styled-components'

const Column = styled.div`
    flex: 2;
    padding-right: 100px;

    @media only screen and (max-width: 1440px) {
        flex: 1.5;
        padding-right: 50px;
    }

    @media only screen and (max-width: 1024px) {
        order: 1;
        padding-right: 0;
    }
`

const Header = styled.h2`
    font-weight: 600;
`

const Paragraph = styled.p`
    text-indent: 20px;
    line-height: 1.3;
    font-weight: 400;
`

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-left: 18px;
    font-size: 14px;
    flex: 1;

    @media only screen and (max-width: 400px) {
        justify-content: space-between;
    }
`

const ListItem = styled.li`
    text-transform: uppercase;
    flex-basis: 230px;
    margin: 3px 0;
`

function Description() {
    return (
        <Column>
            <Header>About Me</Header>
            <Paragraph>
                Hey, my name is Kary, I am a React developer based in Vancouver, BC. I am someone who likes to be flexible and keep an open mind with what and whomever I am working with. I am also a diverse team player knowledgeable in multiple industries such as construction, fitness, health, and technology. I graduated from Brainstation coding bootcamp here in Vancouver 3 years ago. Before web development I do renovation and construction with my father in the lower mainland area. My passion for building and repairing things eventually lead me to pursue a career in web development. After Brainstation I created a variety of different projects to explore new technologies and volunteered at multiple startups. Currently in the process of searching for a full time position as a developer.
            </Paragraph>

            <Paragraph>
                If you would like to know more about me or my journey or, if you want to collaborate on a project free to reach out to me on <a href="https://www.linkedin.com/in/kary-ma/">linkedin</a>.
            </Paragraph>

            <Header>Skills</Header>

            <List>
                <ListItem>Html5</ListItem>
                <ListItem>Css3</ListItem>
                <ListItem>Sass</ListItem>
                <ListItem>Javascript</ListItem>
                <ListItem>Typescript</ListItem>
                <ListItem>Node</ListItem>
                <ListItem>Git</ListItem>
                <ListItem>Express</ListItem>
                <ListItem>React</ListItem>
                <ListItem>Redux</ListItem>
                <ListItem>Next</ListItem>
                <ListItem>Jest</ListItem>
                <ListItem>React-Testing-Library</ListItem>
                <ListItem>Styled-Components</ListItem>
                <ListItem>Mongodb</ListItem>
                <ListItem>MySql</ListItem>
                <ListItem>Webpack</ListItem>
                <ListItem>Electron</ListItem>
                <ListItem>Socket.io</ListItem>
                <ListItem>Strapi</ListItem>
                <ListItem>Stripe</ListItem>
                <ListItem>Python</ListItem>
                <ListItem>Django</ListItem>
                <ListItem>Ruby</ListItem>
                <ListItem>Ruby on Rails</ListItem>
                <ListItem>AWS</ListItem>
                <ListItem>Figma</ListItem>
            </List>
        </Column>
    )
}

export default Description
