# :date: Holidates
Calculate floating/moving holidays during the academic year in Google Sheets/Google Apps Script. Particularly intended for teachers using GSheets to plan the next year's events. 

## :books: About
*"Wait...when is Easter?*" 

That phrase is uttered at many end-of-year scheduling meetings when planning the events for the next academic year. Holiday dates are simple, except when they move! Even though academic calendars are usually cylical, many teachers and staff have to manually adjust dates in their calendars/spreadsheets for moving holidays. But there is an easier way - automate (as much as possible) the academic calendar creation process! One sticking point is always holiday dates. Holidates aims to help that.      

## :calendar: Supported Holidays
- :turkey: Thanksgiving Break (Wed. before Thanksgiving)
- :heart: Valentine's Day (returns the Friday before if it falls on the weekend for event purposes)
- :busts_in_silhouette: Dr. Martin Luther King, Jr. Day
- :rabbit2: Easter (both :latin_cross: Western and :orthodox_cross: Orthodox) and Good Friday
- :star_of_david: Jewish Holidays (with help from [hebcal.com](https://www.hebcal.com/home/developer-apis)): Passover, Hanukka, Rosh Hashanah, Yom Kippur

**Disclaimer:** *This is a hobby project for a specific use. Every academic calendar is unique. Holidays were chosen out of necessity rather than exclusion. More holidays that would benefit teachers and schools in a diverse array of cultures and contexts are welcome.*

## :tada: Installation and Use

### Basic Installation
*Instructions coming soon...*

### Use as a Custom Function in Google Sheets



**Example:**
```swift
// Format:
//    =getHoliday(holiday, academic_year)

// Supports single year
=getHoliday("easter","2023")

// or full academic year 

=getHoliday("easter","2022-2023") 
```
### Examples
| Holiday                     | GSheets Example                           |
|-----------------------------|-------------------------------------------|
| Thanksgiving                | =getHoliday("thanksgiving",2022)          |
| ThanksgivingBreak           | =getHoliday("thanksgivingbreak",A1)       |
| Martin Luther King, Jr. Day | =getHoliday("mlk","2022-2023")            |
| Easter (Western)            | =getHoliday("easter","2022-2023")         |
| Easter (Orthodox)           | =getHoliday("orthodoxeaster","2023")      |
| Passover                    | =getHoliday("passover",A1)                |

### Use in Apps Script
```javascript
// Same script
var easter = getHoliday("easter","2022-2023")

// or as a separate library script
var easter = Holidates.getHoliday("easter","2022-2023")
```
## :pushpin: What about fixed date holidays? 
### As a formula in GSheets
Not all holidays float. For fixed date holidays, use the =DATE function. 
```swift
//Use DATE(year,month,day)
=DATE(2022,12,25)

// Example: The current year (e.g. 2022) is in cell A1
=DATE(A1,12,25)

// Example: Your academic year is in cell A1 (e.g. 2022-2023)

//  First semester (left four characters)
=DATE(LEFT(A1,4),12,25)

//  Second semester (right four characters)
=DATE(RIGHT(A1,4),5,1)
```

### In Apps Script
Dates in Apps Script/JavaScript can get complicated quickly. You can read the [documentation](https://developers.google.com/google-ads/scripts/docs/features/dates) to learn more. If you get frustrated, watch [this](https://www.youtube.com/watch?v=-5wpm-gesOY).
```javascript

// Dates in Apps Script/JavaScript can be complicated
var schoolStarts = new Date("September 1, 2022");
var fallYear = schoolStarts.getFullYear(); 
var springYear = fallYear + 1
var halloween = new Date("October 31,"+fallYear.toString()); // the comma is important!
var stPatrick = new Date("March 17,"+springYear.toString());
```

## :muscle: Need Something Stronger?
- Several APIs (like [Holiday API](https://holidayapi.com/)) are available as a paid service. 
- Free options like ([this api](https://date.nager.at/Api)) and subscriptable Google Calendars with public holidays are available but might be limited.

## :mega: Shoutouts
- Sources are credited as much as possible in the code itself.
- [hebcal.com](https://hebcal.com) for their amazing resources (and [api](https://www.hebcal.com/home/developer-apis)).
- Tom Scott: [The Problem With Time & Timezones](https://www.youtube.com/watch?v=-5wpm-gesOY)
