# :date: Holidates
Calculate floating/moving holidays during the academic year in Google Sheets/Google Apps Script. Particularly intended for teachers using GSheets to plan the next year's events. 

## :pencil2: About
*"Wait...when is Easter?*" 

That phrase is uttered at many end-of-year scheduling meetings when planning the events for the next academic year. Holiday dates are simple, except when they move! Even though academic calendars are usually cylical, many teachers and staff have to manually adjust dates in their calendars/spreadsheets for moving holidays. But there is an easier way - automate (as much as possible) the academic calendar creation process! One sticking point is always holiday dates. Holidates aims to help that.      

## :calendar: Supported Holidays
- :turkey: Thanksgiving Break (Wed. before Thanksgiving)
- :heart: Valentine's Day (returns the Friday before if it falls on the weekend for event purposes)
- :busts_in_silhouette: Dr. Martin Luther King, Jr. Day
- :latin_cross: Easter
- :star_of_david: Jewish Holidays (with help from [hebcal.com](https://www.hebcal.com/home/developer-apis)): Passover, Hanukka, Rosh Hashanah, Yom Kippur

**Disclaimer:** *This is a hobby project for a specific use. Every academic calendar is unique. Holidays were chosen out of necessity rather than exclusion. More holidays that would benefit teachers and schools in a diverse array of cultures and contexts are welcome.*

## :tada: Installation and Use

### Basic Installation
If you are unfamiliar with Apps Script, follow these steps to use Holidates:
- In Google Sheets, click "Extensions" then "Apps Script"
- Cut/paste all of the code from holidates.gs in this repo into Apps Script (below myFunction())
- Click save
- You will now be able to use the custom function =holidates in your sheet 


### Use as a Custom Function in Google Sheets
**Format:** 

=holidates(holiday, academic_year)

**Example:**
```
=holidates("easter","2023")

or 

=holidates("easter","2022-2023") 
```

### Use in Apps Script
```javascript
// Same script
var easter = holidates("easter","2022-2023")

// or as a separate library script
var easter = Holidates.holidates("easter","2022-2023")
```

## :muscle: Need Something Stronger?
- Several APIs (like [Holiday API](https://holidayapi.com/)) are available as a paid service. 
- Free options like ([this api](https://date.nager.at/Api)) and subscriptable Google Calendars with public holidays are available but might be limited.

## :mega: Shoutouts
- Sources are credited as much as possible in the code itself.
- [hebcal.com](https://hebcal.com) for their amazing resources (and [api](https://www.hebcal.com/home/developer-apis)).
