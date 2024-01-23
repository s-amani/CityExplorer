import { Table, TableHeader, TableBody } from "semantic-ui-react";
import { useContext } from "react";
import { CityContext } from "../../app/services/cityContext";
import { CityListPaging } from "./CityListPaging";
import { CityListTableRows } from "./CityListTableRows";
import { CityListTableHeaders } from "./CityListTableHeaders";



export const CityList = () => {

    const { paginatedCities } = useContext(CityContext);
    return (
        <>
            <Table color='teal' striped size="large">
                <TableHeader>
                    <CityListTableHeaders />
                </TableHeader>

                <TableBody>
                    {paginatedCities.map(city => (
                        <CityListTableRows key={city.geonameid} city={city} />
                    ))}
                </TableBody>
            </Table>

            <CityListPaging />
        </>
    )
}

export default CityList;