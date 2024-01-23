import { useContext } from "react";
import { CityContext } from "../../app/services/cityContext";
import { Card, CardContent, CardHeader, CardMeta, CardDescription, Button, ButtonGroup } from "semantic-ui-react";

export const CityDetail = () => {

    const { selectedCity, cancelSelectCity } = useContext(CityContext);
    const description = <>
        The city of 
        <b> {selectedCity!.name} </b>
        has GeoNameID: 
        <b> {selectedCity!.geonameid} </b>
        and is in Country: 
        <strong> {selectedCity!.country} </strong>.
    </>

    return (
        <Card fluid color="teal">
            <CardContent>
                <CardHeader>{selectedCity!.name}</CardHeader>
                <CardMeta>
                    <span className='date'>{selectedCity!.geonameid}</span>
                </CardMeta>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <ButtonGroup widths="2">
                    <Button basic onClick={cancelSelectCity} color="blue" content="Close" />
                </ButtonGroup>
            </CardContent>
        </Card>
    )
}

export default CityDetail;