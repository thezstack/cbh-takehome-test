# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

DataBase

- Estimate: 2 days

- create a procedure that maps the custom ids to internal database ids based on facility
    - We need to be able to keep track of custom ids set by clients within our system so that when the data is called we correctly
    provide the information requeste. 

Middle Layer

- Estimate: 2 days

- using getShiftsByFacility filter only agent metadata and return that to client so that they can view agent details in organized list
    - End users need to be able to see a complete list of agents based on the facility so they can update accordingly
- create an api call that sets the custom id
    - this api will handle the data coming in and set it accordingly
    - while setting compare ids and send back error if ids being set are inconsistent or duplicate. In case their are duplicate ids or un accebtable character that may pose a a security risk we need to sanitize input or return a warning message to end user



Front End

- Estimate: 3 - 4 days
- create a UX where the client can view agents and enter in custom id
  - Acceptance Criteria: Client should be able to view list of Agents and be allowed to set id manually using approriate UI Control (textbox or dropdown). 
- Show banner or alert message that highlights if id values are not acceptable
- Create ui control that allows client to select wheter or not they wish to have a custom id for agent. 
