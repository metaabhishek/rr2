# Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

1) We have created a system which will take feedback data under different categories , subcategories from different systems that already exists in our organization such as Academy,Reflect,Gistly etc.

2) For that we have made Feedback object to store the feedback coming from different systems 
3) We will store data in our Objects using REST Api , which will store the data in our objects on receiving from differet systems
4) Then we also maintain a employee database in Employee table 
5) According to data received in feedback table, we fetch leaderboard from the feedback table and show it through reports and dashboards.
6) Then we have set badge configuration for assigning badges to the employee which are in Badge Configuration table.
7) Then if any employee is eligible for any badge , an approval process runs and send approval mail to the approver of the badge .
8) If the approver approves the badge , then the badge is assigned to the employee.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
