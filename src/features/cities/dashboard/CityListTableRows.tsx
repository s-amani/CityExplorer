import { useContext } from "react";
import { TableRow, TableCell, Button } from "semantic-ui-react";
import { CityContext } from "../../../app/services/cityContext";
import { City } from "../../../app/models/city";


interface Props {
    city: City
}

export default function CityListTableRows({ city }: Props) {

    const { selectCity } = useContext(CityContext);

    return (
        <>
            <TableRow key={city.geonameid}>
                <TableCell>{city.geonameid}</TableCell>
                <TableCell>{city.name}</TableCell>
                <TableCell>{city.country}</TableCell>
                <TableCell>{city.subcountry}</TableCell>
                <TableCell>
                    <Button
                        primary
                        content="View"
                        onClick={() => selectCity(city.geonameid)}
                    />
                </TableCell>
            </TableRow>
        </>
    )
}