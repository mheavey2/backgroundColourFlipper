# Color Flipper App

## Description

## Issues

- Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
  - resolved issue by adding 'async' attribute to the script source tags at the start of the page to ensure the page had fully loaded prior to running the script
