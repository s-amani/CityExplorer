import { useContext } from "react";
import { Grid, Segment } from "semantic-ui-react";
import CityList from "./CityList";
import CityDetail from "./CityDetails";
import { CityContext } from "../../../app/services/cityContext";

export default function CityDashboard() {

    const { selectedCity } = useContext(CityContext);

    return (
        <Grid>
            <Grid.Column width='10'>
                <Segment>
                    <CityList />
                </Segment>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedCity && <CityDetail />}
            </Grid.Column>
        </Grid>
    )
}