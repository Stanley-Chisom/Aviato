package services

import (
	"Aviato/server/config"
	"fmt"
	"log"

	"github.com/go-resty/resty/v2"
)

var aviationStackURL = "https://api.aviationstack.com/v1/flights"

func GetFlightInfo(flightNumber string) (string, error) {
	client := resty.New()
	apiKey := config.GetEnv("AVIATIONSTACK_API_KEY")

	url := fmt.Sprintf(
		"%s?access_key=%s&flight_iata=%s", 
		aviationStackURL, apiKey, flightNumber)

	res, err := client.R().Get(url)

	if err != nil {
		log.Println("Error fetching flight info:", err)
	}
	return res.String(), nil
}
