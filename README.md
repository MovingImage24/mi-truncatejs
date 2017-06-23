# mi-truncatejs

The Truncator cuts a given text down to a specific number of lines.

## Usage

```javascript
truncator.truncate('.selector', numberOfLines);
```

This method call will cut your text and appends it with ' [...]' till the text fits in the specified number of lines.
It calculates it by multiplying the number of lines with the css value 'line-height' and comparing it with the css value 'height'.

## Problems

1. The css value 'line-height' has to be set in pixels. If you don't set it, it may be 'normal' or other non-pixel values, which breaks the calculation. 
    ```css
    .selector {
        line-height: 30px;
    }
    ```
2. For the truncator it is necessary that the css files has been fully loaded and processed, otherwise the calculation is working with non-correct css values.
 You should wait to run the truncate function by doing this:
 
    ```javascript
    $(window).bind('load', function(){
        truncator.truncate('.selector', numberOfLines);
    }
    ```