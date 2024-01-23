import { TableRow, TableHeaderCell } from "semantic-ui-react";


export const CityListTableHeaders = () => {
    return (
        <TableRow>
            <TableHeaderCell width={3}>Geo Name Id</TableHeaderCell>
            <TableHeaderCell width={3}>Name</TableHeaderCell>
            <TableHeaderCell width={3}>Country</TableHeaderCell>
            <TableHeaderCell width={5}>Sub Country</TableHeaderCell>
            <TableHeaderCell width={2}>Tools</TableHeaderCell>
        </TableRow>
    );
}

export default CityListTableHeaders;