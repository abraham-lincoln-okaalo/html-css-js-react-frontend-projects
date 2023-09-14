import React from "react"
import JumboData from "../fixtures/jumbo.json"
import { Jumbotron } from "../components"

export function JumbotronContainer(){
    return (
        <Jumbotron.Container>
            {JumboData.map((item) => (
                <Jumbotron key={item.id} direction={item.direction}>
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.titles}</Jumbotron.Title>
                        <Jumbotron.Subtitle>{item.subtitle}</Jumbotron.Subtitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image src={item.image} alt={item.alt} />
                    </Jumbotron.Pane>
                </Jumbotron>
            ))}
        </Jumbotron.Container>
    )
}