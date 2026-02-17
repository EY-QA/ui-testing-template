Feature: Search

  Scenario: first test scenario
    Given I want to test the test page
    When I navigate to the test page url
    Then I should see the test page

  
  Scenario Outline: Successful login using different valid users
    Given I am on the login test page
    When I enter username "<username>" and password "<password>" and click the Login button
    Then I should be redirected to the dashboard

    Examples:
      | username        | password      |
      | standard_user   | secret_sauce  |
      | locked_out_user | secret_sauce  |
      | problem_user    | secret_sauce  |

