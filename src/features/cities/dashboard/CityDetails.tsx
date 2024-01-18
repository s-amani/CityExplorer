import React, { useContext } from "react";
import { CityContext } from "../../../app/services/cityContext";
import { Card, CardContent, CardHeader, CardMeta, CardDescription, Button, ButtonGroup } from "semantic-ui-react";

export default function CityDetail() {

    const { selectedCity, cancelSelectCity } = useContext(CityContext);

    return (
        <Card fluid color="teal">
            <CardContent>
                <CardHeader>{selectedCity!.name}</CardHeader>
                <CardMeta>
                    <span className='date'>{selectedCity!.geonameid}</span>
                </CardMeta>
                <CardDescription>
                    <span>{selectedCity!.name} - {selectedCity!.subcountry}</span>
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <ButtonGroup widths="2">
                    <Button basic onClick={cancelSelectCity} color="blue" content="Close"/>
                </ButtonGroup>
            </CardContent>
        </Card>
    )
}