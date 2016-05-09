# jQuery FlowText Plugin
jQuery plugin for responsive font-size

## Usage

1. Include jQuery:

	```html
	<script src="path/to/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="path/to/jquery.flowtext.js"></script>
	```

3. Call the plugin:

	```javascript
	// Default configuration
	$('.flowtext-element').flowtext();

	// Custom configuration
	$('.flowtext-element').flowtext({
		// configd
	});
	```

## Downloads

* [Source](https://raw.githubusercontent.com/libeo-vtt/jquery-flowtext/master/dist/jquery.flowtext.js)
* [Minified version](https://raw.githubusercontent.com/libeo-vtt/jquery-flowtext/master/dist/jquery.flowtext.min.js)

## Configuration

#### `minFontSize`

> **Type:** Integer<br>
**Default value:** 16

Minimum flowtext font-size

---

#### `maxFontSize`

> **Type:** Integer<br>
**Default value:** 20

Maximum flowtext font-size

---

#### `minScreenWidth`

> **Type:** Integer<br>
**Default value:** 320

Minimum screen width for flowtext

---

#### `maxScreenWidth`

> **Type:** Integer<br>
**Default value:** 1024

Maxiumum screen width for flowtext

---

## History

Check [Releases](../../releases) for detailed changelog.

