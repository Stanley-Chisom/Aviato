package services

import (
	"Aviato/server/config"
	"log"

	"github.com/go-resty/resty/v2"
)

var openSkyURL = "https://opensky-network.org/api/states/all"

func GetLiveFlightData() (string, error) {
	client := resty.New()

	username := config.GetEnv("OPEN_SKY_USERNAME")
	password := config.GetEnv("OPEN_SKY_PASSWORD")

	res, err := client.R().SetBasicAuth(username, password).Get(openSkyURL)

	if err != nil {
		log.Println("Error fetching real-time flight data:", err)
	}
	return res.String(), nil
}
