import { Table, TableHeader, TableRow, TableHeaderCell, TableBody, Button, ButtonGroup, Icon } from "semantic-ui-react";
import CityListTableRows from "./CityListTableRows";
import { useContext } from "react";
import { CityContext } from "../../../app/services/cityContext";


export default function CityList() {

    const { doPaging, currentPage } = useContext(CityContext);
    return (
        <>
            <Table color='teal' striped size="large">
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell width={3}>Geo Name Id</TableHeaderCell>
                        <TableHeaderCell width={3}>Name</TableHeaderCell>
                        <TableHeaderCell width={3}>Country</TableHeaderCell>
                        <TableHeaderCell width={5}>Sub Country</TableHeaderCell>
                        <TableHeaderCell width={2}>Tools</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <CityListTableRows />
                </TableBody>
            </Table>
            <ButtonGroup widths="2">
                <Button icon onClick={() => doPaging(currentPage! - 1)} disabled={currentPage === 1}>
                    <Icon name='arrow left' />
                    Prev
                </Button>
                <Button icon onClick={() => doPaging(currentPage! + 1)}>
                    <Icon name='arrow right' />
                    Next
                </Button>
            </ButtonGroup>
        </>
    )
}