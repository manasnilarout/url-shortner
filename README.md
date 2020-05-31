# url-shortner
An application for URL shortening using firebase dynamic links.

## Usage

### Verify if app is up or not

#### Request - URL
`GET {HOST:PORT}`

#### Response
```json
{
    "name": "url-shortner",
    "version": "1.0.0"
}
```

### API to shorten url

#### Request - URL
`POST {HOST:PORT}/short-url`

#### Request - BODY
```json
{
	"url": "URL TO BE SHORTENED"
}
```

### Response
```json
{
    "shortLink": "SHORTENED URL"
}
```
