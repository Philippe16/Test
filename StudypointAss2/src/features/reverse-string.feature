Feature: Reverse String

Scenario: Reversing a string
  Given a string "aBc"
  When I reverse the string
  Then the result should be "cBa"