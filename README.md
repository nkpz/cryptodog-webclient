[![bitHound Score](https://www.bithound.io/github/Cryptodog/cryptodog-webclient/badges/score.svg)](https://www.bithound.io/github/Cryptodog/cryptodog-webclient)

# Cryptodog

Cryptodog is a community fork of the popular encrypted messaging app, [Cryptocat](https://crypto.cat). While we're thankful to the Cryptocat team for their work, development on Cryptocat has sadly come to a standstill, leaving many unresolved bugs and missing features.

The goal of Cryptodog is to make encryption even easier to use by addressing Cryptocat's shortcomings and actively improving the app.

### Usage
A Chrome extension will be available soon.

Until then, you can either build your own extension from source, or run Cryptodog from our hosted client at https://cryptodog.github.io/cryptodog-webclient. Note that once extensions are released for most major browsers, this will likely be removed as an option.

### Differences from Cryptocat
* Dark theme with more contrast, easier on eyes
* Better tab-complete
* Loads faster
* Vector icons (better scaling on hiDPI displays and zoom levels other than 100%)
* Slight animation tweaks and additions
* Your ignore list persists across your session 
* Colored names in chat to improve readability
* Desktop notifications
* Unicode emoticons
* Easier to localize
* And of course, different bugs (if you catch any, please don't hesitate to open an issue or pull request here!)

### Important note on security

Please note that Cryptodog is experimental software, and unlike Cryptocat, has not had an independent security audit or code review. Although we have purposely avoided touching the underlying cryptography thus far, it is absolutely possible that Cryptodog introduces vulnerabilities not present in Cryptocat. Please **do not** use this app if you're in a high-risk situation or have any doubts about your safety.

### Coding Style

When working on the code, please follow these rules:
* Use semicolons at the end of statements
* Use double-quotes (" ") instead of single-quotes (' ') for strings
* Use `item.key` notation instead of `item["key"]` notation when possible

### Thanks
* xor - UI Rework, miscellaneous patches
