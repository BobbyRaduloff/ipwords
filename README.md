# ipwords
Simple library that transforms IPv4 addresses into easy to remember word strings.

# Installation
`npm i ipwords`

# Command-line Usage
To encode an IP address to a string:
`ipwords -d "192.0.0.1"`

To decode an IP address from a string:
`ipwords -d "not that that tennis"`

# Library Usage
The library consists of two functions:
`decodeIP(wordcombo)`:
- Accepts a string, returns an IP
- Will throw an `Error` if `wordcombo` is not exactly 4 space-delimited words

`encodeIP(ip)`:
- Accepts an IP, returns a string
- Will throw an `Error` if `ip` is not a valid IPv4 address
