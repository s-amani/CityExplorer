import React, { useContext } from "react";
import { TableRow, TableCell, Button } from "semantic-ui-react";
import { CityContext } from "../../../app/services/cityContext";

export default function CityListTableRows() {

    const { paginatedCities, selectCity} = useContext(CityContext);

    return (
        <>
            {paginatedCities.map(city => (
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
            ))}
        </>
    )
}