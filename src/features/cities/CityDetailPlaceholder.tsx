import { Card, CardContent, CardHeader, CardDescription } from "semantic-ui-react";

export const CityDetailPlaceholder = () => {

    return (
        <Card fluid color="teal">
            <CardContent>
                <CardHeader>City details</CardHeader>
                <CardDescription>
                    Please click on any individual row item to get the information about the selected city.
                </CardDescription>
            </CardContent>
        </Card>
    )
}

export default CityDetailPlaceholder;