Feature: Capitalize String

Scenario: Capitalizing a string
  Given a string "aBc"
  When I capitalize the string
  Then the result should be "ABC"