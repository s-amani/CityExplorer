terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "3.87.0"
    }
  }
}

provider "azurerm" {
  features {

  }
}

locals {
  docker = {
    registry_url = "https://index.docker.io"
    image_name = "saberamani/city-explorer"
  }

  app = {
    name = "city-explorer"
  }
}

resource "azurerm_resource_group" "city-explorer-arg" {
  name                  = "${local.app.name}-rg"
  location              = "UK South"
}

resource "azurerm_service_plan" "city-explorer-sp" {
  name                = "${local.app.name}-webapp-sp"
  resource_group_name = azurerm_resource_group.city-explorer-arg.name
  location            = azurerm_resource_group.city-explorer-arg.location
  os_type             = "Linux"
  sku_name            = "B1"
}

resource "azurerm_linux_web_app" "city-explorer-lwa" {
  name                = "${local.app.name}-webapp"
  resource_group_name = azurerm_resource_group.city-explorer-arg.name
  location            = azurerm_resource_group.city-explorer-arg.location
  service_plan_id     = azurerm_service_plan.city-explorer-sp.id

  app_settings = {

  }

  site_config {
    always_on = true

    application_stack {
      docker_image_name = "${local.docker.image_name}:latest"
      docker_registry_url = "${local.docker.registry_url}"
      node_version = "20.10.0"
    }    
  }
}