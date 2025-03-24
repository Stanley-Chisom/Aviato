package routes

import (
	"Aviato/controllers"

	"github.com/gofiber/fiber/v2"
)

func FlightRoutes(app *fiber.App) {
	flightGroup := app.Group("/api")

	flightGroup.Get("/flight/:flightNumber", controllers.GetFlightInfo)
	flightGroup.Get("/live-flights", controllers.GetLiveFlightData)
}
