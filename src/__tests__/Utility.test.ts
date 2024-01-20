import { City } from "../app/models/city";
import { UnsortedCityListData } from "../app/utils/CityMockData";
import { ArrayHelper } from "../app/utils/arrayHelpers";

test('Sort function returns as expected', () => {
    // Arrange
    const expected = [
        {
            country: "Andorra",
            geonameid: 3041563,
            name: "Andorra la Vella",
            subcountry: "Andorra la Vella"
        },
        {
            country: "United Arab Emirates",
            geonameid: 290594,
            name: "Umm al Qaywayn",
            subcountry: "Umm al Qaywayn"
        },
        {
            country: "Bandorra",
            geonameid: 3040051,
            name: "les Escaldes",
            subcountry: "Escaldes-Engordany"
        }
    ]

    // Act
    const result = ArrayHelper.sort<City>(UnsortedCityListData, "name");

    // Assert
    expect(result).toEqual(expected);
});