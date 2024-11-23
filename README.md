# ThreatFabric-test-assignment

## Introduction

TODO

The Playwright framework has been selected to provide test coverage for this application. More information about Playwright can be found [here](https://playwright.dev/docs/intro).

## Requirements

- `NodeJS 20+` - can be downloaded from [here](https://nodejs.org/en/download/package-manager)

## Setup Project

1. Clone the repository:

   ```sh
   git clone git@github.com:sirdir/ThreatFabric-test-assignment.git
   ```

2. Navigate to the project directory:

   ```sh
   cd ThreatFabric-test-assignment
   ```

3. Install project dependencies:

   ```sh
   npm install
   ```

4. Install playwright required dependencies (will ask for `sudo`):

   ```sh
   npx playwright install --with-deps chromium
   ```

## TODO mayber smth else will be added during development

## Usage

TODO

## Reporting

TODO

## CI

TODO

## Static Analysis and Code Style

To maintain a consistent code style and prevent potential issues, Prettier and ESLint have been utilized as tools. Before each commit, a `pre-commit` hook is triggered to run Prettier and ESLint.

Some changes have been made to the application source code due to potential issues identified by ESLint.
