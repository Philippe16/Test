Feature: Temperature

  Scenario: Convert Celsius to Fahrenheit
    Given a temperature of 0°C
    When I convert it to Fahrenheit using the celsiusToFahrenheit function
    Then the result should be 32°F

  