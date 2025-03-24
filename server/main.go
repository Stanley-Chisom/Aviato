package main

import (
	"Aviato/config"
	"Aviato/routes"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	config.LoadEnv()

	app := fiber.New()

	routes.FlightRoutes(app)

	log.Fatal(app.Listen(":8080"))
}
