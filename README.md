# To use React customizable star rating

## Steps to use the package

- Install the package `npm i react-customizable-star-rating` this will add the package to your project
- Import the package `import {StarRating} from "react-customizable-star-rating";`

### Basic usage

`<StarRating onSetRating={onRating} />` You need to replace this `onRating` with you own useState hook

### Customization

You can pass these props to make sure that it's more suitable for you

| # | Prop          | Type     | Default value  | Description                                                                          | Mandatory                             |
|---|---------------|----------|----------------|--------------------------------------------------------------------------------------|---------------------------------------|
| 1 | onSetRating   | Function | -----------    | useState hook to get/set the rating                                                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ |
| 2 | defaultRating | Number   | 0              | Initial rating to view                                                               | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ |
| 3 | maxRating     | Number   | 5              | Stars Number                                                                         | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ |
| 4 | color         | String   | #FCC419        | The stars filing and number color                                                    | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ |
| 5 | size          | Number   | 48 in pixel    | The size of the stars this will impact the number size                               | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ |
| 6 | borderColor   | String   | color= #FCC419 | The stars border color                                                               | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ |
| 7 | className     | String   | ''             | Class name for the stars container                                                   | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ |
| 8 | messages      | Array    | []             | Array of messages to display when the user rating ex. instead of 1 => poor and so on | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ |
| 8 | viewOnly      | boolean  | false          | To disable the rating functionality and make it a view only component                | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌ |

###### For any suggestion/improvement please use [GitHub repo URL](https://github.com/aayman997/react-customizable-star-rating/)
