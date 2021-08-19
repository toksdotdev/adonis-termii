# Adonis Termii

[Termii](https://www.termii.com) provider for AdonisJS.

## Installation

Simply run:

```
adonis install adonis-termii
```

Add Termii provider to your AdonisJS application located at `start/app.js`:

```js
const providers = [
  // ...
  "adonis-termii/providers/TermiiProvider",
];
```

Add to your `.env` file

```
TERMII_KEY=
```

## Usage

Simply call it using:

```js
const Termii = use("Termii");
```

## Examples

### Sending SMS (Generic & Whatsapp)

```js
const Termii = use("Termii");

const sendSms = async () => {
  // Send Whatsapp message
  const whatsapp = await Termii.sendSms(
    "talert",
    "+2348123456789",
    "This is the ship that made the Kessel Run in fourteen parsecs?",
    { chanel: "whatsapp" }
  );

  // Send generic text message
  const generic = await Termii.sendSms(
    "talert",
    "+2348123456789",
    "This is the ship that made the Kessel Run in fourteen parsecs?"
  );

  console.log(whatsapp.message_id);
  console.log(generic.message_id);
};
```

## Official Documentation

For more information, kindly check out the [Termii Official Documentation](https://developers.termii.com/messaging).

## Contributing

If you find any issue, bug or missing feature, please kindly create an issue or submit a pull request.

## License

Adonis Termii is open-sourced software licensed under the MIT license.
