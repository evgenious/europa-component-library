# Datepickers

## Why and how to use this component

Users need a way to scan quickly a date related to an event.

This component appears when you need to enter a date.

By clicking in the date field a pop-up displays a calendar. It allows the user
to select a time or a date value instead of typing it. This greatly reduces the
likelihood of mistakes.

### When to use this component

* on the filter component, date field

### Do not use this component

* outside of the filter component

## Implementation notes

To instantiate the JavaScript behaviors:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  ECL.datepickers({
    field: document.getElementById('datepicker'),
    firstDay: 1,
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000, 2020],
  });
});
```

Where options passed to `ECL.datepickers` match signature of [Pikaday](https://github.com/dbushell/Pikaday) library options.

By default `theme: 'ecl-pika-theme'` which will add the necessary styling of ECL on datepickers, no need to pass this option!

Please make sure you detach other libraries from the inputs of type dates like jQuery or its UI datepicker, which will conflict when having several behaviors attached to same elements.

If you need to access the low-level [API methods](https://github.com/dbushell/Pikaday#methods) of `Pika` through the ECL.datepicker, you can do that through the exposed `pika` property.

For example, this way you can show datepicker programatically:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  var datepicker = ECL.datepickers({
    field: document.getElementById('datepicker'),
    firstDay: 1,
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000, 2020],
  });

  datepicker.pika.show();
});
```
