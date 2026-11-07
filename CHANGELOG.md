# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-11-07

### Added

* Added automated unit tests for URL merging, executed by GitHub Actions before deployment.
* Added a separate **Clear** action for the merged result, preserving the input URLs.
* Added a **Paste from clipboard** button for input URLs, with localized feedback.
* Added keyboard shortcuts for merging URLs, copying the result, and clearing the result.
* Added a localized **About** page with features, keyboard shortcuts, privacy information, and the deployed application version.

### Changed

* Extracted URL merging logic into `merger.js` and interface translations into `translation.js`.
* Preserved the merged result and selected parameters when switching interface languages.
* Renamed the input **Clear** action to **Clear all**, retaining its existing behavior.
* Updated offline caching and deployment version tracking to include the extracted JavaScript files.
* Made the merged result more prominent and moved **Copy result** next to its heading.
* Moved **Clear all** alongside **Clear result** and gave both buttons a consistent outlined appearance.
* Added temporary **Copied** feedback on the copy button without replacing the existing status message.
* Improved keyboard Tab navigation through the application controls.
* Extracted shared styles into `style.css` for the main and About pages.
* Extended offline caching and deployment version tracking to include the About page and shared stylesheet.
* Unified and compacted the headers on both pages to save vertical space, especially on mobile.

### Removed

* Removed the option to download the merged result as a text file.

## [1.0.0] - 2026-11-06

### Added

* Implemented URL merging with duplicate handling and parameter selection.
* Added multilingual user interface.
* Added Progressive Web App (PWA) support with offline functionality.
* Introduced automatic application versioning and update notifications.
* Added automatic light and dark theme support based on system preferences.
