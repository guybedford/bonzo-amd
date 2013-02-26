Bonzo AMD
==

Bridge module for the [Bonzo](https://github.com/ded/bonzo) library for use in [AMD Query](https://github.com/guybedford/amdquery).

### Install

With [Volo](http://volojs.org):

```
  volo add guybedford/bonzo-amd
```

### Usage

```javascript
  require(['amdquery!bonzo'], function($) {
    $('#myelement').css('color', 'red');
  });
```

For the list of API methods, see the [Bonzo API](https://github.com/ded/bonzo#complete-bonzo-api).
