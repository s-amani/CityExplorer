import { useContext } from "react";
import { ButtonGroup, Button, Icon } from "semantic-ui-react";
import { CityContext } from "../../app/services/cityContext";

export const CityListPaging = () => {

    const { currentPage, doPaging } = useContext(CityContext);

    return (
        <ButtonGroup widths="2">
            <Button icon onClick={() => doPaging(currentPage - 1)} disabled={currentPage === 1}>
                <Icon name='arrow left' />
                Prev
            </Button>
            <Button icon onClick={() => doPaging(currentPage + 1)}>
                <Icon name='arrow right' />
                Next
            </Button>
        </ButtonGroup>
    )
}

export default CityListPaging;