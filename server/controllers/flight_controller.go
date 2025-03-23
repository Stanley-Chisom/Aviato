package controllers

import (
	"Aviato/server/services"
	"github.com/gofiber/fiber/v2"
)

func GetFlightInfo(c *fiber.Ctx) error {

	flightNumber := c.Params("flightNumber")

	data, err := services.GetFlightInfo(flightNumber)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Failed to fetch flight details"})
	}
	return c.SendString(data)
}

func GetLiveFlightData(c *fiber.Ctx) error {
	data, err := services.GetLiveFlightData()

	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Failed to fetch live flight data "})
	}
	return c.SendString(data)
}
