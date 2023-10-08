Feature: Lowercase String

Scenario: Lowercasing a string
  Given a string "aBc"
  When I lowercase the string
  Then the result should be "abc"